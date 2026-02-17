// Reklam Engelleyici Motoru
function initAdBlocker() {
    console.log("WiRa AdBlocker Başlatıldı...");
    const adDomains = ["doubleclick.net", "google-analytics.com", "ads.youtube.com", "popads.net"];
    
    // Ağ isteklerini takip eder ve reklamları durdurur
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (adDomains.some(domain => url.includes(domain))) {
            console.warn("Reklam Engellendi: " + url);
            return; 
        }
        originalOpen.apply(this, arguments);
    };
}
