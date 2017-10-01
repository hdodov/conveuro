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

document.addEventListener("mouseup", function () {
    var range = getSelectionRange();

    if (range) {
        var text = getSelectedText(range);

        console.log(text);
    }
});