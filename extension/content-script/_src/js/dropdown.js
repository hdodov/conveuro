function Dropdown(container) {
    this.container = container || document.body;
    this.loaded = false;
    this.destroyed = false;
    this.onDestroy = null;

    this.elem = document.createElement("div");
    this.container.appendChild(this.elem);

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
        this.btnMore.classList.add("is-hidden");

        this.list.style.maxHeight = this.list.offsetHeight + "px";
        this.list.childNodes.forEach(function (node) {
            node.classList.remove("is-hidden");
        });
    }.bind(this));

    this.btnClose.addEventListener("click", function () {
        this.close();
    }.bind(this));
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