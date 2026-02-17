function initAdBlocker() {
    console.log("WiRa Cinema Reklam engelleyici aktif edildi.");
    const adKeywords = ["adservice", "doubleclick.net", "google-analytics.com", "googlesyndication.com", "youtube.com/pagead/", "/ads?", "adsystem", "amazon-adsystem", "adnxs.com"];
    
    // Ağ isteklerini dinleyerek reklamları keser
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (adKeywords.some(keyword => url.includes(keyword))) {
            console.log("Engellendi (XHR): " + url);
            return; // Reklam isteğini göndermeyi engelle
        }
        originalOpen.apply(this, arguments);
    };

    // Script yüklemelerini dinleyerek reklam scriptlerini keser
    window.addEventListener('beforescriptexecute', function(e) {
        if (e.target && e.target.src && adKeywords.some(keyword => e.target.src.includes(keyword))) {
            e.preventDefault(); // Scriptin yüklenmesini engelle
            e.stopPropagation();
            console.log("Engellendi (Script): " + e.target.src);
        }
    }, true); // true, event'in capture phase'de yakalanmasını sağlar
}
