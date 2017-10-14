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