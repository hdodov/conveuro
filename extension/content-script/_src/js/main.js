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
            if (data && !DropdownManager.exists(data.title)) {
                createDropdown([event.pageX, event.pageY], data);   
            }
        });
    }
});

function createDropdown(position, data) {
    var dropdown = new Dropdown();
    dropdown.renderPlaceholderList(3);
    dropdown.setTitle(data.title);
    dropdown.setLoading(true);
    dropdown.setPosition(
        position[0] - (dropdown.elem.offsetWidth / 2),
        position[1] + 24
    );

    DropdownManager.add(dropdown, data.title);
    dropdown.addClickClose();

    var dragger = new Draggable(dropdown.elem);
    dragger.trigger = dropdown.title;
    dragger.init();
    dragger.onStart = function () {
        dropdown.removeClickClose();
        dropdown.elem.style.zIndex = CONFIG.dropdown.zIndex;
        CONFIG.dropdown.zIndex++;
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
        if (!dropdown.destroyed) {
            dropdown.setLoading(false);

            if (data.list) {
                dropdown.renderList(data.list);
            } else {
                dropdown.renderError(data);
            }
        }
    });

    setTimeout(function () {
        dropdown.show();
    }, 150);
}

function getRangeTextData(range) {
    var data = {
        commonAncestorText: getContainerText(range.commonAncestorContainer),
        selectedText: getSelectedText(range),
        startContainerText: null,
        endContainerText: null
    };

    // If start and end container are the same, their text would already be
    // inside `commonAncestorText`.
    if (range.startContainer !== range.endContainer) {
        data.startContainerText = getContainerText(range.startContainer);
        data.endContainerText = getContainerText(range.endContainer);
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

    for (var k in data) {
        data[k] = getWorthyText(data[k]);
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