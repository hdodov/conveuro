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