function initAdBlocker() {
    const filters = ["ads", "doubleclick", "analytics", "popunder", "googlesyndication", "adservice"];
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (filters.some(f => url.includes(f))) {
            console.log("REKLAM ENGELLENDI: " + url);
            return;
        }
        originalOpen.apply(this, arguments);
    };
    console.log("WiRa AdBlocker aktif.");
}
