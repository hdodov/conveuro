(function () {
    var _$input = $(".input-convertor")
    ,   _$container = $(".converted-container")
    ,   _dropdown = null
    ,   _lastRequestTimestamp = null
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
            _shownConversion = null;
        };
    }

    function worthyConversion(data) {
        if (!_dropdown) {
            newDropdown();
        }

        _dropdown.renderPlaceholderList(3);
        _dropdown.setTitle(data.title);
        _dropdown.setLoading(true);

        var timestamp = Date.now();
        _lastRequestTimestamp = timestamp;

        chrome.runtime.sendMessage({
            getRates: true,
            currency: data.currency,
            value: data.value
        }, function (response) {
            // Check if this is a response to the latest request in case
            // multiple ones were made.
            if (timestamp !== _lastRequestTimestamp) {
                return;
            }

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
        chrome.runtime.sendMessage({
            getWorthy: true,
            data: {
                selectedText: _$input.val()
            }
        }, function (result) {
            if (result && _shownConversion !== result.title) {
                _shownConversion = result.title;
                worthyConversion(result);
            }
        });
    });

    _$input.focus();
})();