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
        if (typeof texts[i] == "string") {
            if (typeof currency != "string") {
                currency = detectCurrency(texts[i]);
            }

            if (typeof value != "number") {
                value = detectNumber(texts[i]);
            }
        }
    }

    return {
        currency: currency,
        value: value
    };
}

function detectNumber(text) {
    var value = text.match(/\d[\d\., ]*k?/ig);

    if (value && value.length === 1) {
        var number = parseFloat(value[0].replace(/[^\d\.]/g, ''));

        if (value[0].match(/k/i)) {
            number *= 1000;
        }

        return number;
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
            if (text.indexOf(symbol) !== -1) {
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