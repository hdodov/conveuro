function Dropdown(container) {
    this.container = container || document.body;
    this.loading = false;
    this.destroyed = false;
    this.requestTimestamp = null;
    this.onDestroy = null;

    this.elem = document.createElement("div");
    this.container.appendChild(this.elem);

    this.elem.classList.add("conveuro-dropdown", "is-hidden");
    this.elem.innerHTML = ''
    +   '<p class="conveuro-title"></p>'
    +   '<div class="conveuro-list"></div>'
    +   '<div class="conveuro-error"></div>'
    +   '<div class="conveuro-footer">'
    +       '<p class="js-conveuro-more">see more...</p>'
    +       '<p class="js-conveuro-close">close</p>'
    +   '</div>';

    this.title = this.elem.getElementsByClassName("conveuro-title")[0];
    this.list = this.elem.getElementsByClassName("conveuro-list")[0];
    this.errorContainer = this.elem.getElementsByClassName("conveuro-error")[0];
    this.btnMore = this.elem.getElementsByClassName("js-conveuro-more")[0];
    this.btnClose = this.elem.getElementsByClassName("js-conveuro-close")[0];

    this.btnMore.addEventListener("click", function () {
        this.btnMore.classList.add("is-hidden");

        this.list.style.maxHeight = this.list.offsetHeight + "px";
        this.list.style.overflow = "auto";
        this.list.childNodes.forEach(function (node) {
            node.classList.remove("is-hidden");
        });
    }.bind(this));

    this.btnClose.addEventListener("click", function () {
        this.close();
    }.bind(this));
} Dropdown.prototype = {
    requestData: function (data) {
        this.setLoading(true);
        this.setTitle(data.title);
        this.renderList(data.list);

        var timestamp = Date.now();
        this.requestTimestamp = timestamp;

        chrome.runtime.sendMessage({
            id: "fill_list",
            list: data.list,
            base: data.currency,
            value: data.value
        }, function (response) {
            if (this.requestTimestamp === timestamp && !this.destroyed) {
                this.handleData(response);
            }
        }.bind(this));
    },

    handleData: function (response) {
        this.setLoading(false);

        if (response.list) {
            this.renderList(response.list);
        } else {
            this.renderError(response);
        }
    },

    setPosition: function (x, y) {
        this.elem.style.left = x + "px";
        this.elem.style.top = y + "px";
    },

    emptyContent: function () {
        this.list.innerHTML = "";
        this.errorContainer.innerHTML = "";
    },

    createListItem: function (data) {
        var item = document.createElement("div")
        ,   name = data.name    || ""
        ,   value = data.value  || "----------"
        ,   rate = data.rate    || "-------"
        ,   code = data.code    || "----";

        item.innerHTML = ''
        +   '<p>' + value + '</p>'
        +   '<small title="' + name + '">'
        +       rate + ' ' + code
        +   '</small>';

        return item;
    },

    renderList: function (list) {
        this.emptyContent();
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

    renderError: function (data) {
        this.emptyContent();

        if (data.code) {
            this.errorContainer.innerHTML += '<p class="code">' + data.code + '</p>';
        }

        if (data.error) {
            this.errorContainer.innerHTML += '<p class="message">' + data.error + '</p>';
        }
    },

    setTitle: function (value) {
        this.title.innerHTML = value;
    },

    setLoading: function (value) {
        this.loading = value;

        if (this.loading === true) {
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
        this.elem.classList.add("is-closed");

        setTimeout(function () {
            this.destroy();
        }.bind(this), 500);
    },

    destroy: function () {
        if (this.destroyed) {
            return;
        }

        this.container.removeChild(this.elem);
        this.removeClickClose();

        this.container = null;
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