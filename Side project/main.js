// 新增選項到清單
function addOption() {
    const option = document.getElementById('optionInput').value;
    if (option) {
        let options = JSON.parse(localStorage.getItem('options')) || [];
        options.push(option);
        localStorage.setItem('options', JSON.stringify(options));
        displayOptions();
    }
}

// 隨機選擇
function getRandomChoice() {
    let options = JSON.parse(localStorage.getItem('options')) || [];
    const result = options[Math.floor(Math.random() * options.length)];
    document.getElementById('resultDisplay').innerText = result;
    saveToHistory(result);
}

// 顯示選項
function displayOptions() {
    let options = JSON.parse(localStorage.getItem('options')) || [];
    document.getElementById('optionsList').innerText = options.join(', ');
}

displayOptions();
