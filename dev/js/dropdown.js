var Dropdown = (function () {
    var exports = {};

    var _exists = false,
        _dropdown,
        _title,
        _list,
        _btnMore,
        _btnClose

    function _create() {
        _dropdown = document.createElement("div");
        document.body.appendChild(_dropdown);
        _dropdown.classList.add("conveuro-dropdown");
        _dropdown.innerHTML =
        '<p class="conveuro-title"></p>' +
        '<div class="conveuro-list"></div>' +
        '<div class="conveuro-footer">' +
            '<p class="js-conveuro-more">see more...</p>' +
            '<p class="js-conveuro-close">close</p>' +
        '</div>';

        _title = _dropdown.getElementsByClassName("conveuro-title")[0];
        _list = _dropdown.getElementsByClassName("conveuro-list")[0];
        _btnMore = _dropdown.getElementsByClassName("js-conveuro-more")[0];
        _btnClose = _dropdown.getElementsByClassName("js-conveuro-close")[0];

        _btnMore.addEventListener("click", function () {
            this.classList.add("is-hidden");

            _list.style.maxHeight = _list.offsetHeight + "px";
            _list.childNodes.forEach(function (node) {
                node.classList.remove("is-hidden");
            });
        });

        _btnClose.addEventListener("click", function () {
            _dropdown.classList.add("is-hidden");
        });

        _exists = true;
    }

    function _renderList(data) {
        _list.innerHTML = "";
        _btnMore.classList.add("is-hidden");

        data.forEach(function (entry, i) {
            var item = _createListItem(entry[0], entry[1], entry[2]);
            _list.appendChild(item);

            if (i >= 3) {
                item.classList.add("is-hidden");
                _btnMore.classList.remove("is-hidden");
            }
        });
    }

    function _createListItem(currencyCode, value, rate) {
        var formattedValue = currencyValueString(currencyCode, beautifyValue(value, 3), false),
            formattedRate = beautifyValue(rate, 5);

        var item = document.createElement("div");
        item.innerHTML =
            '<p>' + formattedValue + '</p>' +
            '<small>' + formattedRate + ' ' + currencyCode + '</small>';

        return item;
    }

    function _setPosition(x, y) {
        _dropdown.style.left = x + "px";
        _dropdown.style.top = y + "px";
    }

    exports.show = function (position, currency, value, rates) {
        if (!_exists) {
            _create();
        }

        if (!_dropdown.classList.contains("is-hidden")) {
            _dropdown.classList.add("is-hidden");

            var that = this, args = arguments;
            setTimeout(function () {
                exports.show.apply(that, args);
            }, 100);

            return;
        }

        _dropdown.classList.remove("is-hidden");

        var list = [];
        for (var k in rates) {
            list.push([k, value * rates[k], rates[k]]);
        }

        _title.innerText = currencyValueString(currency, value);
        _renderList(list);
        _setPosition(position[0], position[1]);
    };

    return exports;
})();