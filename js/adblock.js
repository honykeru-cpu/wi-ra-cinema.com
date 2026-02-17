/**
 * WiRa Cinema - Gelişmiş Reklam Engelleyici Motoru
 */
function initAdBlocker() {
    console.log("WiRa AdBlocker Motoru Çalıştırıldı...");

    // 1. Engellenecek Kelimeler Listesi (Genişletilmiş)
    const adKeywords = [
        "doubleclick", "adservice", "google-analytics", "googlesyndication",
        "popads", "popunder", "adsystem", "adnxs", "adskeeper", "adterra",
        "onclickads", "exoclick", "juicyads", "ad-delivery", "smartadserver"
    ];

    // 2. XMLHttpRequest (Ağ İsteklerini) Dinle ve Kes
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (typeof url === 'string' && adKeywords.some(keyword => url.toLowerCase().includes(keyword))) {
            console.warn("WiRa Engelledi (XHR): " + url);
            return; // İsteği durdur
        }
        originalOpen.apply(this, arguments);
    };

    // 3. Fetch API İsteklerini Dinle ve Kes
    const originalFetch = window.fetch;
    window.fetch = function() {
        let url = arguments[0];
        if (typeof url === 'string' && adKeywords.some(keyword => url.toLowerCase().includes(keyword))) {
            console.warn("WiRa Engelledi (Fetch): " + url);
            return Promise.reject("Ad Blocked by WiRa");
        }
        return originalFetch.apply(this, arguments);
    };

    // 4. DOM'da Sonradan Oluşan Reklam Elementlerini Temizle
    const observer = new MutationObserver(() => {
        const adElements = document.querySelectorAll('iframe[id*="google_ads"], div
