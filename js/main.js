window.onload = function() {
    const keys = ["Left", "Right", "Up", "Down", "Enter", "Return"];
    keys.forEach(key => { try { tizen.tvinputdevice.registerKey(key); } catch (e) {} });

    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 10009) { // Back Key
            const frame = document.getElementById('site-frame');
            if (frame.style.display === 'block') {
                frame.style.display = 'none'; // Gömülü pencereyi kapat
                frame.src = "";
                document.getElementById('app-container').style.display = 'flex';
            } else {
                tizen.application.getCurrentApplication().exit();
            }
        }
    });
};
