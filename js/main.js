var x = 960, y = 540, speed = 80, backCount = 0;

document.addEventListener('keydown', function(e) {
    var cursor = document.getElementById('cursor');
    var frame = document.getElementById('site-frame');

    switch(e.keyCode) {
        case 37: x -= speed; break; 
        case 39: x += speed; break; 
        case 38: y -= speed; break; 
        case 40: y += speed; break; 
        case 13: // TAMAM
            var el = document.elementFromPoint(x, y);
            if (el) el.click();
            break;
        case 10009: // GERİ (Return)
            if (frame.style.display === 'block') {
                // Eğer bir site açıksa onu kapat ve ana menüye dön
                frame.style.display = 'none';
                frame.src = "";
            } else {
                // Ana menüdeyken 2 kez basarsan uygulamadan çık
                backCount++;
                if (backCount >= 2) {
                    if(typeof tizen !== 'undefined') tizen.application.getCurrentApplication().exit();
                }
                setTimeout(function() { backCount = 0; }, 1000);
            }
            break;
    }
    x = Math.max(25, Math.min(1895, x));
    y = Math.max(25, Math.min(1055, y));
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});
