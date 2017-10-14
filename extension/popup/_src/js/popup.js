var cont1 = document.getElementById("allowed"),
    cont2 = document.getElementById("ignored");

chrome.runtime.sendMessage({getCurrencies: true}, function (data) {
    for (var k in data) {
        cont1.innerHTML += '<div>' + k + '</div>';
    }
});

dragula([cont1, cont2]);