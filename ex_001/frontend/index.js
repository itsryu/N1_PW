document.getElementById('fuel-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const fuelPrice = parseFloat(document.getElementById('price').value);

    const totalConsumption = distance / consumption;
    const totalCost = totalConsumption * fuelPrice;

    document.getElementById('total-distance').innerText = `Distância: ${distance} km`;
    document.getElementById('total-consumption').innerText = `Consumo: ${totalConsumption.toFixed(2)} litros`;
    document.getElementById('total-cost').innerText = `Custo: R$ ${totalCost.toFixed(2)}`;

    document.getElementById('result').classList.remove('hidden');

    const historyRecord = {
        distance,
        consumption,
        fuelPrice,
        totalConsumption,
        totalCost,
        timestamp: new Date().toISOString()
    };

    fetch('http://localhost:5555/fuel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(historyRecord)
    })
    .then(response => response.json())
    .then(data => {
        fetchHistory();
    })
    .catch(error => console.error('Erro ao adicionar histórico: ', error));
});

document.getElementById('reset-button').addEventListener('click', function () {
    document.getElementById('fuel-form').reset();
    document.getElementById('result').classList.add('hidden');
});

function fetchHistory() {
    fetch('http://localhost:5555/fuel')
        .then(response => response.json())
        .then(data => {
            const historyList = document.getElementById('history-list');
            historyList.innerHTML = '';

            data.forEach(record => {
                const li = document.createElement('li');
                li.textContent = `Data: ${new Date(record.timestamp).toLocaleString()}, Distância: ${record.distance} km, Consumo: ${record.totalConsumption.toFixed(2)} litros, Custo: R$ ${record.totalCost.toFixed(2)}`;
                historyList.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao pegar histórico: ', error));
}

fetchHistory();