document.addEventListener("mouseup", function (event) {
    var range = getSelectionRange();

    if (
        !range ||
        elementIsInDropdown(range.startContainer) || 
        elementIsInDropdown(range.endContainer)
    ) {
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

    if (shouldRequest) {
        chrome.runtime.sendMessage({
            getWorthy: true,
            data: rangeData
        }, function (data) {
            if (
                data &&
                typeof data.currency == "string" &&
                typeof data.value == "number" &&
                parseInt(data.value) != 0 &&
                DropdownManager.exists(data.title) == false
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

    DropdownManager.add(dropdown, data.title);
    dropdown.addClickClose();

    var dragger = new Draggable(dropdown.elem);
    dragger.trigger = dropdown.title;
    dragger.init();
    dragger.onStart = function () {
        dropdown.removeClickClose();
    };

    dropdown.onDestroy = function () {
        DropdownManager.remove(dropdown);
        dragger.destroy();
    };

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

    setTimeout(function () {
        dropdown.show();
    }, 150);
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

    if (
        typeof data.startContainerText == "string" &&
        range.startContainer.nodeType == Node.TEXT_NODE
    ) {
        // If startContainer is a Text Node, startOffset always holds the
        // number of characters skipped before the selection began. By
        // utilizing that, the detection accuracy is improved.
        data.startContainerText = data.startContainerText.substr(range.startOffset);
    }

    if (
        typeof data.endContainerText == "string" &&
        range.endContainer.nodeType == Node.TEXT_NODE
    ) {
        data.endContainerText = data.endContainerText.substr(0, range.endOffset);
    }

    return data;
}

function getWorthyText(text) {
    if (
        typeof text == "string" &&
        text.length < CONFIG.maxTextLength // otherwise user is obviously not trying to convert
    ) {
        return text;
    } else {
        return null;
    }
}