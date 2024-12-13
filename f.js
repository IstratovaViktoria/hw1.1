document.getElementById('generateButton').onclick = function() {
    const n = parseInt(document.getElementById('numberInput').value);
    let table = '<table><tr><th>*</th>';

    // Заголовки таблицы
    for (let i = 1; i <= n; i++) {
        table += `<th>${i}</th>`; 
    }
    table += '</tr>';

    // Заполнение таблицы
    for (let i = 1; i <= n; i++) {
        table += `<tr><th>${i}</th>`; 
        for (let j = 1; j <= n; j++) { 
            table += `<td>${i * j}</td>`; 
        }
        table += '</tr>'; 
    }

    table += '</table>';
    document.getElementById('result').innerHTML = table;
};