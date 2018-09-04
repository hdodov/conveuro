function detectData(target) {
    var texts = [
        target.selectedText,
        target.startContainerText,
        target.endContainerText,
        target.commonAncestorText
    ];

    var currency = null,
        value = null;

    for (var i = 0; i < texts.length; i++) {
        if (typeof texts[i] == "string" && typeof value != "number") {
            value = detectNumber(texts[i]);
        }
    }

    // Detecting currencies is costly, so it's best to search only if a number
    // is found.
    if (typeof value == "number") {
        for (var i = 0; i < texts.length; i++) {
            if (typeof texts[i] == "string" && typeof currency != "string") {
                currency = detectCurrency(texts[i]);
            }
        }
    }

    return {
        currency: currency,
        value: value
    };
}

function detectNumber(text) {
    var regex = /(\d(?:[\.,\s]?\d+)*)(?:([a-z])\b)?/i
    ,   match = regex.exec(text)
    ,   number
    ,   modifier;

    if (match && match.length) {
        number = parseNumber(match[1]);
        modifier = match[2];

        if (modifier) {
            CONFIG.modifierSymbols.forEach(function (symbol) {
                if (modifier.match(symbol[0])) {
                    number *= symbol[1];
                }
            });
        } else {
            CONFIG.modifierWords.forEach(function (word) {
                if (text.match(word[0])) {
                    number *= word[1];
                }
            });
        }
    }

    if (typeof number == "number" && number !== NaN) {
        return number;
    } else {
        return null;
    }
}

function detectCurrency(text) {
    var c_codes = filterCurrencies(function (currency, code) {
        return (text.indexOf(code) !== -1) ? true : false;
    });

    // Codes (USD, GBP, EUR...) have the highest weight. They are the most
    // unique identity of a currency. If a single one is found, return it,
    // otherwise proceed to elimination by daily share value.
    if (obj_length(c_codes) === 1) {
        for (var k in c_codes) {
            return k;
        }
    }

    var c_symbols = filterCurrencies(function (currency) {
        var matched = 0;

        currency.symbols.forEach(function (symbol) {
            if (typeof symbol == "string" && text.indexOf(symbol) !== -1) {
                var escapedSymbol = symbol.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
                ,   patternAtStart = new RegExp('(?:\\s|^)' + escapedSymbol + '\\d+')
                ,   patternAtEnd = new RegExp('\\d+\\s?' + escapedSymbol + '(?:\\s|$)');

                // This is needed for cases where `foo 5 krtest` would match `kr` as the
                // symbol, even though it's part of a word. The patterns ensure it should
                // either begin with empty space and the symbol, or the symbol and then empty space.

                if (text.match(patternAtStart) || text.match(patternAtEnd)) {
                    matched++;
                }
            }
        });

        return (matched > 0) ? matched : false;
    });

    var c_keywords = filterCurrencies(function (currency) {
        var matched = 0;

        currency.words.forEach(function (word) {
            if (text.match(new RegExp(word, 'i'))) {
                matched++;
            }
        });
        
        return (matched > 0) ? matched : false;
    });

    c_symbols = obj_filter_highest(c_symbols);
    c_keywords = obj_filter_highest(c_keywords);
    
    var currencies = Object.keys(obj_merge(c_symbols, c_keywords));
    currencies = currencies.sort(function (a, b) {
        if (CURRENCIES[a] && CURRENCIES[b]) {
            return CURRENCIES[b].share - CURRENCIES[a].share;
        } else {
            return 0;
        }
    });

    if (currencies.length > 0) {
        return currencies[0];
    } else {
        return null;
    }
}