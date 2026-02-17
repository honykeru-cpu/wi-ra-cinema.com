function initAdBlocker() {
    const filters = ["ads", "doubleclick", "popunder", "analytics", "googlesyndication", "adservice"];
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (typeof url === 'string' && filters.some(f => url.includes(f))) return;
        originalOpen.apply(this, arguments);
    };
    console.log("AdBlocker Aktif!");
}
