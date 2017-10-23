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