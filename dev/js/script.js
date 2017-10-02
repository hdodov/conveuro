function getSelectionRange() {
    var selection = window.getSelection();

    for (var i = 0; i < selection.rangeCount; i++) {
        var range = selection.getRangeAt(i);

        if (range.startContainer === range.endContainer && !range.collapsed) {
            return range;
        }
    }
}

function getSelectedText(range) {
    var wholeText = range.endContainer.textContent,
        start = range.startOffset,
        length = range.endOffset - start;

    if (wholeText) {
        return wholeText.substr(start, length);
    }
}

function detectNumber(text) {
    var value = text.match(/\d[\d\., ]*/g);
    if (value && value.length === 1) {
        return parseFloat(value[0].replace(/[^\d\.]/g, ''));
    }

    return null;
}

document.addEventListener("mouseup", function () {
    var range = getSelectionRange();

    if (range) {
        var text = getSelectedText(range);
        console.log(detectCurrency(text));
    }
});