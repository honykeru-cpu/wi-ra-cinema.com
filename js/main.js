// Tizen Tarayıcı Modu Aktif
var x = 960, y = 540, speed = 85, backCount = 0;

// İmleci her sayfada yeniden oluştur (Eğer sayfa değişirse)
function createCursor() {
    if (!document.getElementById('cursor')) {
        var c = document.createElement('div');
        c.id = 'cursor';
        c.style.cssText = "width:60px; height:60px; background:rgba(255,0,0,0.85); border:4px solid white; border-radius:50%; position:absolute; z-index:999999; pointer-events:none; left:"+x+"px; top:"+y+"px; box-shadow: 0 0 25px red;";
        document.body.appendChild(c);
    }
}

document.addEventListener('keydown', function(e) {
    createCursor(); // İmleç yoksa oluştur
    var cursor = document.getElementById('cursor');

    switch(e.keyCode) {
        case 37: x -= speed; break; // Sol
        case 39: x += speed; break; // Sağ
        case 38: y -= speed; break; // Üst
        case 40: y += speed; break; // Alt
        case 13: // ENTER (Tıkla)
            var el = document.elementFromPoint(x, y);
            if (el) el.click();
            break;
        case 10009: // GERİ TUŞU
            if (window.location.href.includes("github.io")) {
                // Ana menüdeysek 2 kez basınca çık
                backCount++;
                if (backCount >= 2) tizen.application.getCurrentApplication().exit();
                setTimeout(function() { backCount = 0; }, 1000);
            } else {
                // Sitedeysek ana menüye (GitHub'a) geri dön
                window.location.href = "https://honykeru-cpu.github.io/wi-ra-cinema.com/index.html";
            }
            break;
    }
    x = Math.max(10, Math.min(window.innerWidth - 60, x));
    y = Math.max(10, Math.min(window.innerHeight - 60, y));
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

// Sayfa her yüklendiğinde imleci hazırla
window.onload = createCursor;
