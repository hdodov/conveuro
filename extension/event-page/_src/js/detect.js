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
    var regex = /([\d\., ]*\d)([a-z]?)/ig
    ,   match = regex.exec(text);

    if (match && match.length) {
        var number = match[1],
            modifier = match[2],
            value = parseFloat(number.replace(/[^\d\.]/g, ''));

        if (modifier) {
            for (var k in CONFIG.modifierCharacters) {
                if (modifier.match(new RegExp(k, "i"))) {
                    value *= CONFIG.modifierCharacters[k];
                }
            }
        } else {
            for (var k in CONFIG.modifierWords) {
                if (text.match(new RegExp(k, "i"))) {
                    value *= CONFIG.modifierWords[k];
                }
            }
        }

        return value;
    }

    return null;
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
            if (
                (typeof symbol == "string" && text.indexOf(symbol) !== -1) ||
                (typeof symbol == "object" && symbol instanceof RegExp && text.match(symbol))
            ) {
                matched++;
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