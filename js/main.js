var x = 960, y = 540, speed = 85, backCount = 0;

function loadSite(url) {
    document.getElementById('main-grid').style.display = 'none';
    var frame = document.getElementById('site-frame');
    frame.style.display = 'block';
    frame.src = url;
}

document.addEventListener('keydown', function(e) {
    var frame = document.getElementById('site-frame');
    var cursor = document.getElementById('cursor');

    switch(e.keyCode) {
        case 37: x -= speed; break; // Sol
        case 39: x += speed; break; // Sağ
        case 38: y -= speed; break; // Üst
        case 40: y += speed; break; // Alt
        case 13: // Tamam (Enter)
            var el = document.elementFromPoint(x, y);
            if (el) el.click();
            break;
        case 10009: // Geri Tuşu
            if (frame.style.display === 'block') {
                frame.style.display = 'none';
                document.getElementById('main-grid').style.display = 'grid';
                frame.src = "";
            } else {
                backCount++;
                if (backCount >= 3) {
                    if(typeof tizen !== 'undefined') tizen.application.getCurrentApplication().exit();
                }
                setTimeout(function() { backCount = 0; }, 2000);
            }
            break;
    }
    x = Math.max(20, Math.min(1900, x));
    y = Math.max(20, Math.min(1060, y));
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});
