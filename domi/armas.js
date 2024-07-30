document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Adaga',
            description: 'Acuidade, leve, arremesso (distância 6/18)',
            image: 'images/armas1.jpg',
            category: 'categoria1',
            value: "2 PO",
            price: 2,
            classe: 1,
            brand: '1d4 perfurante',
            peso: '0,5kg',
            rating: 1,
        },
        {
            name: 'Azagaia',
            description: ' Arremesso (distância 9/36)',
            image: 'images/armas2.jpg',
            category: 'categoria1',
            value: "5 PP",
            price: 0.5,
            classe: 2,
            brand: '1d6 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Bordão',
            description: 'Versátil (1d8)',
            image: 'images/armas3.webp',
            category: 'categoria1',
            value: "2 PP",
            price: 0.2,
            classe: 2,
            brand: '1d6 concussão',
            peso: '2kg',
            rating: 1,
        },
        {
            name: 'Clava Grande',
            description: 'Pesada, duas mãos',
            image: 'images/armas4.jpg',
            category: 'categoria1',
            value: "2 PP",
            price: 0.2,
            classe: 3,
            brand: '1d8 concussão',
            peso: '5kg',
            rating: 2,
        },
        {
            name: 'Foice Curta',
            description: 'Leve',
            image: 'images/armas5.jpg',
            category: 'categoria1',
            value: "1 PO",
            price: 1,
            classe: 2,
            brand: '1d6 cortante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Lança',
            description: 'Arremesso (distância 6/18), versátil (1d8)',
            image: 'images/armas6.jpg',
            category: 'categoria1',
            value: "1 PO",
            price: 1,
            classe: 2,
            brand: '1d6 perfurante',
            peso: '2kg',
            rating: 1,
        },
        {
            name: 'Maça',
            description: '-',
            image: 'images/armas7.jpg',
            category: 'categoria1',
            value: "5 PO",
            price: 5,
            classe: 2,
            brand: '1d6 concussão',
            peso: '2kg',
            rating: 2,
        },
        {
            name: 'Machadinha',
            description: 'Leve, arremesso (distância 6/18)',
            image: 'images/armas8.jpg',
            category: 'categoria1',
            value: "5 PO",
            price: 5,
            classe: 2,
            brand: '1d6 cortante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Martelo Leve',
            description: 'Leve, arremesso (distância 6/18)',
            image: 'images/armas9.jpg',
            category: 'categoria1',
            value: "2 PO",
            price: 2,
            classe: 1,
            brand: '1d4 concussão',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Porrete',
            description: 'Leve',
            image: 'images/armas10.jpg',
            category: 'categoria1',
            value: "1 PP",
            price: 0.1,
            classe: 1,
            brand: '1d4 concussão',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Arco Curto',
            description: 'Munição (distância 24/96), duas mãos',
            image: 'images/armas11.jpg',
            category: 'categoria2',
            value: "25 PO",
            price: 25,
            classe: 2,
            brand: '1d6 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Besta Curta',
            description: 'Munição (distância 24/96), recarga, duas mãos',
            image: 'images/armas12.jpg',
            category: 'categoria2',
            value: "25 PO",
            price: 25,
            classe: 3,
            brand: '1d8 perfurante',
            peso: '2,5kg',
            rating: 1,
        },
        {
            name: 'Dardo',
            description: 'Acuidade, arremesso (distância 6/18)',
            image: 'images/armas13.jpg',
            category: 'categoria2',
            value: "5 PC",
            price: 0.05,
            classe: 1,
            brand: '1d4 perfurante',
            peso: '0,1kg',
            rating: 1,
        },
        {
            name: 'Funda',
            description: 'Munição (distância 9/36)',
            image: 'images/armas14.jpg',
            category: 'categoria2',
            value: "1 PP",
            price: 0.1,
            classe: 1,
            brand: '1d4 concussão',
            peso: '0,01kg',
            rating: 1,
        },
        {
            name: 'Alabarda',
            description: 'Pesada, alcance, duas mãos',
            image: 'images/armas15.jpg',
            category: 'categoria3',
            value: "20 PO",
            price: 20,
            classe: 4,
            brand: '1d10 cortante',
            peso: '3kg',
            rating: 1,
        },
        {
            name: 'Cimitarra',
            description: 'Acuidade, leve',
            image: 'images/armas16.jpg',
            category: 'categoria3',
            value: "25 PO",
            price: 25,
            classe: 2,
            brand: '1d6 cortante',
            peso: '1,5kg',
            rating: 1,
        },
        {
            name: 'Chicote',
            description: 'Acuidade, alcance',
            image: 'images/armas17.jpg',
            category: 'categoria3',
            value: "2 PO",
            price: 2,
            classe: 1,
            brand: '1d4 cortante',
            peso: '1,5kg',
            rating: 1,
        },
        {
            name: 'Espada Curta',
            description: 'Acuidade, leve',
            image: 'images/armas18.jpg',
            category: 'categoria3',
            value: "10 PO",
            price: 10,
            classe: 2,
            brand: '1d6 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Espada Grande',
            description: 'Pesada, duas mãos',
            image: 'images/armas19.jpg',
            category: 'categoria3',
            value: "50 PO",
            price: 50,
            classe: 4,
            brand: '2d6 cortante',
            peso: '3kg',
            rating: 1,
        },
        {
            name: 'Espada Longa',
            description: 'Versátil (1d10)',
            image: 'images/armas20.jpg',
            category: 'categoria3',
            value: "15 PO",
            price: 15,
            classe: 3,
            brand: '1d8 cortante',
            peso: '1,5kg',
            rating: 1,
        },
        {
            name: 'Glaive',
            description: 'Pesada, alcance, duas mãos',
            image: 'images/armas21.jpg',
            category: 'categoria3',
            value: "20 PO",
            price: 20,
            classe: 4,
            brand: '1d10 cortante',
            peso: '3kg',
            rating: 1,
        },
        {
            name: 'Lança de Montaria',
            description: 'Alcance, especial',
            image: 'images/armas22.jpg',
            category: 'categoria3',
            value: "10 PO",
            price: 10,
            classe: 4,
            brand: '1d12 perfurante',
            peso: '3kg',
            rating: 1,
        },
        {
            name: 'Lança Longa',
            description: 'Pesada, alcance, duas mãos',
            image: 'images/armas23.jpg',
            category: 'categoria3',
            value: "5 PO",
            price: 5,
            classe: 4,
            brand: '1d10 perfurante',
            peso: '4kg',
            rating: 1,
        },
        {
            name: 'Maça Estrela',
            description: '-',
            image: 'images/armas24.jpg',
            category: 'categoria3',
            value: "15 PO",
            price: 15,
            classe: 3,
            brand: '1d8 perfurante',
            peso: '2kg',
            rating: 1,
        },
        {
            name: 'Machado Grande',
            description: 'Pesada, duas mãos',
            image: 'images/armas25.jpg',
            category: 'categoria3',
            value: "30 PO",
            price: 30,
            classe: 4,
            brand: '1d12 cortante',
            peso: '3,5kg',
            rating: 1,
        },
        {
            name: 'Machado de batalha',
            description: 'Versátil (1d10)',
            image: 'images/armas26.jpg',
            category: 'categoria3',
            value: "10 PO",
            price: 10,
            classe: 4,
            brand: '1d8 cortante',
            peso: '2kg',
            rating: 1,
        },
        {
            name: 'Malho',
            description: 'Pesada, duas mãos',
            image: 'images/armas27.jpg',
            category: 'categoria3',
            value: "10 PO",
            price: 10,
            classe: 4,
            brand: '2d6 concussão',
            peso: '5kg',
            rating: 2,
        },
        {
            name: 'Mangual',
            description: 'Leve',
            image: 'images/armas28.jpg',
            category: 'categoria3',
            value: "10 PO",
            price: 10,
            classe: 3,
            brand: '1d8 concussão',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Martelo de Guerra',
            description: 'Versátil (1d10)',
            image: 'images/armas29.jpg',
            category: 'categoria3',
            value: "15 PO",
            price: 15,
            classe: 3,
            brand: '1d8 concussão',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Picareta de Guerra',
            description: '-',
            image: 'images/armas30.jpg',
            category: 'categoria3',
            value: "5 PO",
            price: 5,
            classe: 3,
            brand: '1d8 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Rapieira',
            description: 'Acuidade',
            image: 'images/armas31.jpg',
            category: 'categoria3',
            value: "25 PO",
            price: 0.05,
            classe: 3,
            brand: '1d8 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Tridente',
            description: 'Arremesso (6/18), versátil (1d8)',
            image: 'images/armas32.jpg',
            category: 'categoria3',
            value: "5 PO",
            price: 5,
            classe: 2,
            brand: '1d6 perfurante',
            peso: '2kg',
            rating: 1,
        },
        {
            name: 'Arco Longo',
            description: 'Munição (distância 45/180), pesada, duas mãos',
            image: 'images/armas33.jpg',
            category: 'categoria4',
            value: "50 PO",
            price: 50,
            classe: 3,
            brand: '1d8 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Tormenta Torrencial',
            description: 'Munição (distância 45/180), pesada, duas mãos',
            image: 'images/armas39.jpg',
            category: 'categoria4',
            value: "100 PO",
            price: 100,
            classe: 3,
            brand: '1d12 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Besta de Mão',
            description: 'Munição (distância 9/36), leve, recarga',
            image: 'images/armas34.jpg',
            category: 'categoria4',
            value: "75 PO",
            price: 75,
            classe: 2,
            brand: '1d6 perfurante',
            peso: '1,5kg',
            rating: 1,
        },
        {
            name: 'Besta Pesada',
            description: 'Munição (distância 30/120), pesada, recarga, duas mãos',
            image: 'images/armas35.jpg',
            category: 'categoria4',
            value: "50 PO",
            price: 50,
            classe: 4,
            brand: '1d10 perfurante',
            peso: '4,5kg',
            rating: 1,
        },
        {
            name: 'Rede',
            description: 'Especial, arremesso (distância 1,5/4,5)',
            image: 'images/armas36.jpg',
            category: 'categoria4',
            value: "1 PO",
            price: 1,
            classe: 1,
            brand: '-',
            peso: '1,5kg',
            rating: 1,
        },
        {
            name: 'Zarabatana',
            description: 'Munição (distância 7,5/30), recarga',
            image: 'images/armas37.jpg',
            category: 'categoria4',
            value: "10 PO",
            price: 10,
            classe: 1,
            brand: '1 perfurante',
            peso: '0,5kg',
            rating: 1,
        },
        {
            name: 'Manopla Modular',
            description: 'Pesada, Uma mão. Necessita de uma Orbe Modular para cada uso, uma orbe modular permite três tiros e descarrega completamente após o uso, dano dobra caso esteja usando o kit modular completo.',
            image: 'images/armas38.jpg',
            category: 'categoria4',
            value: "400 PO",
            price: 400,
            classe: 1,
            brand: '3d6 + Modificador de CON perfurante',
            peso: '5kg',
            rating: 2,
        },
        {
            name: 'Besta Trovejante',
            description: 'Munição (distância 45/180), pesada, duas mãos',
            image: 'images/armas39.jpg',
            category: 'categoria4',
            value: "500 PO",
            price: 500,
            classe: 1,
            brand: '2d8 perfurante',
            peso: '6kg',
            rating: 2,
        },
        {
            name: 'Chamado do Destino',
            description: 'Pesado, duas mãos',
            image: 'images/armas42.jpg',
            category: 'categoria3',
            value: "400 PO",
            price: 400,
            classe: 2,
            brand: '4d4 cortante',
            peso: '2,5kg',
            rating: 1,
        },
        {
            name: 'Tesoura Carnivora',
            description: 'Uma mão, leve. Cura metade do dano desferido.',
            image: 'images/armas41.jpg',
            category: 'categoria3',
            value: "700 PO",
            price: 700,
            classe: 2,
            brand: '3d6 cortante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Espadas Gêmeas',
            description: 'Pesado. Duas mãos. As espadas perdem metade do dano caso usadas separadamente',
            image: 'images/armas43.jpg',
            category: 'categoria3',
            value: "400 PO",
            price: 400,
            classe: 2,
            brand: '2d4 de dano de fogo + 2d4 de dano de gelo',
            peso: '5kg',
            rating: 2,
        },
        {
            name: 'Chamas Brilhantes',
            description: 'Pesado, duas mãos.',
            image: 'images/armas44.jpg',
            category: 'categoria3',
            value: "100 PO",
            price: 100,
            classe: 2,
            brand: '3d4 de fogo',
            peso: '2kg',
            rating: 1,
        },
        {
            name: 'Assassina de Deuses',
            description: 'Pesado, duas mãos',
            image: 'images/armas45.jpg',
            category: 'categoria3',
            value: "3000 PO",
            price: 3000,
            classe: 2,
            brand: '3d6 cortante + 3d6 sagrado',
            peso: '16kg',
            rating: 3,
        },
        {
            name: 'Contra-ataque da Calamidade',
            description: 'Pesado, duas mãos',
            image: 'images/armas46.jpg',
            category: 'categoria3',
            value: "400 PO",
            price: 400,
            classe: 2,
            brand: '4d4 cortante',
            peso: '4kg',
            rating: 1,
        },
        {
            name: 'Adaga Primordial',
            description: 'Acuidade, leve, arremesso (distância 6/18)',
            image: 'images/armas47.jpg',
            category: 'categoria1',
            value: "500 PO",
            price: 500,
            classe: 2,
            brand: '4d4 perfurante',
            peso: '1kg',
            rating: 1,
        },
        {
            name: 'Cão-de-Caça em Chamas',
            description: 'Acuidade, leve, arremesso (distância 6/18). Causa 1d4 de dano de sangramento por turno, acumula infinitamente.',
            image: 'images/armas48.jpg',
            category: 'categoria3',
            value: "2000 PO",
            price: 2000,
            classe: 2,
            brand: '4d4 cortante',
            peso: '1,5kg',
            rating: 1,
        },
        {
            name: 'Sorriso da Lua',
            description: 'Duas Mãos',
            image: 'images/armas49.jpg',
            category: 'categoria3',
            value: "200 PO",
            price: 200,
            classe: 2,
            brand: '2d6 necrótico/cortante',
            peso: '4kg',
            rating: 1,
        },
        {
            name: 'Frio Gracioso',
            description: 'Leve',
            image: 'images/armas50.jpg',
            category: 'categoria3',
            value: "500 PO",
            price: 500,
            classe: 2,
            brand: '3d6 cortante/gelo',
            peso: '4kg',
            rating: 1,
        },
        {
            name: 'Tarax',
            description: 'Pesado, duas mãos. O dano dobra a cada ataque',
            image: 'images/armas51.jpg',
            category: 'categoria3',
            value: "50000 PO",
            price: 50000,
            classe: 2,
            brand: '1',
            peso: '7kg',
            rating: 2,
        },
        {
            name: 'Incendiary Impact',
            description: 'Pesada, duas mãos. Causa 5d6 de dano de fogo. Efeito especial: A cada golpe bem-sucedido, o alvo deve fazer um teste de resistência de Destreza (CD 15). Se falhar, ele pega fogo e sofre 2d6 de dano de fogo adicional no início de cada um de seus turnos até que gaste uma ação para apagar as chamas.',
            image: 'images/armas52.jpg',
            category: 'categoria3',
            value: "3000 PO",
            price: 3000,
            classe: 2,
            brand: '2d6 fogo',
            peso: '3kg',
            rating: 1,
        },
        {
            name: 'Horizons Reach',
            description: 'Cajado mágico, uma mão. A cada ataque bem-sucedido, causa 1d8 de dano de energia e pode lançar um feitiço de alcance (como *raio de fogo*, *raio congelante* ou *raio elétrico*) com um nível de conjuração de até 4º nível. Efeito especial: Uma vez por dia, o portador pode usar o cajado para abrir um portal para uma localização distante dentro de um raio de 500 metros, permitindo que ele e até 5 criaturas escolham sejam teletransportados instantaneamente para lá. O teletransporte é preciso e não pode ser bloqueado por barreiras mágicas.',
            image: 'images/armas53.jpg',
            category: 'categoria4',
            value: "10000 PO",
            price: 10000,
            classe: 1,
            brand: '1d8 energia',
            peso: '2kg',
            rating: 5,
        },
        {
            name: 'Orbe do Apocalipse',
            description: 'Um orbe mágico de aparência ameaçadora, coberto por runas antigas. Concede ao portador um bônus de +3 em todos os testes de Feitiçaria. Efeito especial: Uma vez por dia, o portador pode ativar o Orbe para lançar um "Tempestade de Devastação" (uma magia de área com um raio de 30 metros). Todos os alvos na área devem fazer um teste de resistência de Constituição (CD 17) ou sofrer 6d10 de dano necrótico e 4d10 de dano elétrico, além de ficarem atordoados por 1d4 rodadas. Alvos que passarem no teste de resistência sofrem metade do dano e não ficam atordoados.',
            image: 'images/armas54.jpg',
            category: 'categoria4',
            value: "15000 PO",
            price: 15000,
            classe: 5,
            brand: '6d10 necrótico, 4d10 elétrico',
            peso: '1kg',
            rating: 5,
        },
        {
            name: 'Garras do Feiticeiro Sanguinário',
            description: 'Luvas mágicas encantadas que consomem parte da vida do usuário para aumentar o poder mágico. Concede +2 bônus em testes de ataque mágico e dano mágico. Efeito especial: A cada uso, o usuário sofre 1d4 de dano de vida. Em troca, os feitiços lançados com as garras têm um bônus de +1d6 de dano adicional.',
            image: 'images/armas55.jpg',
            category: 'categoria4',
            value: "2500 PO",
            price: 2500,
            classe: 2,
            brand: 'Bônus em feitiços',
            peso: '0,5kg',
            rating: 1,
        },
        {
            name: 'Eldritch Brand',
            description: 'Varinha mágica. Causa 1d8 de dano arcano. Efeito especial: Uma vez por dia, você pode invocar uma onda de energia eldritch, causando 3d6 de dano arcano em uma área de 3 metros ao redor do alvo. Alvos na área devem fazer um teste de resistência de Inteligência (CD 16). Se falharem, ficam atordoados por 1 turno.',
            image: 'images/armas56.jpg',
            category: 'categoria2',
            value: "4000 PO",
            price: 4000,
            classe: 2,
            brand: '1d8 arcano',
            peso: '0,5kg',
            rating: 1,
        },
        {
            name: 'Phantom Pain',
            description: 'Luva mágica que confere ao usuário a habilidade de infligir dor psíquica. Efeito especial: A cada vez que o usuário conjura um feitiço de dano, o alvo do feitiço deve fazer um teste de resistência de Sabedoria (CD 16). Se falhar, o alvo sofre 2d8 de dano psíquico adicional e tem desvantagem em ataques e testes de habilidade até o final do próximo turno.',
            image: 'images/armas57.jpg',
            category: 'categoria4',
            value: "2500 PO",
            price: 2500,
            classe: 1,
            brand: '2d8 psíquico',
            peso: '0,5kg',
            rating: 2,
        },
        {
            name: 'Cálice Dourado',
            description: 'Este cálice ornamentado é um artefato poderoso para magos e feiticeiros. Efeito especial: Uma vez por dia, o usuário pode beber do cálice para recuperar 3d8 pontos de vida e ganhar resistência a todos os tipos de dano por 1 hora. Além disso, enquanto estiver em uso, o usuário recebe +2 em todas as suas jogadas de ataque de magia e testes de resistência.',
            image: 'images/armas58.jpg',
            category: 'categoria5',
            value: "2000 PO",
            price: 2000,
            classe: 2,
            brand: 'recupera 3d8 PV, resistência e +2 em ataques mágicos',
            peso: '0,5kg',
            rating: 1,
        },
        {
            name: 'Bloodshot',
            description: 'Arma de Longa Distância (distância 45/180). Causa 3d8 de dano de energia negativa. Efeito especial: Ao acertar um alvo, Bloodshot absorve uma parte da energia vital do inimigo, recuperando 1d8 pontos de vida para o portador da arma. Se o alvo for um inimigo que possui menos de 50% de seus pontos de vida máximos, o dano aumenta para 8d8 e a cura aumenta para 2d8.',
            image: 'images/armas59.jpg',
            category: 'categoria2',
            value: "6000 PO",
            price: 6000,
            classe: 3,
            brand: '3d8 energia negativa',
            peso: '1kg',
            rating: 2,
        },
        {
            name: 'Codex Servorum',
            description: 'Livro antigo e encadernado em couro escuro. Permite ao usuário lançar o feitiço "Invocação de Exército de Servos" uma vez por dia. Ao usar este feitiço, o mago pode invocar uma legião de servos mágicos que obedecem às suas ordens e permanecem sob seu controle por até 1 hora. Esses servos podem realizar tarefas básicas, lutar em batalha ou proteger o mago, dependendo das necessidades do usuário. O livro também concede um bônus de +2 em testes de Arcana.',
            image: 'images/armas60.jpg',
            category: 'categoria1',
            value: "8000 PO",
            price: 8000,
            classe: 2,
            brand: 'Feitiço: Invocação de Exército de Servos',
            peso: '1kg',
            rating: 2,
        },
        {
            name: 'Amber Caller',
            description: 'Semelhante a um berrante, este item mágico permite que o portador convoque uma onda de energia mágica. Efeito especial: Uma vez por dia, o portador pode soprar o Amber Caller para invocar uma tempestade mágica em um raio de 30 metros. Todos os inimigos na área devem fazer um teste de resistência de Sabedoria (CD 17). Se falharem, são atordoados por 1d4 turnos e sofrem 4d6 de dano de energia. Se forem bem-sucedidos, recebem apenas metade do dano e não são atordoados.',
            image: 'images/armas61.jpg',
            category: 'categoria2',
            value: "5000 PO",
            price: 5000,
            classe: 2,
            brand: '4d6 energia',
            peso: '0,8kg',
            rating: 1,
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

            const productBrand = document.createElement('p');
            productBrand.textContent = `Classe: ${product.brand}`;

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

    const buyProduct = (product) => {
        const user = JSON.parse(localStorage.getItem('loggedInUser')) || { money: 0, inventory: [] };

        if (user.money >= product.price) {
            user.money -= product.price;
            const existingItem = user.inventory.find(item => item.name === product.name);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                user.inventory.push({ ...product, count: 1 });
            }
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Compra realizada com sucesso!');
        } else {
            alert('Dinheiro insuficiente para comprar este item.');
        }
    };

    displayProducts(products);

    const filterProducts = () => {
        const category = document.getElementById('category').value;
        const price = document.getElementById('price').value;
        const brand = document.getElementById('brand').value;
        const rating = document.getElementById('rating').value;

        let filteredProducts = products;

        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        if (price !== 'all') {
            filteredProducts = filteredProducts.filter(product => {
                if (price === 'low') return product.price < 50;
                if (price === 'medium') return product.price >= 50 && product.price <= 100;
                if (price === 'high') return product.price > 100;
            });
        }

        if (brand !== 'all') {
            filteredProducts = filteredProducts.filter(product => {
                if (brand === '1') return product.brand.includes('1d4');
                if (brand === '2') return product.brand.includes('1d6');
                if (brand === '3') return product.brand.includes('1d8') || product.brand.includes('2d4');
                if (brand === '4') {
                    const highDamage = ['1d10', '1d12', '2d12', '3d12', '4d12', '2d6', '3d6', '4d6', '5d6', '6d6', '2d8', '3d8', '4d8', '5d8', '6d8', '4d4', '3d4', '5d4', '6d4', '7d4', '8d4', '9d4', '10d4'];
                    return highDamage.some(damage => product.brand.includes(damage));
                }
            });
        }

        if (rating !== 'all') {
            filteredProducts = filteredProducts.filter(product => {
                const peso = parseFloat(product.peso);
                if (rating === '1') return peso < 5;
                if (rating === '2') return peso >= 5 && peso <= 15;
                if (rating === '3') return peso > 15;
            });
        }

        displayProducts(filteredProducts);
    };
});