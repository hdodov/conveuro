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

    getRates().then(function (data) {
        var baseRate = data.rates[request.base]
        ,   baseCoef = 1 / baseRate; // from request rate to base (likely EUR)

        if (typeof baseRate !== 'number') {
            return sendResponse({
                error: 'No base rate found'
            });
        }

        request.list.forEach(function (item) {
            var itemRate = data.rates[item.code]
            ,   trueRate = baseCoef * itemRate;

            if (itemRate) {
                item.value = formatCurrencyValue(item.code, beautifyValue(trueRate * request.value, 3), false);
                item.rate = beautifyValue(trueRate, 5)
            }
        });

        sendResponse({
            list: request.list
        });
    });

    return true;
});