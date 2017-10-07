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
        valueWhole = split[0];
        valueDecimal = split[1] || "",
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

    var result = valueWhole;
    if (shownDecimals.length > 0) {
        result += "." + shownDecimals;
    }

    return result;
}

function currencyValueString(code, value, showCode) {
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