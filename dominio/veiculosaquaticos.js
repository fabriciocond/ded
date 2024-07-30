document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Barco de quilha',
            description: 'Barco com quilha para navegação',
            image: 'images/ve1.jpg',
            value: '3.000 po',
            price: 3000,
            peso: '1,5 km/h',
            rating: 1
        },
        {
            name: 'Barco a remo',
            description: 'Barco pequeno a remo',
            image: 'images/ve2.jpg',
            value: '50 po',
            price: 50,
            peso: '2 km/h',
            rating: 2
        },
        {
            name: 'Dracar',
            description: 'Barco maior para viagens longas',
            image: 'images/ve3.jpg',
            value: '10.000 po',
            price: 10000,
            peso: '5 km/h',
            rating: 2
        },
        {
            name: 'Galera',
            description: 'Navio de guerra com tripulação',
            image: 'images/ve4.jpg',
            value: '30.000 po',
            price: 30000,
            peso: '6,5 km/h',
            rating: 3
        },
        {
            name: 'Navio de guerra',
            description: 'Navio de guerra com grande capacidade',
            image: 'images/ve5.webp',
            value: '25.000 po',
            price: 25000,
            peso: '4 km/h',
            rating: 2
        },
        {
            name: 'Veleiro',
            description: 'Veleiro para navegação costeira',
            image: 'images/ve6.avif',
            value: '10.000 po',
            price: 10000,
            peso: '3 km/h',
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
            productDescription.textContent = `Descrição: ${product.description}`;

            const productValue = document.createElement('p');
            productValue.textContent = `Valor: ${product.value}`;

            const productPeso = document.createElement('p');
            productPeso.textContent = `Velocidade: ${product.peso}`;

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
            itemPeso.textContent = item.peso ? `Velocidade: ${item.peso}` : '';
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

    // Atualiza o inventário se o usuário estiver logado
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        document.getElementById('user-info').textContent = `Logado como ${user.username} com ${user.money} PO`;
        updateInventoryList(user.inventory);
    }

    displayProducts(products);

    window.filterProducts = () => {
        const price = document.getElementById('price').value;
        const rating = document.getElementById('rating').value;

        let filteredProducts = products;

        if (price !== 'all') {
            filteredProducts = filteredProducts.filter(product => {
                if (price === 'low') return product.price < 100;
                if (price === 'medium') return product.price >= 100 && product.price <= 1000;
                if (price === 'high') return product.price > 1000;
            });
        }

        if (rating !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.rating == rating);
        }

        displayProducts(filteredProducts);
    };
});
