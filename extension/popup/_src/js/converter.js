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