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