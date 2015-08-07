chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'id': 'timer_window',
        'frame': 'none',
        'resizable': false,
        'alwaysOnTop': true,
        'bounds': {
            'width': 160,
            'height': 100,
            'left': 0,
            'top': 100
        }
    });
});


window.addEventListener("load", init);

function init() {
    checkVersion();
}

function checkVersion() {
    var landingUrl = "http://timedoser.daniguardiola.me/#changes?installed=true";
    var version = chrome.runtime.getManifest().version;
    var updatedUrl;
    chrome.storage.local.get("versionNumber", function(storage) {
        var versionNumber = storage.versionNumber;
        if (!versionNumber) {
            openPopup(landingUrl);
        } else if (versionNumber !== version) {
            updatedUrl = updatedUrl = "http://timedoser.daniguardiola.me/#changes?update=true&version=" + version;
            openPopup(updatedUrl);
        }
        chrome.storage.local.set({
            "versionNumber": version
        });
    });

}

function openPopup(url) {
    window.open(url);
}


/*chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('apiconsole/apiDEVinput.html', {
        'id': 'apiDEVinput',
        'frame': 'none',
        'resizable': false,
        'bounds': {
            'width': 160,
            'height': 100,
            'left': 0,
            'top': 200
        }
    });
});*/
