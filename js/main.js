window.onload = function() {
    // 1. Kumanda Tuş Kaydı
    const keys = ["Left", "Right", "Up", "Down", "Enter", "Return"];
    keys.forEach(key => { try { tizen.tvinputdevice.registerKey(key); } catch (e) {} });

    // 2. Parlayan İmleci Fareye Bağla
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 3. Reklam Engelleyiciyi Uyandır
    if (typeof initAdBlocker === "function") { initAdBlocker(); }

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 10009) tizen.application.getCurrentApplication().exit();
    });
};
