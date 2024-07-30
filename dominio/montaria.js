document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Burro ou mula',
            description: 'Deslocamento de 12 metros',
            image: 'images/mon1.jpg',
            value: '8 po',
            price: 8,
            speed: '12m',
            peso: '210 kg',
            rating: 2
        },
        {
            name: 'Camelo',
            description: 'Deslocamento de 15 metros',
            image: 'images/mon2.jpg',
            value: '50 po',
            price: 50,
            speed: '15m',
            peso: '240 kg',
            rating: 2
        },
        {
            name: 'Cavalo de guerra',
            description: 'Deslocamento de 18 metros',
            image: 'images/mon3.jpg',
            value: '400 po',
            price: 400,
            speed: '18m',
            peso: '270 kg',
            rating: 2
        },
        {
            name: 'Cavalo de montaria',
            description: 'Deslocamento de 18 metros',
            image: 'images/mon4.jpg',
            value: '75 po',
            price: 75,
            speed: '18m',
            peso: '220 kg',
            rating: 2
        },
        {
            name: 'Cavalo pesado',
            description: 'Deslocamento de 12 metros',
            image: 'images/mon5.jpg',
            value: '50 po',
            price: 50,
            speed: '12m',
            peso: '270 kg',
            rating: 2
        },
        {
            name: 'Elefante',
            description: 'Deslocamento de 12 metros',
            image: 'images/mon6.jpg',
            value: '200 po',
            price: 200,
            speed: '12m',
            peso: '660 kg',
            rating: 3
        },
        {
            name: 'Pônei',
            description: 'Deslocamento de 12 metros',
            image: 'images/mon7.jpg',
            value: '30 po',
            price: 30,
            speed: '12m',
            peso: '115 kg',
            rating: 1
        }
    ];

    const displayProducts = (products) => {
        const productList = document.getElementById('product-list');
        if (!productList) return;

        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            const productValue = document.createElement('p');
            productValue.textContent = `Valor: ${product.value}`;

            const productPeso = document.createElement('p');
            productPeso.textContent = `Peso: ${product.peso}`;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Comprar';
            buyButton.onclick = () => buyProduct(product);

            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productDescription);
            productItem.appendChild(productValue);
            productItem.appendChild(productPeso);
            productItem.appendChild(buyButton);

            productList.appendChild(productItem);
        });
    };

    const updateInventoryList = (inventory) => {
        const inventoryList = document.getElementById('inventory-list');
        if (!inventoryList) return;

        inventoryList.innerHTML = '';
        inventory.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('inventory-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            itemImage.alt = item.name;

            const itemName = document.createElement('p');
            itemName.textContent = `Nome: ${item.name}`;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description ? `Descrição: ${item.description}` : '';
            if (!item.description) itemDescription.style.display = 'none';

            const itemValue = document.createElement('p');
            itemValue.textContent = item.value ? `Valor: ${item.value}` : '';
            if (!item.value) itemValue.style.display = 'none';

            const itemPeso = document.createElement('p');
            itemPeso.textContent = item.peso ? `Peso: ${item.peso}` : '';
            if (!item.peso) itemPeso.style.display = 'none';

            const itemDetailsDiv = document.createElement('div');
            itemDetailsDiv.classList.add('item-details');
            itemDetailsDiv.appendChild(itemName);
            itemDetailsDiv.appendChild(itemDescription);
            itemDetailsDiv.appendChild(itemValue);
            itemDetailsDiv.appendChild(itemPeso);

            itemDiv.appendChild(itemImage);
            itemDiv.appendChild(itemDetailsDiv);

            inventoryList.appendChild(itemDiv);
        });
    };

    const buyProduct = (product) => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user && user.money >= product.price) {
            user.money -= product.price;
            const existingItem = user.inventory.find(item => item.name === product.name);

            if (existingItem) {
                existingItem.count++;
            } else {
                user.inventory.push({
                    name: product.name,
                    image: product.image,
                    description: product.description,
                    value: product.value,
                    peso: product.peso,
                    count: 1
                });
            }

            alert(`Você comprou ${product.name} por ${product.value}`);
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            document.getElementById('user-info').textContent = `Logado como ${user.username} com ${user.money} PO`;
            updateInventoryList(user.inventory);

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
            alert('Dinheiro insuficiente ou usuário não logado');
        }
    };

    const filterProducts = () => {
        const price = document.getElementById('price').value;
        const rating = document.getElementById('rating').value;

        let filteredProducts = products;

        if (price === 'low') {
            filteredProducts = filteredProducts.filter(product => product.price < 100);
        } else if (price === 'medium') {
            filteredProducts = filteredProducts.filter(product => product.price >= 100 && product.price <= 1000);
        } else if (price === 'high') {
            filteredProducts = filteredProducts.filter(product => product.price > 1000);
        }

        if (rating === '1') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) <= 150);
        } else if (rating === '2') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) > 150 && parseFloat(product.peso) <= 500);
        } else if (rating === '3') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) > 500);
        }

        displayProducts(filteredProducts);
    };

    displayProducts(products);

    window.filterProducts = filterProducts;
});