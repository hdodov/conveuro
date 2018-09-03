function apiCall() {
    var req = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
        req.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                if (this.status == 200) {
                    var data = null;

                    try {
                        data = JSON.parse(this.responseText);
                    } catch (e) {
                        return reject({
                            message: "Couldn't parse response data."
                        });
                    }

                    if (data && data.rates) {
                        console.log('API response:', data);
                        return resolve(data);
                    } else {
                        return reject({
                            message: "No rates data found in response."
                        });
                    }
                } else {
                    return reject({
                        message: this.statusText,
                        status: this.status
                    });
                }
            } 
        });

        req.open("GET", CONFIG.apiUrl, true);
        req.send(null);
    });
}

function getRates() {
    return new Promise(function (resolve, reject) {
        chrome.storage.sync.get("apiResponse", function (data) {
            var cached = data.apiResponse;

            if (cached) {
                var cachedDate = new Date(cached.timestamp * 1000) // returned by API in seconds
                ,   currentDate = new Date()
                ,   elapsedTime = currentDate - cachedDate
                ,   cacheDuration = (36 * 60 * 60 * 1000);

                if (elapsedTime < cacheDuration) {
                    console.log('Data cached for', parseInt((cacheDuration - elapsedTime) / 60000), 'minutes:', cached);
                    return resolve(cached);
                }
            }

            apiCall().then(function (data) {
                chrome.storage.sync.set({
                    apiResponse: data
                }, function (result) {
                    console.log('Saved response in synced storage:', result);
                    resolve(data);
                });
            }).catch(reject);
        });
    });
}