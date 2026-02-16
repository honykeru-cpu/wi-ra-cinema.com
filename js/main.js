var x = 960, y = 540, speed = 85, backCount = 0;

document.addEventListener('keydown', function(e) {
    var frame = document.getElementById('site-frame');
    var cursor = document.getElementById('cursor');

    // Kumanda Yön Tuşları (Navigasyon)
    switch(e.keyCode) {
        case 37: x -= speed; break; // Sol
        case 39: x += speed; break; // Sağ
        case 38: y -= speed; break; // Üst
        case 40: y += speed; break; // Alt
        case 13: // ENTER (Tıklama)
            var el = document.elementFromPoint(x, y);
            if (el) { el.click(); }
            break;
        case 10009: // GERİ TUŞU
            backCount++;
            if (backCount === 1) {
                frame.contentWindow.history.back();
            } else if (backCount >= 3) {
                if (typeof tizen !== 'undefined') {
                    tizen.application.getCurrentApplication().exit();
                }
            }
            setTimeout(function() { backCount = 0; }, 2000);
            break;
    }

    // Ekran Sınırlarını Koru (1920x1080)
    x = Math.max(20, Math.min(1900, x));
    y = Math.max(20, Math.min(1060, y));
    
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

// Reklam Engelleyici Kontrolü
window.checkUrl = function(url) {
    if (adBlockerInstance && adBlockerInstance.isAds(url)) {
        console.warn("Reklam engellendi:", url);
        return true;
    }
    return false;
};
