(function () {
    var _$input = $(".input-currencies")
    ,   _instance = null;

    _$input.selectize({
        persist: true,
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