chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (sender.tab && request.getWorthy && request.data) {
        var detected = detectData(request.data);

        sendResponse({
            title: formatCurrencyValue(detected.currency, beautifyValue(detected.value, 3)),
            currency: detected.currency,
            value: detected.value
        });

        return true;
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (sender.tab && request.getRates) {
        currencyAPICall(request.currency, function (rates) {
            sendResponse({list: getRatesList(request.value, rates)});
        }, function (error) {
            sendResponse(error);
        });

        return true;
    }
});

function getRatesList(value, rates) {
    var list = [];

    for (var k in rates) {
        list.push({
            currency: k,
            name: CURRENCIES[k].name,
            value: formatCurrencyValue(k, beautifyValue(value * rates[k], 3), false),
            rate: beautifyValue(rates[k], 5)
        });
    }

    return list;
}

function currencyAPICall(currency, onComplete, onError) {
    var url = "https://api.fixer.io/latest?base=" + currency,
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