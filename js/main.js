var x = 960, y = 540, speed = 85, backCount = 0;

document.addEventListener('keydown', function(e) {
    var cursor = document.getElementById('cursor');

    switch(e.keyCode) {
        case 37: x -= speed; break; // Sol
        case 39: x += speed; break; // Sağ
        case 38: y -= speed; break; // Üst
        case 40: y += speed; break; // Alt
        case 13: // TAMAM (Tıkla)
            var el = document.elementFromPoint(x, y);
            if (el) el.click();
            break;
        case 10009: // GERİ TUŞU
            // Eğer ana menüde (GitHub sayfasında) değilsek, ana menüye dön
            if (!window.location.href.includes("github.io")) {
                window.location.href = "https://honykeru-cpu.github.io/wi-ra-cinema.com/index.html";
            } else {
                // Ana menüdeyken hızlıca 2 kez basınca ÇIKIŞ YAP
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
