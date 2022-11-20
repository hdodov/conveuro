var CONFIG = {
    apiUrl: "https://api.exchangerate.host/latest",

    modifierSymbols: [
        [/k/i, 1e3],
        [/m/i, 1e6],
        [/b/i, 1e9],
        [/t/i, 1e12]
    ],

    modifierWords: [
        [/thousand/i, 1e3],
        [/million/i, 1e6],
        [/billion/i, 1e9],
        [/trillion/i, 1e12]
    ]
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