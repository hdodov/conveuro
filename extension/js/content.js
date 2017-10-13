;(function() {
"use strict";

var CONFIG = {
    maxTextLength: 300,
    dropdown: {
        class: "conveuro-dropdown",
        maxDepth: 4
    }
};
function Draggable(elem) {
    this.elem = elem;
    this.trigger = elem;
    this.moving = false;

    this.onStart = null;
    this.onMove = null;
    this.onStop = null;

    this.startHandler = function (event) {
        event.preventDefault();
        event.stopPropagation();

        document.addEventListener("mousemove", this.moveHandler);
        document.addEventListener("mouseup", this.stopHandler);

        this.moving = true;
        this.start(event);
    }.bind(this);

    this.moveHandler = function (event) {
        this.move(event);
    }.bind(this);

    this.stopHandler = function (event) {
        if (this.moving) {
            document.removeEventListener("mouseup", this.stopHandler);
            document.removeEventListener("mousemove", this.moveHandler);

            this.moving = false;
            this.stop(event);
        }
    }.bind(this);
} Draggable.prototype = {
    init: function () {
        this.previousTriggerCursor = this.trigger.style.cursor;
        this.trigger.style.cursor = "move";
        this.trigger.addEventListener("mousedown", this.startHandler);
    },

    start: function (event) {
        var left = parseInt(this.elem.style.left),
            top = parseInt(this.elem.style.top);

        this.offset = {
            x: event.pageX - left,
            y: event.pageY - top
        };

        if (typeof this.onStart == "function") {
            this.onStart(event);
        }
    },

    move: function (event) {
        var left = event.pageX,
            top = event.pageY;

        if (this.offset) {
            left -= this.offset.x;
            top -= this.offset.y;
        }

        this.elem.style.left = left + "px";
        this.elem.style.top = top + "px";

        if (typeof this.onMove == "function") {
            this.onMove(event);
        }
    },

    stop: function (event) {
        if (typeof this.onStop == "function") {
            this.onStop(event);
        }
    },

    destroy: function () {
        this.trigger.style.cursor = this.previousTriggerCursor;
        this.trigger.removeEventListener("mousedown", this.startHandler);
        this.stopHandler();

        this.elem = null;
        this.target = null;
        this.offset = null;

        this.onStart = null;
        this.onMove = null;
        this.onStop = null;
    }
};
// This manager is used to prevent the appearance of multiple dropdowns with
// the same currency-value pairs. Mouse events may trigger multiple times
// without breaking the selection, causing a duplicate dropdown to appear.

var DropdownManager = (function () {
    var _dropdowns = [];

    function exists(title) {
        for (var i = 0; i < _dropdowns.length; i++) {
            if (_dropdowns[i].title == title) {
                return true;
            }
        }

        return false;
    }

    function add(dropdown, title) {
        if (!exists(title)) {
            _dropdowns.push({
                instance: dropdown,
                title: title
            });

            return true;
        }

        return false;
    }

    function remove(instance) {
        for (var i = _dropdowns.length - 1; i >= 0; i--) {
            if (_dropdowns[i].instance === instance) {
                _dropdowns.splice(i, 1);
            }
        }
    }

    return {
        exists: exists,
        add: add,
        remove: remove
    };
})();
function Dropdown(x, y) {
    this.loaded = false;
    this.destroyed = false;
    this.onDestroy = null;

    this.elem = document.createElement("div");
    document.body.appendChild(this.elem);

    this.elem.classList.add("conveuro-dropdown", "is-hidden");
    this.elem.innerHTML =
    '<p class="conveuro-title"></p>' +
    '<div class="conveuro-list"></div>' +
    '<div class="conveuro-error"></div>' +
    '<div class="conveuro-footer">' +
        '<p class="js-conveuro-more">see more...</p>' +
        '<p class="js-conveuro-close">close</p>' +
    '</div>';

    this.title = this.elem.getElementsByClassName("conveuro-title")[0];
    this.list = this.elem.getElementsByClassName("conveuro-list")[0];
    this.errorContainer = this.elem.getElementsByClassName("conveuro-error")[0];
    this.btnMore = this.elem.getElementsByClassName("js-conveuro-more")[0];
    this.btnClose = this.elem.getElementsByClassName("js-conveuro-close")[0];

    this.btnMore.addEventListener("click", function () {
        this.classList.add("is-hidden");

        this.list.style.maxHeight = this.list.offsetHeight + "px";
        this.list.childNodes.forEach(function (node) {
            node.classList.remove("is-hidden");
        });
    }.bind(this));

    this.btnClose.addEventListener("click", function () {
        this.close();
    }.bind(this));

    this.setPosition(x, y);
} Dropdown.prototype = {
    setPosition: function (x, y) {
        this.elem.style.left = x + "px";
        this.elem.style.top = y + "px";
    },

    createListItem: function (data) {
        var item = document.createElement("div");
        item.innerHTML =
            '<p>' + data.value + '</p>' +
            '<small title="' + data.name + '">' + data.rate + ' ' + data.currency + '</small>';

        return item;
    },

    renderList: function (list) {
        this.list.innerHTML = "";
        this.btnMore.classList.add("is-hidden");

        list.forEach(function (data, i) {
            var item = this.createListItem(data);
            this.list.appendChild(item);

            if (i >= 3) {
                item.classList.add("is-hidden");
                this.btnMore.classList.remove("is-hidden");
            }
        }.bind(this));
    },

    renderPlaceholderList: function (itemsCount) {
        var data = {
            value:      "----------",
            rate:       "-------",
            currency:   "----"
        };

        this.list.innerHTML = "";
        this.btnMore.classList.add("is-hidden");
        for (var i = 0; i < itemsCount; i++) {
            this.list.appendChild(this.createListItem(data));
        }
    },

    renderError: function (error) {
        this.renderList([]);
        this.errorContainer.innerHTML = '';

        if (error.code) {
            this.errorContainer.innerHTML += '<p class="code">' + error.code + '</p>';
        }

        if (error.message) {
            this.errorContainer.innerHTML += '<p class="message">' + error.message + '</p>';
        }
    },

    setTitle: function (value) {
        this.title.innerHTML = value;
    },

    setLoaded: function (value) {
        this.loaded = value;

        if (value === true) {
            this.setLoading(false);
        }
    },

    setLoading: function (value) {
        if (value === true && !this.loaded) {
            this.elem.classList.add("is-loading");
        } else {
            this.elem.classList.remove("is-loading");
        }
    },

    addClickClose: function () {
        this.clickCloseHandler = function (event) {
            if (!elementIsInDropdown(event.target)) {
                this.close();
            }
        }.bind(this);

        document.addEventListener("click", this.clickCloseHandler);
    },

    removeClickClose: function () {
        if (typeof this.clickCloseHandler == "function") {
            document.removeEventListener("click", this.clickCloseHandler);
            this.clickCloseHandler = null;
        }
    },

    show: function () {
        this.elem.classList.remove("is-hidden");
    },

    close: function () {
        this.elem.classList.add("is-hidden");

        var that = this;
        this.elem.addEventListener("transitionend", function () {
            that.destroy();
        });

        // If transitionend didn't trigger for some reason, wait some time and
        // remove the dropdown from the DOM.
        setTimeout(function () {
            if (!that.destroyed) {
                that.destroy();
            }
        }, 5000);
    },

    destroy: function () {
        if (this.destroyed) {
            return;
        }

        this.elem.parentElement.removeChild(this.elem);
        this.removeClickClose();

        this.elem = null;
        this.title = null;
        this.list = null;
        this.errorContainer = null;
        this.btnMore = null;
        this.btnClose = null;

        this.destroyed = true;

        if (typeof this.onDestroy == "function") {
            this.onDestroy();
        }
    }
};
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
}());
