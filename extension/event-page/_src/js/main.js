chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.id === "get_currencies") {
        sendResponse(CURRENCIES);
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.id !== "detect_data") return;

    var detected = detectData(request.data);

    if (
        typeof detected.currency == "string" &&
        typeof detected.value == "number" &&
        detected.value !== 0
    ) {
        chrome.storage.local.get("currencies", function (data) {
            var list = [];

            data.currencies.forEach(function (code) {
                if (CURRENCIES[code] && code !== detected.currency) {
                    list.push({
                        code: code,
                        name: CURRENCIES[code].name
                    });
                }
            });

            sendResponse({
                title: formatCurrencyValue(detected.currency, beautifyValue(detected.value, 3)),
                value: detected.value,
                currency: detected.currency,
                list: list
            });
        });

        return true;
    } else {
        sendResponse(false);
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.id !== "fill_list") return;

    currencyAPICall(request.base, function (rates) {
        request.list.forEach(function (item) {
            var itemRate = rates[item.code];

            if (itemRate) {
                item.value = formatCurrencyValue(item.code, beautifyValue(request.value * itemRate, 3), false);
                item.rate = beautifyValue(itemRate, 5)
            }
        });

        sendResponse({
            list: request.list
        });
    }, function (error, code) {
        sendResponse({
            error: error,
            code: code
        });
    });

    return true;
});

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
                    onError("Couldn't parse response data.");
                }

                if (data && data.rates) {
                    onComplete(data.rates);
                } else {
                    onError("No rates data found in response.");
                }
            } else {
                onError(this.statusText, this.status);
            }
        } 
    });

    req.open("GET", url, true);
    req.send(null);

    return req;
}