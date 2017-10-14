function obj_length(obj) {
    var i = 0;

    for (var k in obj) {
        i++;
    }

    return i;
}

function obj_filter(obj, predicate) {
    var passing = {};

    for (var k in obj) {
        if (predicate(obj[k], k)) {
            passing[k] = obj[k];
        }
    }

    return passing;
}

function obj_filter_highest(obj) {
    var max;

    for (var k in obj) {
        if (obj[k] > max || max === undefined) {
            max = obj[k];
        }
    }

    return obj_filter(obj, function (value) {
        return (value === max);
    });
}

function obj_merge() {
    var result = {};

    [].forEach.call(arguments, function (arg) {
        if (typeof arg === "object" && arg !== null) {
            for (var k in arg) {
                result[k] = arg[k];
            }
        }
    });

    return result;
}

function beautifyValue(value, digits) {
    if (typeof value !== "number") {
        return value;
    }

    var split = value.toString().split("."),
        valueWhole = split[0],
        valueDecimal = split[1] || "",
        shownWhole = addValueCommas(valueWhole),
        shownDecimalsCount = digits - valueWhole.length,
        shownDecimals = "";

    // Either show no digits, or at least two.
    if (shownDecimalsCount == 1) {
        shownDecimalsCount = 2;
    }

    if (shownDecimalsCount > 0) {
        for (var i = 0; i < shownDecimalsCount; i++) {
            shownDecimals += (valueDecimal[i] !== undefined) ? valueDecimal[i] : "0";
        }
    }

    var result = shownWhole;
    if (shownDecimals.length > 0) {
        result += "." + shownDecimals;
    }

    return result;
}

function addValueCommas(value) {
    if (typeof value == "string" || typeof value == "number") {
        var parsed = parseInt(value);

        if (typeof parsed != "number" || parsed == 0) {
            return value;
        }
    }
    
    var result = "",
        counter = 0;

    for (var i = value.length - 1; i >= 0; i--) {
        result = value[i] + result;
        counter++;

        if (counter >= 3 && i > 0) {
            result = "," + result;
            counter = 0;
        }
    }

    return result;
}

function filterCurrencies(predicate) {
    var passing = {};

    for (var k in CURRENCIES) {
        var result = predicate(CURRENCIES[k], k);

        if (result !== false) {
            passing[k] = result;
        }
    }

    return passing;
}

function formatCurrencyValue(code, value, showCode) {
    var result = value;

    if (CURRENCIES[code]) {
        result = CURRENCIES[code].format;
        result = result.replace(/\%d/g, value);
        result = result.replace(/\%s/g, (showCode !== false) ? code : "");
    }

    if (typeof result === "string") {
        return result.trim();
    } else {
        return value;
    }
}