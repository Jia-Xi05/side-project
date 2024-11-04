function addOptionToList() {
    const option = document.getElementById('newOptionInput').value;
    if (option) {
        let options = JSON.parse(localStorage.getItem('options')) || [];
        options.push(option);
        localStorage.setItem('options', JSON.stringify(options));
        displayOptions();
    }
}

function displayOptions() {
    let options = JSON.parse(localStorage.getItem('options')) || [];
    const list = document.getElementById('optionsDisplayList');
    list.innerHTML = '';
    options.forEach(opt => {
        let li = document.createElement('li');
        li.innerText = opt;
        list.appendChild(li);
    });
}

displayOptions();
