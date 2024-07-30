document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Ferramentas de carpinteiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer1.jpg',
            value: '8 po',
            price: 8,
            peso: '3 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de cartógrafo',
            description: 'Ferramentas de artesão',
            image: 'images/fer2.jpg',
            value: '15 po',
            price: 15,
            peso: '3 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de costureiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer3.jpg',
            value: '1 po',
            price: 1,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de coureiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer4.jpg',
            value: '5 po',
            price: 5,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de entalhador',
            description: 'Ferramentas de artesão',
            image: 'images/fer5.jpg',
            value: '1 po',
            price: 1,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de ferreiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer6.jpg',
            value: '20 po',
            price: 20,
            peso: '4 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de oleiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer7.jpg',
            value: '10 po',
            price: 10,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de pedreiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer8.jpg',
            value: '10 po',
            price: 10,
            peso: '4 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de pintor',
            description: 'Ferramentas de artesão',
            image: 'images/fer9.jpg',
            value: '10 po',
            price: 10,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de sapateiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer10.jpg',
            value: '5 po',
            price: 5,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de vidreiro',
            description: 'Ferramentas de artesão',
            image: 'images/fer11.jpg',
            value: '30 po',
            price: 30,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Suprimentos de alquimista',
            description: '',
            image: 'images/fer12.jpg',
            value: '50 po',
            price: 50,
            peso: '4 kg',
            rating: 1
        },
        {
            name: 'Suprimentos de caligrafia',
            description: '',
            image: 'images/fer13.jpg',
            value: '10 po',
            price: 10,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Utensílios de cozinheiro',
            description: '',
            image: 'images/fer14.jpg',
            value: '1 po',
            price: 1,
            peso: '4 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de navegação',
            description: '',
            image: 'images/fer15.jpg',
            value: '25 po',
            price: 25,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Ferramentas de ladrão',
            description: '',
            image: 'images/fer16.jpg',
            value: '25 po',
            price: 25,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Kit de disfarce',
            description: '',
            image: 'images/fer17.jpg',
            value: '25 po',
            price: 25,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Kit de falsificação',
            description: '',
            image: 'images/fer18.jpg',
            value: '15 po',
            price: 15,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Kit de herbalismo',
            description: '',
            image: 'images/fer19.jpg',
            value: '5 po',
            price: 5,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Baralho de cartas',
            description: 'Kit de jogo',
            image: 'images/fer20.jpg',
            value: '5 pp',
            price: 0.5,
            peso: '-',
            rating: 1
        },
        {
            name: 'Kit de venenos',
            description: '',
            image: 'images/fer21.jpg',
            value: '50 po',
            price: 50,
            peso: '1 kg',
            rating: 1
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

    // Atualiza o inventário se o usuário estiver logado
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
        const category = document.getElementById('category').value;
        const price = document.getElementById('price').value;
        const rating = document.getElementById('rating').value;
        const availability = document.getElementById('availability').value;

        let filteredProducts = products;

        // Filtragem por categoria
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        // Filtragem por preço
        if (price === 'low') {
            filteredProducts = filteredProducts.filter(product => product.price < 100);
        } else if (price === 'medium') {
            filteredProducts = filteredProducts.filter(product => product.price >= 100 && product.price <= 1000);
        } else if (price === 'high') {
            filteredProducts = filteredProducts.filter(product => product.price > 1000);
        }

        // Filtragem por peso
        if (rating === '1') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) <= 5);
        } else if (rating === '2') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) > 5 && parseFloat(product.peso) <= 15);
        } else if (rating === '3') {
            filteredProducts = filteredProducts.filter(product => parseFloat(product.peso) > 15);
        }

        // Filtragem por disponibilidade
        if (availability === 'desvantagem') {
            filteredProducts = filteredProducts.filter(product => product.availability === 'desvantagem');
        } else if (availability === 'vantagem') {
            filteredProducts = filteredProducts.filter(product => product.availability === 'vantagem');
        }

        displayProducts(filteredProducts);
    };
});