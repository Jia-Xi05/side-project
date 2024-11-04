// 切換 Dark Mode 並儲存偏好設定
function DarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 頁面加載時檢查 Dark Mode 設定
function applyDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// 應用設定
applyDarkMode();
