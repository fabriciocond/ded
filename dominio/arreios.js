document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Carroça',
            description: '',
            image: 'images/ar2.jpg',
            value: '15 po',
            price: 15,
            peso: '100 kg',
            rating: 3
        },
        {
            name: 'Carruagem',
            description: '',
            image: 'images/ar4.jpg',
            value: '100 po',
            price: 100,
            peso: '300 kg',
            rating: 3
        },
        {
            name: 'Ração (1 dia)',
            description: '',
            image: 'images/ar3.jpg',
            value: '5 pc',
            price: 0.05,
            peso: '5 kg',
            rating: 2
        },
        {
            name: 'Sela Compacta',
            description: '',
            image: 'images/ar1.jpg',
            value: '5 po',
            price: 5,
            peso: '7,5 kg',
            rating: 2
        },
        {
            name: 'Sela Exótica',
            description: '',
            image: 'images/ar1.jpg',
            value: '60 po',
            price: 60,
            peso: '20 kg',
            rating: 3
        },
        {
            name: 'Sela Militar',
            description: '',
            image: 'images/ar1.jpg',
            value: '20 po',
            price: 20,
            peso: '15 kg',
            rating: 2
        },
        {
            name: 'Sela de Viagem',
            description: '',
            image: 'images/ar1.jpg',
            value: '10 po',
            price: 10,
            peso: '12,5 kg',
            rating: 2
        }
    ];

    const displayProducts = (products) => {
        const productList = document.getElementById('product-list');
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

    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        document.getElementById('user-info').textContent = `Logado como ${user.username} com ${user.money} PO`;
        updateInventoryList(user.inventory);
    }

    const buyProduct = (product) => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user.money >= product.price) {
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
            alert('Dinheiro insuficiente');
        }
    };

    displayProducts(products);

    window.filterProducts = () => {
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
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) <= 5);
        } else if (rating === '2') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) > 5 && parseFloat(product.peso) <= 15);
        } else if (rating === '3') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) > 15);
        }

        displayProducts(filteredProducts);
    };
});
