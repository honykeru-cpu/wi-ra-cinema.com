window.onload = function() {
    // 1. Kumanda Tuş Kaydı
    const keys = ["Left", "Right", "Up", "Down", "Enter", "Return"];
    keys.forEach(key => { try { tizen.tvinputdevice.registerKey(key); } catch (e) {} });

    // 2. İmleç Takibi
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 3. Geri Tuşu Mantığı
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 10009) { // Geri tuşu
            const frame = document.getElementById('site-frame');
            if (frame.style.display === 'block') {
                frame.style.display = 'none'; // Siteyi kapat, menüye dön
                frame.src = ""; 
            } else {
                tizen.application.getCurrentApplication().exit(); // Uygulamadan çık
            }
        }
    });

    if (typeof initAdBlocker === "function") { initAdBlocker(); }
};
