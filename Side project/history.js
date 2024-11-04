// 顯示歷史紀錄
function displayHistory() {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    const list = document.getElementById('historyList');
    list.innerHTML = '';
    history.forEach(record => {
        let li = document.createElement('li');
        li.innerText = `${record.result} - ${record.date}`;
        list.appendChild(li);
    });
}

function saveToHistory(result) {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push({ result, date: new Date().toLocaleString() });
    localStorage.setItem('history', JSON.stringify(history));
}

displayHistory();
