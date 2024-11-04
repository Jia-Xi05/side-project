function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 頁面加載時檢查深色模式設定
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
