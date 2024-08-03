document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Armadura Acolchoada',
            description: 'Armadura Leve',
            image: 'images/armadura1.jpg',
            category: 'categoria1',
            value: "5 PO",
            price: 5,
            classe: 11,
            brand: '11 + modificador de DES',
            peso: '4kg',
            rating: 1,
            availability: 'desvantagem'
        },
        {
            name: 'Armadura de Couro',
            description: 'Armadura Leve',
            image: 'images/armadura2.jpg',
            category: 'categoria1',
            value: "10 PO",
            price: 10,
            classe: 11,
            brand: '11 + modificador de DES',
            peso: '5kg',
            rating: 2,
            availability: 'vantagem'
        },
        {
            name: 'Armadura de Couro Batido',
            description: 'Armadura Leve',
            image: 'images/armadura3.jpg',
            category: 'categoria1',
            value: "45 PO",
            price: 45,
            classe: 12,
            brand: '12 + modificador de DES',
            peso: '6,5kg',
            rating: 2,
            availability: 'vantagem'
        },
        {
            name: 'Armadura de Gibão de Peles',
            description: 'Armadura Média',
            image: 'images/armadura4.jpg',
            category: 'categoria2',
            value: "10 PO",
            price: 10,
            classe: 12,
            brand: '12 + modificador de DES (max+2)',
            peso: '10kg',
            rating: 2,
            availability: 'vantagem'
        },
        {
            name: 'Armadura de Camisão de Malha',
            description: 'Armadura Média',
            image: 'images/armadura5.jpg',
            category: 'categoria2',
            value: "50 PO",
            price: 50,
            classe: 13,
            brand: '13 + modificador de DES (max+2)',
            peso: '10kg',
            rating: 2,
            availability: 'vantagem'
        },
        {
            name: 'Armadura de Brunea',
            description: 'Armadura Média',
            image: 'images/armadura6.jpg',
            category: 'categoria2',
            value: "50 PO",
            price: 50,
            classe: 14,
            brand: '14 + modificador de DES (max+2)',
            peso: '22,5kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Armadura de Peitoral',
            description: 'Armadura Média',
            image: 'images/armadura7.jpg',
            category: 'categoria2',
            value: "400 PO",
            price: 400,
            classe: 14,
            brand: '14 + modificador de DES (max+2)',
            peso: '10kg',
            rating: 2,
            availability: 'vantagem'
        },
        {
            name: 'Meia-Armadura',
            description: 'Armadura Média',
            image: 'images/armadura8.jpg',
            category: 'categoria2',
            value: "750 PO",
            price: 750,
            classe: 15,
            brand: '15 + modificador de DES (max+2)',
            peso: '20kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Cota de Anéis',
            description: 'Armadura Pesada',
            image: 'images/armadura9.jpg',
            category: 'categoria3',
            value: "30 PO",
            price: 30,
            classe: 14,
            brand: '14',
            peso: '20kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Cota de Malha',
            description: 'Armadura Pesada (13 FOR)',
            image: 'images/armadura10.jpg',
            category: 'categoria3',
            value: "75 PO",
            price: 75,
            classe: 16,
            brand: '16',
            peso: '27,5kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Cota de Talas',
            description: 'Armadura Pesada (15 FOR)',
            image: 'images/armadura11.jpg',
            category: 'categoria3',
            value: "200 PO",
            price: 200,
            classe: 17,
            brand: '17',
            peso: '30kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Armadura de Placas',
            description: 'Armadura Pesada',
            image: 'images/armadura12.jpg',
            category: 'categoria3',
            value: "1500 PO",
            price: 1500,
            classe: 18,
            brand: '18',
            peso: '32,5kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Armadura Modular',
            description: 'Dobra o deslocamento caso esteja usando uma orbe modular, reduz pela metade o deslocamento caso não esteja usando uma orbe modular energizada, não gasta cargas da orbe modular.',
            image: 'images/armadura14.jpg',
            category: 'categoria3',
            value: "2000 PO",
            price: 2000,
            classe: 16,
            brand: '16',
            peso: '50kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Botas Modulares',
            description: 'Dobra o deslocamento caso esteja usando uma orbe modular, reduz pela metade o deslocamento caso não esteja usando uma orbe modular energizada, não gasta cargas da orbe modular.',
            image: 'images/armadura15.jpg',
            category: 'categoria3',
            value: "500 PO",
            price: 500,
            classe: 6,
            brand: '6',
            peso: '22,5kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Escudo',
            description: 'Escudo',
            image: 'images/armadura13.jpg',
            category: 'categoria3',
            value: "10 PO",
            price: 10,
            classe: 2,
            brand: '+2',
            peso: '3kg',
            rating: 1,
            availability: 'vantagem'
        },
        {
            name: 'Lacrimosa',
            description: 'Permite respirar embaixo dagua.',
            image: 'images/armadura16.jpg',
            category: 'categoria2',
            value: "800 PO",
            price: 800,
            classe: 14,
            brand: '14 + Modificador de DES(max+2)',
            peso: '31,5kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Armadura dos Cem Braços',
            description: 'Permite uma ação a mais a cada dois turnos.',
            image: 'images/armadura17.jpg',
            category: 'categoria1',
            value: "700 PO",
            price: 700,
            classe: 13,
            brand: '13 + Modificador de DES',
            peso: '5,5kg',
            rating: 2,
            availability: 'vantagem'
        },
        {
            name: 'Robe Mágico',
            description: 'Todo dano de ataque mágico terá vantagem',
            image: 'images/armadura18.jpg',
            category: 'categoria1',
            value: "300 PO",
            price: 300,
            classe: 3,
            brand: '3',
            peso: '1kg',
            rating: 1,
            availability: 'vantagem'
        },
        {
            name: 'Servo do Mal',
            description: 'Revive o usuário com vida e mana cheia, mas a armadura é perdida sem possibilidade de concerto.',
            image: 'images/armadura19.jpg',
            category: 'categoria3',
            value: "5000 PO",
            price: 5000,
            classe: 22,
            brand: '22',
            peso: '60kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Esperança do Inferno',
            description: 'Vantagem em testes de resistência a ataques mágicos',
            image: 'images/armadura20.jpg',
            category: 'categoria3',
            value: "2000 PO",
            price: 2000,
            classe: 8,
            brand: '8',
            peso: '20kg',
            rating: 3,
            availability: 'desvantagem'
        },
        {
            name: 'Crimson Crawler',
            description: 'A armadura concede ao usuário a habilidade de se tornar invisível por um turno a cada três turnos.',
            image: 'images/armadura21.jpg',
            category: 'categoria2',
            value: "1200 PO",
            price: 1200,
            classe: 15,
            brand: '15 + Modificador de DES',
            peso: '7kg',
            rating: 4,
            availability: 'vantagem'
        },
        {
            name: 'Battleborn Gloves',
            description: 'Essas luvas aumentam o dano de todas as magias de ataque em 2d6 e concedem resistência a dano mágico por um turno a cada cinco turnos.',
            image: 'images/armadura22.jpg',
            category: 'categoria3',
            value: "1500 PO",
            price: 1500,
            classe: 0, 
            brand: 'N/A',
            peso: '0,5kg',
            rating: 1,
            availability: 'vantagem'
        },
        {
            name: 'Roat Cloak',
            description: 'Este manto aumenta o poder mágico do usuário, permitindo que ele recupere um slot de feitiço de nível 1 a nível 4 a cada quatro turnos.',
            image: 'images/armadura23.jpg',
            category: 'categoria3',
            value: "950 PO",
            price: 950,
            classe: 12,
            brand: '12 + Modificador de DES',
            peso: '3kg',
            rating: 3,
            availability: 'vantagem'
        },
        {
            name: 'Lantern of Servitude',
            description: 'A lanterna permite ao usuário manipular a luz em uma área de até 30 metros de raio, podendo criar ilusões e desorientar inimigos. Adicionalmente, o usuário pode emitir uma aura de luz intensa que reduz a visibilidade dos inimigos e fornece vantagem em testes de percepção contra eles.',
            image: 'images/armadura24.jpg',
            category: 'categoria3',
            value: "5000 PO",
            price: 5000,
            classe: 'N/A',
            brand: 'N/A',
            peso: '1kg',
            rating: 5,
            availability: 'raridade'
        },
        {
            name: 'Totally Normal Dice',
            description: 'Quando usado, o dado faz com que o próximo feitiço do usuário tenha uma chance de 50% de se tornar um feitiço de 9º nível, mas se falhar, o feitiço será lançado com um efeito totalmente aleatório e inesperado.',
            image: 'images/armadura25.jpg',
            category: 'categoria3',
            value: "1500 PO",
            price: 1500,
            classe: 'N/A',
            brand: 'N/A',
            peso: '0,2kg',
            rating: 5,
            availability: 'único'
        },
        {
            name: 'Mantle of Dragons',
            description: 'Esta capa concede ao usuário a habilidade de lançar um ataque de fogo devastador uma vez por dia, causando 12d6 de dano de fogo em uma área de 3 metros de raio.',
            image: 'images/armadura26.jpg',
            category: 'categoria3',
            value: "2500 PO",
            price: 2500,
            classe: 12,
            brand: '12 + Modificador de INT',
            peso: '1,5kg',
            rating: 5,
            availability: 'raro'
        },
        {
            name: 'Gauntlets of Deliverance',
            description: 'Os guantes permitem ao usuário conjurar um feixe de energia devastador que causa 6d10 de dano de força uma vez por dia. Além disso, aumenta o bônus de ataque mágico em +2.',
            image: 'images/armadura27.jpg',
            category: 'categoria3',
            value: "2500 PO",
            price: 2500,
            classe: 'N/A',
            brand: 'Aumenta o bônus de ataque mágico em +2',
            peso: '0,8kg',
            rating: 5,
            availability: 'raridade'
        },
        {
            name: 'Wings of the Raven',
            description: 'Este item concede ao usuário a habilidade de planar a até 30 metros de altura e realizar um ataque aéreo poderoso uma vez por descanso longo. O ataque aéreo causa 3d6 de dano necrótico e atordoa o alvo por um turno.',
            image: 'images/armadura28.jpg',
            category: 'categoria3',
            value: "1800 PO",
            price: 1800,
            classe: 0, // Sem classe de armadura, já que é um item mágico
            brand: 'Efeito mágico',
            peso: '1kg',
            rating: 5,
            availability: 'raro'
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

            const productBrand = document.createElement('p');
            productBrand.textContent = `Classe de Armadura: ${product.brand}`;

            const productPeso = document.createElement('p');
            productPeso.textContent = `Peso: ${product.peso}`;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Comprar';
            buyButton.onclick = () => buyProduct(product);

            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productDescription);
            productItem.appendChild(productValue);
            productItem.appendChild(productBrand);
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

            const itemBrand = document.createElement('p');
            itemBrand.textContent = item.brand ? `Classe de Armadura: ${item.brand}` : '';
            if (!item.brand) itemBrand.style.display = 'none';

            const itemPeso = document.createElement('p');
            itemPeso.textContent = item.peso ? `Peso: ${item.peso}` : '';
            if (!item.peso) itemPeso.style.display = 'none';

            const itemDetailsDiv = document.createElement('div');
            itemDetailsDiv.classList.add('item-details');
            itemDetailsDiv.appendChild(itemName);
            itemDetailsDiv.appendChild(itemDescription);
            itemDetailsDiv.appendChild(itemValue);
            itemDetailsDiv.appendChild(itemBrand);
            itemDetailsDiv.appendChild(itemPeso);

            itemDiv.appendChild(itemImage);
            itemDiv.appendChild(itemDetailsDiv);

            inventoryList.appendChild(itemDiv);
        });
    };

    // Atualiza o inventário se o usuário estiver logado
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        document.getElementById('user-info').textContent = `${user.username} possui ${user.money} PO`;
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
                    brand: product.brand,
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
        const classe = document.getElementById('classe').value;
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

        // Filtragem por Classe de Armadura (CA)
        if (classe === '9-') {
            filteredProducts = filteredProducts.filter(product => product.classe <= 9);
        } else if (classe === '10-13') {
            filteredProducts = filteredProducts.filter(product => product.classe >= 10 && product.classe <= 13);
        } else if (classe === '14-18') {
            filteredProducts = filteredProducts.filter(product => product.classe >= 14 && product.classe <= 18);
        } else if (classe === '19+') {
            filteredProducts = filteredProducts.filter(product => product.classe >= 19);
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

