;(function() {
"use strict";

(function () {
    var _$input = $(".input-convertor")
    ,   _$container = $(".converted-container")
    ,   _dropdown = null
    ,   _shownConversion = null;

    function newDropdown() {
        if (_dropdown) {
            _dropdown.close();
        }

        _dropdown = new Dropdown(_$container[0]);
        _dropdown.renderPlaceholderList(3);
        _dropdown.setTitle("---");

        _dropdown.onDestroy = function () {
            _dropdown = null;
        };
    }

    function worthyConversion(data) {
        if (!_dropdown) {
            newDropdown();
        }

        _dropdown.renderPlaceholderList(3);
        _dropdown.setTitle(data.title);
        _dropdown.setLoading(true);

        chrome.runtime.sendMessage({
            getRates: true,
            currency: data.currency,
            value: data.value
        }, function (response) {
            console.log(response);
            _dropdown.setLoaded(true);

            if (response.list) {
                _dropdown.renderList(response.list);
            } else {
                _dropdown.renderError(response);
            }
        });

        setTimeout(function () {
            _dropdown.show();
        }, 150);
    }

    _$input.keyup(function () {
        console.log("keyup", $(this).val());

        chrome.runtime.sendMessage({
            getWorthy: true,
            data: {
                selectedText: _$input.val()
            }
        }, function (result) {
            console.log(result);

            if (result && _shownConversion !== result.title) {
                _shownConversion = result.title;
                worthyConversion(result);
            }
        });
    });
})();
(function () {
    var _$input = $(".input-currencies")
    ,   _instance = null;

    _$input.selectize({
        persist: false,
        highlight: true,

        labelField: ["code"],
        valueField: ["code"],
        searchField: ["code", "name"],
        sortField: [
            {field: "share", direction: "desc"},
            {field: "name", direction: "asc"}
        ],

        onChange: function (value) {
            chrome.storage.local.set({
                "currencies": value.split(",")
            });
        },

        render: {
            option: function (item, escape) {
                return ''
                + '<div class="option">'
                +   '<span class="name">' + item.name + '</span>'
                +   '<span class="code">' + item.code + '</span>'
                + '</div>';
            }
        }
    });

    _instance = _$input[0].selectize;

    chrome.runtime.sendMessage({getCurrencies: true}, function (data) {
        var options = [];

        for (var k in data) {
            options.push({
                code: k,
                share: data[k].share || 0,
                name: data[k].name
            });
        }

        _instance.addOption(options);

        chrome.storage.local.get("currencies", function (data) {
            data.currencies.forEach(function (currency) {
                _instance.addItem(currency, true);
            });
        });
    });
})();
}());
