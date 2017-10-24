;(function() {
"use strict";

var CONFIG = {
    getAPIURL: function (currency) {
        return "https://api.fixer.io/latest?base=" + currency;
    },

    modifierCharacters: {
        "k": 1e3,
        "m": 1e6,
        "b": 1e9,
        "t": 1e12
    },

    modifierWords: {
        "thousand": 1e3,
        "million": 1e6,
        "billion": 1e9,
        "trillion": 1e12
    }
};

var DEFAULTS = {
    currencies: ["USD", "EUR", "JPY", "GBP", "AUD"]
};

chrome.runtime.onInstalled.addListener(function (details) {
    chrome.storage.local.get(DEFAULTS, function (data) {
        console.log("Existing data", data);

        chrome.storage.local.set(data, function () {
            console.log("Updated data.");
        });
    });
});
// Currencies are ordered by their daily share value, if there is one.
// Source: https://en.wikipedia.org/wiki/Template:Most_traded_currencies

var CURRENCIES = {
  "AUD": { // https://en.wikipedia.org/wiki/Australian_dollar
    "name": "Australian Dollar",
    "share": 6.9,
    "symbols": ["$", "A$"],
    "format": "$%d %s",
    "words": [
      "australian",
      "dollar"
    ]
  },
  "BGN": { // https://en.wikipedia.org/wiki/Bulgarian_lev
    "name": "Bulgarian Lev",
    "share": null,
    "symbols": [/lv\b/i, "лв"],
    "format": "%dлв",
    "words": [
      "bulgarian",
      "lev",
      "българ",
      "лев"
    ]
  },
  "BRL": { // https://en.wikipedia.org/wiki/Brazilian_real
    "name": "Brazilian Real",
    "share": 1,
    "symbols": ["$", "R$"],
    "format": "R$%d %s",
    "words": [
      "brazilian",
      "real",
      "reais"
    ]
  },
  "CAD": { // https://en.wikipedia.org/wiki/Canadian_dollar
    "name": "Canadian Dollar",
    "share": 5.1,
    "symbols": ["$", "Can$", "C$"],
    "format": "$%d %s",
    "words": [
      "canadian",
      "dollar"
    ]
  },
  "CHF": { // https://en.wikipedia.org/wiki/Swiss_franc
    "name": "Swiss Franc",
    "share": 4.8,
    "symbols": ["Fr.", "SFr."],
    "format": "%d francs",
    "words": [
      "swiss",
      "franc",
      "franken",
      "franchi"
    ]
  },
  "CNY": { // https://en.wikipedia.org/wiki/Renminbi
    "name": "Chinese Yuan",
    "share": 4.0,
    "symbols": ["¥", "元", "RMB"],
    "format": "¥ %d %s",
    "words": [
      "chinese",
      "yuan",
      "yuán",
      "renminbi",
      "rénmínbì",
      "人民币"
    ]
  },
  "CZK": { // https://en.wikipedia.org/wiki/Czech_koruna
    "name": "Czech Koruna",
    "share": null,
    "symbols": [/Kč/i],
    "format": "%d Kč",
    "words": [
      "czech",
      "koruna",
      "česká",
      "ceska",
      "koruny",
      "české",
      "ceske"
    ]
  },
  "DKK": { // https://en.wikipedia.org/wiki/Danish_krone
    "name": "Danish Krone",
    "share": null,
    "symbols": [/kr\b/i],
    "format": "%s %d kroner",
    "words": [
      "danish",
      "krone",
      "kroner"
    ]
  },
  "EUR": { // https://en.wikipedia.org/wiki/Euro
    "name": "Euro",
    "share": 37.4,
    "symbols": ["€"],
    "format": "€%d %s",
    "words": [
      "euro"
    ]
  },
  "GBP": { // https://en.wikipedia.org/wiki/Pound_sterling
    "name": "British Pound",
    "share": 12.8,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "great",
      "british",
      "pound",
      "sterling",
      "quid"
    ]
  },
  "HKD": { // https://en.wikipedia.org/wiki/Hong_Kong_dollar
    "name": "Hong Kong Dollar",
    "share": 1.7,
    "symbols": ["$", "HK$", "元"],
    "format": "$%d %s",
    "words": [
      "hong",
      "kong",
      "dollar",
      "港元",
      "Góng yùn"
    ]
  },
  "HRK": { // https://en.wikipedia.org/wiki/Croatian_kuna
    "name": "Croatian Kuna",
    "share": null,
    "symbols": [/kn\b/i],
    "format": "%d kn",
    "words": [
      "croatian",
      "hrvatska",
      "kuna"
    ]
  },
  "HUF": { // https://en.wikipedia.org/wiki/Hungarian_forint
    "name": "Hungarian Forint",
    "share": null,
    "symbols": [/Ft\b/],
    "format": "%d Ft",
    "words": [
      "hungarian",
      "forint"
    ]
  },
  "IDR": { // https://en.wikipedia.org/wiki/Indonesian_rupiah
    "name": "Indonesian Rupiah",
    "share": null,
    "symbols": ["Rp"],
    "format": "Rp %d",
    "words": [
      "indonesian",
      "rupiah",
      "perak"
    ]
  },
  "ILS": { // https://en.wikipedia.org/wiki/Israeli_new_shekel
    "name": "Israeli New Shekel",
    "share": null,
    "symbols": ["₪"],
    "format": "₪%d %s",
    "words": [
      "israeli",
      "shekel",
      "שֶׁקֶל",
      "חָדָשׁ‎",
      "شيقل",
      "جديد",
      "shēqel",
      "jadīd"
    ]
  },
  "INR": { // https://en.wikipedia.org/wiki/Indian_rupee
    "name": "Indian Rupee",
    "share": 1.1,
    "symbols": ["₹"],
    "format": "₹%d %s",
    "words": [
      "indian",
      "rupee",
      "rupiya"
    ]
  },
  "JPY": { // https://en.wikipedia.org/wiki/Japanese_yen
    "name": "Japanese Yen",
    "share": 21.6,
    "symbols": ["¥", "円", "圓"],
    "format": "¥%d %s",
    "words": [
      "japanese",
      "yen",
      "円",
      "圓"
    ]
  },
  "KRW": { // https://en.wikipedia.org/wiki/South_Korean_won
    "name": "South Korean Won",
    "share": 1.7,
    "symbols": ["₩"],
    "format": "₩%d %s",
    "words": [
      "south",
      "korea",
      "won",
      "원"
    ]
  },
  "MXN": { // https://en.wikipedia.org/wiki/Mexican_peso
    "name": "Mexican Peso",
    "share": 1.9,
    "symbols": ["$", "Mex$"],
    "format": "$%d %s",
    "words": [
      "mexican",
      "peso"
    ]
  },
  "MYR": { // https://en.wikipedia.org/wiki/Malaysian_ringgit
    "name": "Malaysian Ringgit",
    "share": null,
    "symbols": ["RM"],
    "format": "RM%d",
    "words": [
      "malaysian",
      "ringgit"
    ]
  },
  "NOK": { // https://en.wikipedia.org/wiki/Norwegian_krone
    "name": "Norwegian Krone",
    "share": 1.7,
    "symbols": [/kr\b/i],
    "format": "%s %d kr",
    "words": [
      "norwegian",
      "krone"
    ]
  },
  "NZD": { // https://en.wikipedia.org/wiki/New_Zealand_dollar
    "name": "New Zealand Dollar",
    "share": 2.1,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "zealand",
      "dollar",
      "Tāra",
      "Aotearoa",
      "kiwi"
    ]
  },
  "PHP": { // https://en.wikipedia.org/wiki/Philippine_peso
    "name": "Philippine Peso",
    "share": null,
    "symbols": ["₱"],
    "format": "₱%d %s",
    "words": [
      "philippine",
      "peso",
      "piso",
      "pilipinas"
    ]
  },
  "PLN": { // https://en.wikipedia.org/wiki/Polish_z%C5%82oty
    "name": "Polish Zloty",
    "share": null,
    "symbols": ["zł", /zl\b/i],
    "format": "%dzł",
    "words": [
      "polish",
      "zloty",
      "złoty"
    ]
  },
  "RON": { // https://en.wikipedia.org/wiki/Romanian_leu
    "name": "Romanian Leu",
    "share": null,
    "symbols": [/leu\b/i],
    "format": "%d lei",
    "words": [
      "romanian",
      "leu",
      "lei"
    ]
  },
  "RUB": { // https://en.wikipedia.org/wiki/Russian_ruble
    "name": "Russian Ruble",
    "share": 1.1,
    "symbols": ["₽", "руб"],
    "format": "%d₽",
    "words": [
      "russian",
      "ruble",
      "рубль",
      "рубли́"
    ]
  },
  "SEK": { // https://en.wikipedia.org/wiki/Swedish_krona
    "name": "Swedish Krona",
    "share": 2.2,
    "symbols": [/kr\b/i],
    "format": "%s %d kr",
    "words": [
      "swedish",
      "krona",
      "kronor",
      "spänn",
      "pix",
      "daler",
      "riksdaler",
      "crowns",
      "bagare",
      "bagis",
      "lök"
    ]
  },
  "SGD": { // https://en.wikipedia.org/wiki/Singapore_dollar
    "name": "Singapore Dollar",
    "share": 1.8,
    "symbols": ["$", "S$"],
    "format": "S$%d %s",
    "words": [
      "singapore",
      "dollar"
    ]
  },
  "THB": { // https://en.wikipedia.org/wiki/Thai_baht
    "name": "Thai Baht",
    "share": null,
    "symbols": ["฿"],
    "format": "฿%d %s",
    "words": [
      "thai",
      "baht",
      "บาท"
    ]
  },
  "TRY": { // https://en.wikipedia.org/wiki/Turkish_lira
    "name": "Turkish Lira",
    "share": 1.4,
    "symbols": ["₺"],
    "format": "₺%d %s",
    "words": [
      "turkish",
      "lira",
      "Türk",
      "lirası"
    ]
  },
  "USD": { // https://en.wikipedia.org/wiki/United_States_dollar
    "name": "US Dollar",
    "share": 80.6,
    "symbols": ["$", "US"],
    "format": "$%d %s",
    "words": [
      "united",
      "states",
      "u.s.",
      "american",
      "dollar",
      "buck"
    ]
  },
  "ZAR": { // https://en.wikipedia.org/wiki/South_African_rand
    "name": "South African Rand",
    "share": 1.0,
    "symbols": [/R\b/],
    "format": "R %d",
    "words": [
      "south",
      "african",
      "rand"
    ]
  }
};
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
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.getCurrencies) {
        sendResponse(CURRENCIES);
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.getWorthy && request.data) {
        var detected = detectData(request.data);

        if (
            typeof detected.currency == "string" &&
            typeof detected.value == "number" &&
            parseInt(detected.value) != 0
        ) {
            sendResponse({
                title: formatCurrencyValue(detected.currency, beautifyValue(detected.value, 3)),
                currency: detected.currency,
                value: detected.value
            });
        } else {
            sendResponse(false);
        }

        return true;
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.getRates) {
        currencyAPICall(request.currency, function (rates) {
            getRatesList(request.value, rates, function (list) {
                sendResponse({list: list});
            });
        }, function (error) {
            sendResponse(error);
        });

        return true;
    }
});

function getRatesList(value, rates, callback) {
    chrome.storage.local.get("currencies", function (data) {
        var list = [];

        data.currencies.forEach(function (currency) {
            if (CURRENCIES[currency] && rates[currency]) {
                list.push({
                    currency: currency,
                    name: CURRENCIES[currency].name,
                    value: formatCurrencyValue(currency, beautifyValue(value * rates[currency], 3), false),
                    rate: beautifyValue(rates[currency], 5)
                });
            }
        });

        callback(list);
    });
}

function currencyAPICall(currency, onComplete, onError) {
    var url = CONFIG.getAPIURL(currency),
        req = new XMLHttpRequest();

    req.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                var data = null;

                try {
                    data = JSON.parse(this.responseText);
                } catch (e) {
                    onError({
                        message: "Couldn't parse response data."
                    });
                }

                if (data && data.rates) {
                    onComplete(data.rates);
                }
            } else {
                onError({
                    message: this.statusText,
                    code: this.status
                });
            }
        } 
    });

    req.open("GET", url, true);
    req.send(null);

    return req;
}
function obj_length(obj) {
    var i = 0;

    for (var k in obj) {
        i++;
    }

    return i;
}

function obj_filter(obj, predicate) {
    var passing = {};

    for (var k in obj) {
        if (predicate(obj[k], k)) {
            passing[k] = obj[k];
        }
    }

    return passing;
}

function obj_filter_highest(obj) {
    var max;

    for (var k in obj) {
        if (obj[k] > max || max === undefined) {
            max = obj[k];
        }
    }

    return obj_filter(obj, function (value) {
        return (value === max);
    });
}

function obj_merge() {
    var result = {};

    [].forEach.call(arguments, function (arg) {
        if (typeof arg === "object" && arg !== null) {
            for (var k in arg) {
                result[k] = arg[k];
            }
        }
    });

    return result;
}

function beautifyValue(value, digits) {
    if (typeof value !== "number") {
        return value;
    }

    var split = value.toString().split("."),
        valueWhole = split[0],
        valueDecimal = split[1] || "",
        shownWhole = addValueCommas(valueWhole),
        shownDecimalsCount = digits - valueWhole.length,
        shownDecimals = "";

    // Either show no digits, or at least two.
    if (shownDecimalsCount == 1) {
        shownDecimalsCount = 2;
    }

    if (shownDecimalsCount > 0) {
        for (var i = 0; i < shownDecimalsCount; i++) {
            shownDecimals += (valueDecimal[i] !== undefined) ? valueDecimal[i] : "0";
        }
    }

    var result = shownWhole;
    if (shownDecimals.length > 0) {
        result += "." + shownDecimals;
    }

    return result;
}

function addValueCommas(value) {
    if (typeof value == "string" || typeof value == "number") {
        var parsed = parseInt(value);

        if (typeof parsed != "number" || parsed == 0) {
            return value;
        }
    }
    
    var result = "",
        counter = 0;

    for (var i = value.length - 1; i >= 0; i--) {
        result = value[i] + result;
        counter++;

        if (counter >= 3 && i > 0) {
            result = "," + result;
            counter = 0;
        }
    }

    return result;
}

function filterCurrencies(predicate) {
    var passing = {};

    for (var k in CURRENCIES) {
        var result = predicate(CURRENCIES[k], k);

        if (result !== false) {
            passing[k] = result;
        }
    }

    return passing;
}

function formatCurrencyValue(code, value, showCode) {
    var result = value;

    if (CURRENCIES[code]) {
        result = CURRENCIES[code].format;
        result = result.replace(/\%d/g, value);
        result = result.replace(/\%s/g, (showCode !== false) ? code : "");
    }

    if (typeof result === "string") {
        return result.trim();
    } else {
        return value;
    }
}
}());
