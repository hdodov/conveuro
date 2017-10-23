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