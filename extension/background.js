chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (sender.tab && request.currency) {
        currencyAPICall(request.currency, function (rates) {
            sendResponse(rates);
        });

        return true;
    }
});

function currencyAPICall(currency, callback) {
    var url = "https://api.fixer.io/latest?base=" + currency,
        req = new XMLHttpRequest();

    req.addEventListener("readystatechange", function () {
        console.log(this.responseURL, this.status, this.statusText);

        if (this.status >= 200 && this.status < 300 && this.readyState === 4) {
            var data = null;

            try {
                data = JSON.parse(this.responseText);
            } catch (e) {
                console.warn("Conveuro: Couldn't parse response JSON.");
            }

            if (data && data.rates) {
                callback(data.rates);
            }
        }
    });

    req.open("GET", url, true);
    req.send(null);

    return req;
}