// Turn dropdown into object. Each selection creates new dropdown.
// Make dropdown draggable by it's title area.

document.addEventListener("mouseup", function (e) {
    var range = getSelectionRange();

    if (range) {
        var text = getSelectedText(range);

        if (typeof text === "string") {
            var currency = detectCurrency(text),
                value = detectNumber(text);

            if (typeof currency === "string" && typeof value === "number") {
                currencyAPICall(currency, function (rates) {
                    Dropdown.show([e.pageX, e.pageY], currency, value, rates);
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

function currencyAPICall(currency, callback) {
    var url = "http://api.fixer.io/latest?base=" + currency,
        req = new XMLHttpRequest();

    req.addEventListener("load", function () {
        if (this.status >= 200 && this.status < 300) {
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

    req.open("GET", url);
    req.send();

    return req;
}