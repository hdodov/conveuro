;(function() {
"use strict";

// Most traded currencies: https://en.wikipedia.org/wiki/Template:Most_traded_currencies

var CURRENCIES = {
  "AUD": { // https://en.wikipedia.org/wiki/Australian_dollar
    "share": 6.9,
    "symbols": ["$", "A$"],
    "format": "$%d %s",
    "words": [
      "australian",
      "dollar"
    ]
  },
  "BGN": { // https://en.wikipedia.org/wiki/Bulgarian_lev
    "share": null,
    "symbols": ["лв"],
    "format": "%dлв",
    "words": [
      "bulgarian",
      "lev",
      "лев"
    ]
  },
  "BRL": { // https://en.wikipedia.org/wiki/Brazilian_real
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
    "share": 5.1,
    "symbols": ["$", "Can$", "C$"],
    "format": "$%d %s",
    "words": [
      "canadian",
      "dollar"
    ]
  },
  "CHF": { // https://en.wikipedia.org/wiki/Swiss_franc
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
    "share": 4.0,
    "symbols": ["元", "¥"],
    "format": "RMB %d",
    "words": [
      "chinese",
      "yuan",
      "人民币"
    ]
  },
  "CZK": { // https://en.wikipedia.org/wiki/Czech_koruna
    "share": null,
    "symbols": ["Kč"],
    "format": "%d Kč",
    "words": [
      "czech",
      "koruna",
      "česká",
      "koruny",
      "české"
    ]
  },
  "DKK": { // https://en.wikipedia.org/wiki/Danish_krone
    "share": null,
    "symbols": ["kr", "kr."],
    "format": "%d kroner",
    "words": [
      "danish",
      "krone",
      "kroner"
    ]
  },
  "EUR": { // https://en.wikipedia.org/wiki/Euro
    "share": 37.4,
    "symbols": ["€"],
    "format": "€%d %s",
    "words": [
      "euro"
    ]
  },
  "GBP": { // https://en.wikipedia.org/wiki/Pound_sterling
    "share": 12.8,
    "symbols": ["£"],
    "format": "£%d %s",
    "words": [
      "pound",
      "sterling",
      "quid"
    ]
  },
  "HKD": { // https://en.wikipedia.org/wiki/Hong_Kong_dollar
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
    "share": null,
    "symbols": ["kn"],
    "format": "%d kn",
    "words": [
      "croatian",
      "hrvatska",
      "kuna"
    ]
  },
  "HUF": { // https://en.wikipedia.org/wiki/Hungarian_forint
    "share": null,
    "symbols": ["Ft"],
    "format": "%d Ft",
    "words": [
      "hungarian",
      "forint"
    ]
  },
  "IDR": { // https://en.wikipedia.org/wiki/Indonesian_rupiah
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
    "share": 1.9,
    "symbols": ["$", "Mex$"],
    "format": "$%d %s",
    "words": [
      "mexican",
      "peso",
      "mexicano"
    ]
  },
  "MYR": { // https://en.wikipedia.org/wiki/Malaysian_ringgit
    "share": null,
    "symbols": ["RM"],
    "format": "RM%d",
    "words": [
      "malaysian",
      "ringgit"
    ]
  },
  "NOK": { // https://en.wikipedia.org/wiki/Norwegian_krone
    "share": 1.7,
    "symbols": ["kr"],
    "format": "%d kr",
    "words": [
      "norwegian",
      "krone"
    ]
  },
  "NZD": { // https://en.wikipedia.org/wiki/New_Zealand_dollar
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
    "share": null,
    "symbols": ["zł"],
    "format": "%dzł",
    "words": [
      "polish",
      "zloty",
      "złoty"
    ]
  },
  "RON": { // https://en.wikipedia.org/wiki/Romanian_leu
    "share": null,
    "symbols": ["leu"],
    "format": "%d lei",
    "words": [
      "romanian",
      "leu",
      "lei"
    ]
  },
  "RUB": { // https://en.wikipedia.org/wiki/Russian_ruble
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
    "share": 2.2,
    "symbols": ["kr"],
    "format": "%d kr",
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
    "share": 1.8,
    "symbols": ["$", "S$"],
    "format": "S$%d %s",
    "words": [
      "singapore",
      "dollar"
    ]
  },
  "THB": { // https://en.wikipedia.org/wiki/Thai_baht
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
    "share": 80.6,
    "symbols": ["$"],
    "format": "$%d %s",
    "words": [
      "united",
      "states",
      "U.S.",
      "american",
      "dollar",
      "buck"
    ]
  },
  "ZAR": { // https://en.wikipedia.org/wiki/South_African_rand
    "share": 1.0,
    "symbols": ["R"],
    "format": "R %d",
    "words": [
      "south",
      "african",
      "rand"
    ]
  }
};
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

    var result = valueWhole;
    if (shownDecimals.length > 0) {
        result += "." + shownDecimals;
    }

    return result;
}

function currencyValueString(code, value, showCode) {
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

function detectCurrency(text) {
    var c_codes = filterCurrencies(function (currency, code) {
        return (text.indexOf(code) !== -1) ? true : false;
    });

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
    
    var currencies = Object.keys(obj_merge(c_codes, c_symbols, c_keywords));
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
var Dropdown = (function () {
    var exports = {};

    var _exists = false,
        _dropdown,
        _title,
        _list,
        _btnMore,
        _btnClose

    function _create() {
        _dropdown = document.createElement("div");
        document.body.appendChild(_dropdown);
        _dropdown.classList.add("conveuro-dropdown");
        _dropdown.innerHTML =
        '<p class="conveuro-title"></p>' +
        '<div class="conveuro-list"></div>' +
        '<div class="conveuro-footer">' +
            '<p class="js-conveuro-more">see more...</p>' +
            '<p class="js-conveuro-close">close</p>' +
        '</div>';

        _title = _dropdown.getElementsByClassName("conveuro-title")[0];
        _list = _dropdown.getElementsByClassName("conveuro-list")[0];
        _btnMore = _dropdown.getElementsByClassName("js-conveuro-more")[0];
        _btnClose = _dropdown.getElementsByClassName("js-conveuro-close")[0];

        _btnMore.addEventListener("click", function () {
            this.classList.add("is-hidden");

            _list.style.maxHeight = _list.offsetHeight + "px";
            _list.childNodes.forEach(function (node) {
                node.classList.remove("is-hidden");
            });
        });

        _btnClose.addEventListener("click", function () {
            _dropdown.classList.add("is-hidden");
        });

        _exists = true;
    }

    function _renderList(data) {
        _list.innerHTML = "";
        _btnMore.classList.add("is-hidden");

        data.forEach(function (entry, i) {
            var item = _createListItem(entry[0], entry[1], entry[2]);
            _list.appendChild(item);

            if (i >= 3) {
                item.classList.add("is-hidden");
                _btnMore.classList.remove("is-hidden");
            }
        });
    }

    function _createListItem(currencyCode, value, rate) {
        var formattedValue = currencyValueString(currencyCode, beautifyValue(value, 3), false),
            formattedRate = beautifyValue(rate, 5);

        var item = document.createElement("div");
        item.innerHTML =
            '<p>' + formattedValue + '</p>' +
            '<small>' + formattedRate + ' ' + currencyCode + '</small>';

        return item;
    }

    function _setPosition(x, y) {
        _dropdown.style.left = x + "px";
        _dropdown.style.top = y + "px";
    }

    exports.show = function (position, currency, value, rates) {
        if (!_exists) {
            _create();
        }

        if (!_dropdown.classList.contains("is-hidden")) {
            _dropdown.classList.add("is-hidden");

            var that = this, args = arguments;
            setTimeout(function () {
                exports.show.apply(that, args);
            }, 100);

            return;
        }

        _dropdown.classList.remove("is-hidden");

        var list = [];
        for (var k in rates) {
            list.push([k, value * rates[k], rates[k]]);
        }

        _title.innerText = currencyValueString(currency, value);
        _renderList(list);
        _setPosition(position[0], position[1]);
    };

    return exports;
})();
// Turn dropdown into object. Each selection creates new dropdown.
// Make dropdown draggable by it's title area.

document.addEventListener("mouseup", function (event) {
    var range = getSelectionRange();

    if (range) {
        var text = getSelectedText(range);

        if (typeof text === "string") {
            var currency = detectCurrency(text),
                value = detectNumber(text);

            if (typeof currency === "string" && typeof value === "number") {
                chrome.runtime.sendMessage({currency: currency}, function (rates) {
                    console.log("aasd");
                    Dropdown.show([event.pageX, event.pageY], currency, value, rates);
                });
            }
        }
    }
});

function getSelectionRange() {
    var selection = window.getSelection();

    for (var i = 0; i < selection.rangeCount; i++) {
        var range = selection.getRangeAt(i);

        if (!range.collapsed) {
            return range;
        }
    }
}

function getSelectedText(range) {
    var container = range.commonAncestorContainer,
        start = range.startOffset,
        length = range.endOffset - start;

    if (container.nodeType === Node.TEXT_NODE) {
        return container.wholeText.substr(start, length);
    } else {
        return container.innerText;
    }
}

function detectNumber(text) {
    var value = text.match(/\d[\d\., ]*/g);

    if (value && value.length === 1) {
        return parseFloat(value[0].replace(/[^\d\.]/g, ''));
    }

    return null;
}
}());
