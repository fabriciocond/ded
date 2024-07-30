document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    const displayInventory = (inventory) => {
        const inventoryList = document.getElementById('inventory-list');
        inventoryList.innerHTML = '';
        inventory.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('inventory-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            itemImage.alt = item.name;

            const itemName = document.createElement('h2');
            itemName.textContent = item.name;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;

            const itemValue = document.createElement('p');
            itemValue.textContent = `Valor: ${item.value}`;

            const itemBrand = document.createElement('p');
            itemBrand.textContent = `Classe de Armadura: ${item.brand}`;

            const itemPeso = document.createElement('p');
            itemPeso.textContent = `Peso: ${item.peso}`;

            const itemCount = document.createElement('p');
            itemCount.textContent = `Quantidade: ${item.count}`;

            const sellButton = document.createElement('button');
            sellButton.textContent = 'Vender';
            sellButton.onclick = () => sellItem(item);

            itemElement.appendChild(itemImage);
            itemElement.appendChild(itemName);
            itemElement.appendChild(itemDescription);
            itemElement.appendChild(itemValue);
            itemElement.appendChild(itemBrand);
            itemElement.appendChild(itemPeso);
            itemElement.appendChild(itemCount);
            itemElement.appendChild(sellButton);

            inventoryList.appendChild(itemElement);
        });
    };

    const sellItem = (item) => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        const existingItem = user.inventory.find(invItem => invItem.name === item.name);

        if (existingItem && existingItem.count > 0) {
            existingItem.count--;
            user.money += parseInt(item.value) / 2; // Supondo que item.value é uma string como "10 PO"

            if (existingItem.count === 0) {
                user.inventory = user.inventory.filter(invItem => invItem.name !== item.name);
            }

            localStorage.setItem('loggedInUser', JSON.stringify(user));
            document.getElementById('user-info').textContent = `Logado como ${user.username} com ${user.money} PO`;
            displayInventory(user.inventory);

            // Envia os dados para o PHP
            fetch('write.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `data=${encodeURIComponent(JSON.stringify(user))}`
            })
            .then(response => response.text())
            .then(result => {
                console.log(result);
                alert(result);
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro: ' + error);
            });
        } else {
            alert('Item não encontrado no inventário.');
        }
    };

    if (user) {
        document.getElementById('user-info').textContent = `Logado como ${user.username} com ${user.money} PO`;
        displayInventory(user.inventory);
    } else {
        document.getElementById('user-info').textContent = 'Usuário não logado.';
    }
});
