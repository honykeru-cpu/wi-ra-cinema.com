window.onload = function() {
    // 1. Kumanda Tuşlarını Kaydet
    const keys = ["Left", "Right", "Up", "Down", "Enter", "Return"];
    keys.forEach(key => { try { tizen.tvinputdevice.registerKey(key); } catch (e) {} });

    // 2. Özel Parlayan İmleç (Sarı Işık)
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 3. Reklam Engelleyiciyi Uyandır
    if (typeof initAdBlocker === "function") { initAdBlocker(); }
    
    // Geri Tuşu ile Uygulamadan Çıkış
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 10009) tizen.application.getCurrentApplication().exit();
    });
};
