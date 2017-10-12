// Make dropdown draggable by it's title area.
// Close dropdown when click occurs outside of it and it has not been dragged.

document.addEventListener("mouseup", function (event) {
    var range = getSelectionRange();
    console.log("range", range);

    if (!range) {
        return;
    }

    var rangeData = getRangeTextData(range),
        shouldRequest = false;

    for (var k in rangeData) {
        if (rangeData[k] !== null) {
            shouldRequest = true;
            break;
        }
    }

    console.log("rangeData", rangeData);

    if (shouldRequest) {
        chrome.runtime.sendMessage({
            getWorthy: true,
            data: rangeData
        }, function (data) {
            if (
                data &&
                typeof data.currency == "string" &&
                typeof data.value == "number" &&
                !DropdownManager.exists(data.title)
            ) {
                createDropdown([event.pageX, event.pageY], data);   
            }
        });
    }
});

function createDropdown(position, data) {
    var dropdown = new Dropdown(position[0], position[1]);
    dropdown.setTitle(data.title);
    dropdown.renderPlaceholderList(3);
    dropdown.setLoading(true);

    setTimeout(function () {
        dropdown.show();
    }, 150);

    chrome.runtime.sendMessage({
        getRates: true,
        currency: data.currency,
        value: data.value
    }, function (data) {
        dropdown.setLoaded(true);

        if (data.list) {
            dropdown.renderList(data.list);
        } else {
            dropdown.renderError(data);
        }
    });

    DropdownManager.add(dropdown, data.title);
    dropdown.onDestroy = function () {
        DropdownManager.remove(dropdown);
    };
}

function getRangeTextData(range) {
    var data = {
        commonAncestorText: getWorthyText(getContainerText(range.commonAncestorContainer)),
        selectedText: getWorthyText(getSelectedText(range)),
        startContainerText: null,
        endContainerText: null
    };

    // If start and end container are the same, their text would already be
    // inside `commonAncestorText`.
    if (range.startContainer !== range.endContainer) {
        data.startContainerText = getWorthyText(getContainerText(range.startContainer));
        data.endContainerText = getWorthyText(getContainerText(range.endContainer));
    }

    return data;
}

function getWorthyText(text) {
    if (
        typeof text == "string" &&
        text.length < 300 && // otherwise user is obviously not trying to convert
        text.match(/\d/) // at least a single digit is needed
    ) {
        return text;
    } else {
        return null;
    }
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