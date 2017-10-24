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

        // The Conveuro dropdown has a maximum depth of elements. If it's
        // exceeded, don't look deeper because the element is obviously not in
        // a dropdown.
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
    var nodes = []
    ,   selectionStarted = false
    ,   containerText = ""
    ,   text = "";

    if (range.startContainer === range.endContainer) {
        nodes = [range.commonAncestorContainer];
    } else if (range.startContainer.parentElement === range.commonAncestorContainer) {
        nodes = range.commonAncestorContainer.childNodes;
    }

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] === range.startContainer) {
            selectionStarted = true;
        }

        if (selectionStarted) {
            containerText = getContainerText(nodes[i]);

            if (nodes[i].nodeType === Node.TEXT_NODE) {
                if (nodes[i] === range.endContainer) {
                    containerText = containerText.substr(0, range.endOffset);
                }

                if (nodes[i] === range.startContainer) {
                    containerText = containerText.substr(range.startOffset);
                }
            }

            text += containerText;
        }

        if (nodes[i] === range.endContainer) {
            break;
        }
    }

    return text;
}