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
        _dropdown.onDestroy = function () {
            _dropdown = null;
            _shownConversion = null;
        };
    }

    _$input.keyup(function () {
        chrome.runtime.sendMessage({
            id: "detect_data",
            data: {
                selectedText: _$input.val()
            }
        }, function (data) {
            if (data && _shownConversion !== data.title) {
                _shownConversion = data.title;

                if (!_dropdown) {
                    newDropdown();
                }

                _dropdown.requestData(data);

                setTimeout(function () {
                    _dropdown.show();
                }, 150);
            }
        });
    });

    _$input.focus();
})();