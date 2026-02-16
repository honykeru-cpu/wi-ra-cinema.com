var x = 960, y = 540, speed = 80, backCount = 0;

function loadSite(url) {
    var wrapper = document.getElementById('frame-wrapper');
    var frame = document.getElementById('site-frame');
    wrapper.style.display = 'block';
    frame.src = url;
}

document.addEventListener('keydown', function(e) {
    var cursor = document.getElementById('cursor');
    var wrapper = document.getElementById('frame-wrapper');

    switch(e.keyCode) {
        case 37: x -= speed; break; // Sol
        case 39: x += speed; break; // Sağ
        case 38: y -= speed; break; // Üst
        case 40: y += speed; break; // Alt
        case 13: // Tamam
            var el = document.elementFromPoint(x, y);
            if (el) el.click();
            break;
        case 10009: // GERİ TUŞU
            if (wrapper.style.display === 'block') {
                // 1. Basış: Siteden çık, menüye dön
                wrapper.style.display = 'none';
                document.getElementById('site-frame').src = "";
            } else {
                // 2. Basış: Menüdeyken çıkış yap
                backCount++;
                if (backCount >= 2) {
                    if(typeof tizen !== 'undefined') tizen.application.getCurrentApplication().exit();
                }
                setTimeout(function() { backCount = 0; }, 1000);
            }
            break;
    }
    x = Math.max(20, Math.min(1900, x));
    y = Math.max(20, Math.min(1060, y));
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});
