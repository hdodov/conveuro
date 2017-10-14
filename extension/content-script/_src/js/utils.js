function elementIsInDropdown(elem) {
    var parent = elem.parentElement,
        count = 0;

    while (parent) {
        if (parent.classList.contains(CONFIG.dropdown.class)) {
            return true;
        } else {
            parent = parent.parentElement;
            count++;
        }

        if (count >= CONFIG.dropdown.maxDepth) {
            break;
        }
    }

    return false;
}

function getSelectionRange() {
    var selection = window.getSelection();

    for (var i = 0; i < selection.rangeCount; i++) {
        var range = selection.getRangeAt(i);

        if (!range.collapsed) {
            return range;
        }
    }
}

function getContainerText(container) {
    if (container.nodeType === Node.TEXT_NODE) {
        return container.wholeText;
    } else {
        return container.innerText;
    }
}

function getSelectedText(range) {
    if (
        range.startContainer === range.endContainer &&
        range.startContainer.nodeType === Node.TEXT_NODE
    ) {
        var start = range.startOffset,
            length = range.endOffset - start;

        return range.startContainer.wholeText.substr(start, length);
    } else {
        return null;
    }
}