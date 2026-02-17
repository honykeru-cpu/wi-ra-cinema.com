function initAdBlocker() {
    console.log("AdBlocker devrede.");
    const adList = ["ads", "doubleclick", "popunder", "analytics", "googlesyndication"];
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (adList.some(ad => url.includes(ad))) {
            console.log("Engellendi: " + url);
            return;
        }
        originalOpen.apply(this, arguments);
    };
}
