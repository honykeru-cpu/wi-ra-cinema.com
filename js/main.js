window.onload = function() {
    // 1. Kumanda tuşlarını TV sistemine tanıt (Register)
    const keysToRegister = ["Left", "Right", "Up", "Down", "Enter", "Return"];
    keysToRegister.forEach(key => {
        try {
            tizen.tvinputdevice.registerKey(key);
            console.log(`Kumanda tuşu kaydedildi: ${key}`);
        } catch (e) {
            console.warn(`Kumanda tuşu kaydedilemedi ${key}:`, e);
        }
    });

    // 2. Reklam engelleyiciyi başlat (adblock.js içindeki fonksiyon)
    if (typeof initAdBlocker === "function") {
        initAdBlocker();
    } else {
        console.warn("initAdBlocker fonksiyonu bulunamadı, reklam engelleme aktif olmayabilir.");
    }

    // 3. Geri tuşu ile uygulamadan tam çıkış
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === 10009) { // Geri tuşu keyCode'u
            console.log("Uygulama kapatılıyor...");
            tizen.application.getCurrentApplication().exit();
        }
    });

    // Sayfa yüklendikten sonra ilk odaklanacak öğeyi ayarla
    // Bu, sol menüdeki ilk link veya ana afişin üzerindeki "Şimdi İzle" butonu olabilir.
    setTimeout(() => {
        const firstFocusableElement = document.querySelector('a[tabindex="0"], button[tabindex="0"]');
        if (firstFocusableElement) {
            firstFocusableElement.focus();
            console.log("İlk öğeye odaklandı.");
        }
    }, 100); // Küçük bir gecikme, DOM'un tam yüklenmesi için
};
