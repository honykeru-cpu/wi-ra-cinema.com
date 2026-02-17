window.onload = function() {
    const keys = ["Left", "Right", "Up", "Down", "Enter", "Return"];
    keys.forEach(key => { try { tizen.tvinputdevice.registerKey(key); } catch (e) {} });

    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 10009) { // Geri Tuşu
            const frame = document.getElementById('site-frame');
            if (frame.style.display === 'block') {
                frame.style.display = 'none';
                frame.src = "";
                document.getElementById('app-container').style.display = 'block';
            } else {
                tizen.application.getCurrentApplication().exit();
            }
        }
    });

    if (typeof initAdBlocker === "function") initAdBlocker();
};
