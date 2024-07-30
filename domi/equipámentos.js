document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Ábaco',
            description: '',
            image: 'images/eqp1.jpg',
            value: '2 po',
            price: 2,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Ácido (vidro)',
            description: '',
            image: 'images/eqp2.jpg',
            value: '25 po',
            price: 25,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Água benta (frasco)',
            description: 'Usando uma ação, você pode espalhar o conteúdo desse frasco em uma criatura a até 1,5 metro de você ou arremessar a até 6 metros, quebrando o frasco com o impacto. Em ambos os casos, você deve realizar um ataque à distância contra uma criatura alvo, tratando a água benta como uma arma improvisada. Se o alvo for um corruptor ou morto-vivo, ele sofre 2d6 de dano radiante. Um clérigo ou paladino pode criar água benta realizando um ritual especial. O ritual leva 1 hora para ser realizado, consome 25 po de prata em pó e exige que se gaste um espaço de magia de 1º nível. ',
            image: 'images/eqp3.jpg',
            value: '25 po',
            price: 25,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Algemas',
            description: 'Essas algemas de metal podem prender uma criatura Pequena ou Média. Escapar das algemas exige sucesso em um teste de Destreza CD 20. Quebrá-las exige um teste de Força CD 20 bem sucedido. Cada conjunto de algemas vem com uma chave. Sem a chave, uma criatura proficiente com ferramentas de ladrão pode abrir a fechadura das algemas com um sucesso em um teste de Destreza CD 15. As algemas têm 15 pontos de vida. ',
            image: 'images/eqp4.jpg',
            value: '2 po',
            price: 2,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Algibeira',
            description: 'Uma bolsa de pano ou couro que pode armazenar até 20 munições de funda ou 50 munições de zarabatana, entre outras coisas. Para armazenar componentes de magia, veja bolsa de componentes, também descrita nessa seção. ',
            image: 'images/eqp5.jpg',
            value: '5 po',
            price: 5,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Aljava',
            description: 'Uma aljava pode guardar até 20 flechas. ',
            image: 'images/eqp6.jpg',
            value: '1 po',
            price: 1,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Ampulheta',
            description: '',
            image: 'images/eqp7.jpg',
            value: '25 po',
            price: 25,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Antídoto (vidro)',
            description: 'Uma criatura que beber o líquido desse vidro tem vantagem em testes de resistência contra venenos por 1 hora. O antídoto não confere nenhum benefício para mortos-vivos ou constructos.',
            image: 'images/eqp8.jpg',
            value: '50 po',
            price: 50,
            peso: '-',
            rating: 1
        },
        {
            name: 'Apito de advertência',
            description: '',
            image: 'images/eqp9.jpg',
            value: '25 po',
            price: 25,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Aríete portátil',
            description: 'Você pode usar um aríete portátil para quebrar portas. Ao fazer isso, você ganha um bônus de +4 no teste de Força. Outra criatura pode ajudá-lo a usar o aríete, o que concede vantagem no teste. ',
            image: 'images/eqp10.jpg',
            value: '4 po',
            price: 4,
            peso: '17,5 kg',
            rating: 3
        },
        {
            name: 'Armadilha de caça',
            description: 'Quando você usa sua ação para armá-la, essa armadilha forma um anel de aço com dentes serrilhados. Eles se fecham quando uma criatura pisa sobre uma placa de pressão no seu centro. A armadilha é fixada por uma pesada corrente em um objeto fixo e imóvel, como uma árvore ou um cravo enterrado no chão. Uma criatura que pisar na placa de pressão deve ser bem sucedida em um teste de resistência de Destreza CD 13 ou sofrerá 1d4 de dano perfurante e para de se mover. Daí em diante, até que a criatura se liberte da armadilha, seu movimento é limitado ao comprimento da corrente (tipicamente 1 metro de comprimento). A criatura presa pode usar sua ação para fazer um teste de Força CD 13 e se libertar, ou outra criatura no alcance pode fazer o teste para libertá-la. Cada fracasso no teste causa 1 de dano perfurante à criatura presa. ',
            image: 'images/eqp11.jpg',
            value: '5 po',
            price: 5,
            peso: '12,5 kg',
            rating: 2
        },
        {
            name: 'Arpéu',
            description: '',
            image: 'images/eqp12.jpg',
            value: '2 po',
            price: 2,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Balança de mercador',
            description: 'Trata-se de uma pequena balança, pratos e um sortimento adequado de pesos de até 1 kg. Com ela, você pode medir o peso exato de pequenos objetos, como metais preciosos brutos ou bens comerciais, para ajudar a determinar seu valor. ',
            image: 'images/eqp13.jpg',
            value: '5 po',
            price: 5,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Balde',
            description: 'Comporta 12 litros',
            image: 'images/eqp14.jpg',
            value: '5 pc',
            price: 0.05,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Barril',
            description: 'Comporta 160 litros',
            image: 'images/eqp15.jpg',
            value: '2 po',
            price: 2,
            peso: '35 kg',
            rating: 3
        },
        {
            name: 'Baú',
            description: '150 kg',
            image: 'images/eqp16.jpg',
            value: '5 po',
            price: 5,
            peso: '12,5 kg',
            rating: 2
        },
        {
            name: 'Bolsa de componentes',
            description: 'Trata-se de uma pequena bolsa de couro à prova d água que pode ser fixada em um cinto. Ela possui compartimentos para armazenar todos os componentes materiais e outros itens especiais que você precisa para lançar suas magias, exceto os componentes que possuem um custo específico (conforme indicado na descrição da magia). ',
            image: 'images/eqp17.jpg',
            value: '25 po',
            price: 25,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Caixa de Fogo',
            description: 'Esse pequeno recipiente detém uma pederneira, isqueiro e um pavio (um pano geralmente seco embebido em óleo) usado para acender uma fogueira. Usá-lo para acender uma tocha – ou qualquer outra coisa exposta a um combustível abundante – leva uma ação. Acender qualquer outro fogo leva 1 minuto ',
            image: 'images/eqp18.jpg',
            value: '5 pp',
            price: 0.5,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Caneca',
            description: '',
            image: 'images/eqp19.jpg',
            value: '2 pc',
            price: 0.02,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Caneta tinteiro',
            description: '',
            image: 'images/eqp83.jpg',
            value: '2 pc',
            price: 0.02,
            peso: '-',
            rating: 1
        },
        {
            name: 'Cantil',
            description: '',
            image: 'images/eqp21.jpg',
            value: '2 pp',
            price: 0.2,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Cesto',
            description: 'Comporta 20kg',
            image: 'images/eqp22.jpg',
            value: '4 pp',
            price: 0.4,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Cobertor de inverno',
            description: '',
            image: 'images/eqp23.jpg',
            value: '5 pp',
            price: 0.5,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Corda de cânhamo (15 metros)',
            description: 'tem 2 pontos de vida e pode ser arrebentada com um teste de Força CD 17 bem sucedido.',
            image: 'images/eqp24.jpg',
            value: '1 po',
            price: 1,
            peso: '5 kg',
            rating: 1
        },
        {
            name: 'Corda de seda (15 metros)',
            description: 'tem 2 pontos de vida e pode ser arrebentada com um teste de Força CD 17 bem sucedido.',
            image: 'images/eqp25.jpg',
            value: '10 po',
            price: 10,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Corrente (3 metros)',
            description: '',
            image: 'images/eqp26.jpg',
            value: '5 po',
            price: 5,
            peso: '5 kg',
            rating: 1
        },
        {
            name: 'Equipamento de pescaria',
            description: 'Este kit inclui uma vara de pesca de madeira, linha de seda, boias de cortiça, anzóis de aço, chumbadas, iscas e redes de pesca. ',
            image: 'images/eqp27.jpg',
            value: '1 po',
            price: 1,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Escada (3 metros)',
            description: '',
            image: 'images/eqp28.jpg',
            value: '1 pp',
            price: 0.1,
            peso: '12,5 kg',
            rating: 2
        },
        {
            name: 'Esferas (sacola com 1.000)',
            description: 'Usando uma ação, você pode despejar essas minúsculas esferas de metal para cobrir a área de um quadrado de 3 metros de lado. A criatura que se mover dentro da área deve ser bem sucedida em um teste de resistência de Destreza CD 10 para não cair no chão. Uma criatura que mover pela área usando metade do seu deslocamento não precisa fazer o teste de resistência. ',
            image: 'images/eqp29.jpg',
            value: '1 po',
            price: 1,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Espelho de aço',
            description: '',
            image: 'images/eqp30.jpg',
            value: '5 po',
            price: 5,
            peso: '0,25 kg',
            rating: 1
        },
        {
            name: 'Estrepes (bolsa com 20)',
            description: 'Usando uma ação, você pode espalhar um único saco de estrepes para cobrir a área de um quadrado de 1,5 metro de lado. Qualquer criatura que entrar na área deve ser bem sucedida em um teste de resistência de Destreza CD 15. Se falhar, para de se mover e sofre 1 de dano perfurante. Até que a criatura recupere pelo menos 1 ponto de vida, seu deslocamento de caminhada é reduzido em 3 metros. Uma criatura que se mover pela área usando metade do seu deslocamento não precisa fazer o teste de resistência. ',
            image: 'images/eqp31.jpg',
            value: '1 po',
            price: 1,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Fechadura',
            description: 'A fechadura vem com chave. Sem a chave, uma criatura proficiente com ferramentas de ladrão pode abrir a fechadura com um sucesso em um teste de Destreza CD 15. O Mestre pode decidir que fechaduras melhores estão disponíveis por preços mais elevados. ',
            image: 'images/eqp32.jpg',
            value: '10 po',
            price: 10,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Foco arcano - Bastão',
            description: 'Um foco arcano é um item especial – um orbe, um cristal, um bastão, um cajado especialmente construído, uma varinha de madeira, ou algum item semelhante – projetado para canalizar o poder de magias arcanas. Um feiticeiro, bruxo ou mago podem usá-lo como um foco de conjuração, conforme descrito no capítulo 10.',
            image: 'images/eqp33.jpg',
            value: '10 po',
            price: 10,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Foco arcano - Cajado',
            description: 'Um foco arcano é um item especial – um orbe, um cristal, um bastão, um cajado especialmente construído, uma varinha de madeira, ou algum item semelhante – projetado para canalizar o poder de magias arcanas. Um feiticeiro, bruxo ou mago podem usá-lo como um foco de conjuração, conforme descrito no capítulo 10.',
            image: 'images/eqp33.jpg',
            value: '5 po',
            price: 5,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Foco arcano - Cristal',
            description: 'Um foco arcano é um item especial – um orbe, um cristal, um bastão, um cajado especialmente construído, uma varinha de madeira, ou algum item semelhante – projetado para canalizar o poder de magias arcanas. Um feiticeiro, bruxo ou mago podem usá-lo como um foco de conjuração, conforme descrito no capítulo 10.',
            image: 'images/eqp33.jpg',
            value: '10 po',
            price: 10,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Foco arcano - Orbe',
            description: 'Um foco arcano é um item especial – um orbe, um cristal, um bastão, um cajado especialmente construído, uma varinha de madeira, ou algum item semelhante – projetado para canalizar o poder de magias arcanas. Um feiticeiro, bruxo ou mago podem usá-lo como um foco de conjuração, conforme descrito no capítulo 10.',
            image: 'images/eqp33.jpg',
            value: '20 po',
            price: 20,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Foco arcano - Varinha',
            description: 'Um foco arcano é um item especial – um orbe, um cristal, um bastão, um cajado especialmente construído, uma varinha de madeira, ou algum item semelhante – projetado para canalizar o poder de magias arcanas. Um feiticeiro, bruxo ou mago podem usá-lo como um foco de conjuração, conforme descrito no capítulo 10.',
            image: 'images/eqp33.jpg',
            value: '10 po',
            price: 10,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Foco druídico - Cajado de madeira',
            description: 'Um foco druídico pode ser um ramode visco ou azevinho, uma varinha ou cetro de teixo ou de outra madeira especial, um cajado esculpido de uma árvore viva, ou um totem adornado com penas, peles, ossos e dentes de animais sagrados. Um druida pode usar tal objeto como um foco de conjuração, conforme descrito no capítulo 10. ',
            image: 'images/eqp33.jpg',
            value: '5 po',
            price: 5,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Foco druídico - Ramo de visco',
            description: 'Um foco druídico pode ser um ramode visco ou azevinho, uma varinha ou cetro de teixo ou de outra madeira especial, um cajado esculpido de uma árvore viva, ou um totem adornado com penas, peles, ossos e dentes de animais sagrados. Um druida pode usar tal objeto como um foco de conjuração, conforme descrito no capítulo 10. ',
            image: 'images/eqp33.jpg',
            value: '1 po',
            price: 1,
            peso: '-',
            rating: 1
        },
        {
            name: 'Foco druídico - Totem',
            description: 'Um foco druídico pode ser um ramode visco ou azevinho, uma varinha ou cetro de teixo ou de outra madeira especial, um cajado esculpido de uma árvore viva, ou um totem adornado com penas, peles, ossos e dentes de animais sagrados. Um druida pode usar tal objeto como um foco de conjuração, conforme descrito no capítulo 10. ',
            image: 'images/eqp33.jpg',
            value: '1 po',
            price: 1,
            peso: '-',
            rating: 1
        },
        {
            name: 'Foco druídico - Varinha de teixo',
            description: 'Um foco druídico pode ser um ramode visco ou azevinho, uma varinha ou cetro de teixo ou de outra madeira especial, um cajado esculpido de uma árvore viva, ou um totem adornado com penas, peles, ossos e dentes de animais sagrados. Um druida pode usar tal objeto como um foco de conjuração, conforme descrito no capítulo 10. ',
            image: 'images/eqp33.jpg',
            value: '10 po',
            price: 10,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Fogo alquímico (frasco)',
            description: 'Esse líquido pegajoso e adesivo inflama em contado com o ar. Usando uma ação, você pode arremessar esse frasco a até 6 metros de distância, quebrando-o com o impacto. Você deve realizar um ataque à distância contra uma criatura ou objeto, tratando o fogo alquímico como uma arma improvisada. Em um sucesso, o alvo sofre 1d4 de dano de fogo no início de cada um de seus turnos. Uma criatura pode terminar esse dano usando sua ação e fazendo um teste de Destreza CD 10 para apagar as chamas. ',
            image: 'images/eqp33.jpg',
            value: '50 po',
            price: 50,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Frasco',
            description: '',
            image: 'images/eqp34.jpg',
            value: '2 pc',
            price: 0.02,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Garrafa de vidro',
            description: '',
            image: 'images/eqp84.jpg',
            value: '1 po',
            price: 1,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Giz (1 peça)',
            description: '',
            image: 'images/eqp35.jpg',
            value: '1 pc',
            price: 0.01,
            peso: '-',
            rating: 1
        },
        {
            name: 'Grimório',
            description: 'Essencial para os magos, um grimório é um volume encadernado em couro com 100 páginas de pergaminhos em branco, adequado para armazenar magias. ',
            image: 'images/eqp36.jpg',
            value: '50 po',
            price: 50,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Jarra',
            description: '',
            image: 'images/eqp37.jpg',
            value: '4 pc',
            price: 0.04,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Kit de escalada',
            description: 'Um kit de escalada inclui pítons especiais, botas com solas pontiagudas, luvas e um cinto. Você pode usar o kit de escalada como uma ação para "ancorar-se". Quando faz isso, você não pode cair mais de 7,5 metros a partir do ponto onde se ancorou, e não pode subir mais de 7,5 metros de distância desse ponto, sem desfazer a âncora.',
            image: 'images/eqp38.jpg',
            value: '25 po',
            price: 25,
            peso: '6 kg',
            rating: 2
        },
        {
            name: 'Kit de primeiros-socorros',
            description: 'Esse kit é uma bolsa de couro contendo ataduras, pomadas e talas. O kit possui material suficiente para dez usos. Usando uma ação, você pode gastar um uso do kit para estabilizar uma criatura que tenha 0 pontos de vida, sem a necessidade de realizar um teste de Sabedoria (Medicina). ',
            image: 'images/eqp39.jpg',
            value: '5 po',
            price: 5,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Lâmpada',
            description: 'Uma lâmpada lança luz plena em um raio de 4,5 metros e penumbra por mais 9 metros. Uma vez  acesa, a lâmpada queima por 6 horas usando um frasco de óleo (500 ml). ',
            image: 'images/eqp40.jpg',
            value: '5 pp',
            price: 0.5,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Lanterna coberta',
            description: 'Uma lanterna coberta lança luz plena em um raio de 9 metros e penumbra por mais 9 metros. Uma vez acesa, ela queima por 6 horas usando um frasco de óleo (500 ml). Usando uma ação, você pode abaixar a cobertura, reduzindo a claridade para penumbra em um raio de 1,5 metro. ',
            image: 'images/eqp86.jpg',
            value: '5 po',
            price: 5,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Lanterna furta-fogo',
            description: 'Uma lanterna furta-fogo lança luz plena em um cone de 18 metros e penumbra por mais 18 metros. Uma vez acesa, ela queima por 6 horas usando um frasco de óleo (500 ml). ',
            image: 'images/eqp85.jpg',
            value: '10 po',
            price: 10,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Lente de aumento',
            description: 'Essa lente permite ver pequenos objetos mais de perto. Ela também é útil como um substituto da pederneira e isqueiro para acender fogo. Usar uma lupa para acender fogo necessita de luz tão brilhante como a luz do sol para focar, um pavio e cerca de 5 minutos. Uma lente de aumento concede vantagem em qualquer teste de habilidade feito para avaliar ou inspecionar um item que é pequeno ou muito detalhado.',
            image: 'images/eqp41.jpg',
            value: '100 po',
            price: 100,
            peso: '-',
            rating: 1
        },
        {
            name: 'Livro',
            description: 'Um livro pode conter poesia, relatos históricos, informações relativas a um campo particular de sabedoria, diagramas e notas sobre engenhocas gnômicas, ou qualquer outra coisa que possa ser representada usando texto ou imagens. Um livro com magias é um grimório, também descrito nessa seção. ',
            image: 'images/eqp42.jpg',
            value: '25 po',
            price: 25,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Luneta',
            description: 'Objetos vistos através de uma luneta são ampliados até o dobro do seu tamanho. ',
            image: 'images/eqp43.jpg',
            value: '1.000 po',
            price: 1000,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Manto',
            description: '',
            image: 'images/eqp44.jpg',
            value: '1 po',
            price: 1,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Marreta',
            description: '',
            image: 'images/eqp45.jpg',
            value: '2 po',
            price: 2,
            peso: '5 kg',
            rating: 2
        },
        {
            name: 'Martelo',
            description: '',
            image: 'images/eqp20.jpg',
            value: '1 po',
            price: 1,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Mochila',
            description: 'Comporta 15kg',
            image: 'images/eqp46.jpg',
            value: '2 po',
            price: 2,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Munição - Balas de Funda (20)',
            description: '',
            image: 'images/eqp47.jpg',
            value: '4 pc',
            price: 0.04,
            peso: '0,75 kg',
            rating: 1
        },
        {
            name: 'Munição - Flechas (20)',
            description: '',
            image: 'images/eqp48.jpg',
            value: '1 po',
            price: 1,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Munição - Virotes (20)',
            description: '',
            image: 'images/eqp49.jpg',
            value: '1 po',
            price: 1,
            peso: '0,75 kg',
            rating: 1
        },
        {
            name: 'Munição - Zarabatana (50)',
            description: '',
            image: 'images/eqp50.jpg',
            value: '1 po',
            price: 1,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Óleo (frasco)',
            description: 'Geralmente vem em um frasco de argila que contém 500 ml. Usando uma ação, você pode espirrar o óleo desse frasco em uma criatura a até 1,5 metro de você ou arremessar a até 6 metros, quebrando-o com o impacto. Você deve realizar um ataque à distância contra uma criatura ou objeto, tratando o óleo como uma arma improvisada. Com um sucesso, o alvo é coberto de óleo. Se o alvo sofrer qualquer dano flamejante antes do óleo secar (depois de 1 minuto), a criatura sofre 5 de dano flamejante adicional pela queima do óleo. Você também pode derramar um frasco de óleo no chão para cobrir uma área de um quadrado de 1,5 metro de lado, desde que a superfície esteja nivelada. Se aceso, o óleo queima por 2 rodadas e causa 5 de dano flamejante a qualquer criatura que entrar na área ou terminar seu turno dentro da área. Uma criatura pode sofrer esse dano apenas uma vez por turno.',
            image: 'images/eqp51.jpg',
            value: '1 pp',
            price: 0.1,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Pá',
            description: '',
            image: 'images/eqp52.jpg',
            value: '2 po',
            price: 2,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Panela de ferro',
            description: '',
            image: 'images/eqp53.jpg',
            value: '2 po',
            price: 2,
            peso: '5 kg',
            rating: 2
        },
        {
            name: 'Papel (uma folha)',
            description: '',
            image: 'images/eqp54.jpg',
            value: '2 pp',
            price: 0.2,
            peso: '-',
            rating: 1
        },
        {
            name: 'Pé de cabra',
            description: 'Usar um pé de cabra concede vantagem nos testes de Força onde uma alavanca possa ser aplicada. ',
            image: 'images/eqp55.jpg',
            value: '2 po',
            price: 2,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Pedra de amolar',
            description: '',
            image: 'images/eqp56.jpg',
            value: '1 pc',
            price: 0.01,
            peso: '-',
            rating: 1
        },
        {
            name: 'Pergaminho (uma folha)',
            description: '',
            image: 'images/eqp57.jpg',
            value: '1 pp',
            price: 0.1,
            peso: '-',
            rating: 1
        },
        {
            name: 'Picareta de minerador',
            description: '',
            image: 'images/eqp58.jpg',
            value: '2 po',
            price: 2,
            peso: '5 kg',
            rating: 2
        },
        {
            name: 'Píton',
            description: '',
            image: 'images/eqp59.jpg',
            value: '5 pc',
            price: 0.05,
            peso: '-',
            rating: 1
        },
        {
            name: 'Poção de cura',
            description: 'Um personagem que beber o líquido vermelho mágico deste frasco recupera 2d4+2 pontos de vida. Beber ou administrar uma poção exige uma ação. ',
            image: 'images/eqp60.jpg',
            value: '50 po',
            price: 50,
            peso: '0,25 kg',
            rating: 1
        },
        {
            name: 'Porta mapas ou pergaminhos',
            description: 'Esse estojo cilíndrico de couro pode armazenar até 10 folhas de papel enroladas ou 5 folhas de pergaminhos enroladas. ',
            image: 'images/eqp61.jpg',
            value: '1 po',
            price: 1,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Porta virotes',
            description: 'Esse estojo de madeira pode armazenar até 20 virotes de besta. ',
            image: 'images/eqp62.jpg',
            value: '1 po',
            price: 1,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Pregos de ferro (10)',
            description: '',
            image: 'images/eqp63.jpg',
            value: '1 po',
            price: 1,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Rações de viagem (1 dia)',
            description: 'Rações de viajem consistem em alimentos desidratados adequados para viagens longas, incluindo carne seca, frutas secas, bolachas e nozes.',
            image: 'images/eqp64.jpg',
            value: '5 pp',
            price: 0.5,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Robes',
            description: '',
            image: 'images/eqp65.jpg',
            value: '1 po',
            price: 1,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Roldana e polia',
            description: 'Um conjunto de roldanas com um cabo entre elas e um gancho para fixar aos objetos, a roldana e polia permitem içar até quatro vezes o peso que você ergueria normalmente.',
            image: 'images/eqp66.jpg',
            value: '1 po',
            price: 1,
            peso: '2,5 kg',
            rating: 1
        },
        {
            name: 'Roupas comuns',
            description: '',
            image: 'images/eqp67.jpg',
            value: '5 pp',
            price: 0.5,
            peso: '1,5 kg',
            rating: 1
        },
        {
            name: 'Roupas de viajante',
            description: '',
            image: 'images/eqp68.jpg',
            value: '2 po',
            price: 2,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Roupas de entretenimento',
            description: '',
            image: 'images/eqp69.jpg',
            value: '5 po',
            price: 5,
            peso: '2 kg',
            rating: 1
        },
        {
            name: 'Roupas finas',
            description: '',
            image: 'images/eqp70.jpg',
            value: '15 po',
            price: 15,
            peso: '3 kg',
            rating: 1
        },
        {
            name: 'Sabão',
            description: '',
            image: 'images/eqp71.jpg',
            value: '2 pc',
            price: 0.02,
            peso: '-',
            rating: 1
        },
        {
            name: 'Saco',
            description: 'Comporta 13kg',
            image: 'images/eqp72.jpg',
            value: '1 pc',
            price: 0.01,
            peso: '0,25 kg',
            rating: 1
        },
        {
            name: 'Saco de dormir',
            description: '',
            image: 'images/eqp73.jpg',
            value: '1 po',
            price: 1,
            peso: '3,5 kg',
            rating: 1
        },
        {
            name: 'Símbolo sagrado - Amuleto',
            description: ' Um símbolo sagrado é a representação de uma divindade ou um panteão. Pode ser um amuleto com o símbolo de uma divindade, um símbolo talhado cuidadosamente ou encrustado como um emblema em um escudo ou até mesmo uma caixa pequena que guarda um fragmento de uma relíquia sagrada. O apêndice B lista os símbolos comumente associados a muitas divindades no multiverso. Um clérigo ou paladino pode usar um símbolo sagrado como um foco de conjuração, como descrito no capítulo 10. Para usar o símbolo dessa forma, o conjurador precisa segurá-lo em uma mão, usa-lo visivelmente ou hostenta-lo em seu escudo. ',
            image: 'images/eqp74.jpg',
            value: '5 po',
            price: 5,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Símbolo sagrado - Emblema',
            description: 'Um símbolo sagrado é a representação de uma divindade ou um panteão. Pode ser um amuleto com o símbolo de uma divindade, um símbolo talhado cuidadosamente ou encrustado como um emblema em um escudo ou até mesmo uma caixa pequena que guarda um fragmento de uma relíquia sagrada. O apêndice B lista os símbolos comumente associados a muitas divindades no multiverso. Um clérigo ou paladino pode usar um símbolo sagrado como um foco de conjuração, como descrito no capítulo 10. Para usar o símbolo dessa forma, o conjurador precisa segurá-lo em uma mão, usa-lo visivelmente ou hostenta-lo em seu escudo. ',
            image: 'images/eqp74.jpg',
            value: '5 po',
            price: 5,
            peso: '-',
            rating: 1
        },
        {
            name: 'Símbolo sagrado - Relicário',
            description: 'Um símbolo sagrado é a representação de uma divindade ou um panteão. Pode ser um amuleto com o símbolo de uma divindade, um símbolo talhado cuidadosamente ou encrustado como um emblema em um escudo ou até mesmo uma caixa pequena que guarda um fragmento de uma relíquia sagrada. O apêndice B lista os símbolos comumente associados a muitas divindades no multiverso. Um clérigo ou paladino pode usar um símbolo sagrado como um foco de conjuração, como descrito no capítulo 10. Para usar o símbolo dessa forma, o conjurador precisa segurá-lo em uma mão, usa-lo visivelmente ou hostenta-lo em seu escudo. ',
            image: 'images/eqp74.jpg',
            value: '5 po',
            price: 5,
            peso: '1 kg',
            rating: 1
        },
        {
            name: 'Sinete',
            description: '',
            image: 'images/eqp75.jpg',
            value: '5 po',
            price: 5,
            peso: '-',
            rating: 1
        },
        {
            name: 'Sino',
            description: '',
            image: 'images/eqp76.jpg',
            value: '1 po',
            price: 1,
            peso: '-',
            rating: 1
        },
        {
            name: 'Tenda para duas pessoas',
            description: 'Um abrigo simples e portátil que acomoda duas pessoas. ',
            image: 'images/eqp77.jpg',
            value: '2 po',
            price: 2,
            peso: '10 kg',
            rating: 2
        },
        {
            name: 'Tocha',
            description: 'A tocha queima por 1 hora, fornecendo luz plena em um raio de 6 metros e penumbra por mais 6 metros. Se você realizar um ataque corpo-a-corpo com uma tocha acesa e acertar, causa 1 de dano flamejante.',
            image: 'images/eqp78.jpg',
            value: '1 pc',
            price: 0.01,
            peso: '0,5 kg',
            rating: 1
        },
        {
            name: 'Tinta (frasco de 30ml)',
            description: '',
            image: 'images/eqp79.jpg',
            value: '10 po',
            price: 10,
            peso: '-',
            rating: 1
        },
        {
            name: 'Vara (3 metros)',
            description: '',
            image: 'images/eqp80.jpg',
            value: '5 pc',
            price: 0.05,
            peso: '3,5 kg',
            rating: 1
        },
        {
            name: 'Vela',
            description: 'Por uma hora, a vela emana luz plena em um raio de 1,5 metro e penumbra por mais 1,5 metro. ',
            image: 'images/eqp81.jpg',
            value: '1 pc',
            price: 0.01,
            peso: '-',
            rating: 1
        },
        {
            name: 'Veneno básico (frasco)',
            description: 'Você pode usar o veneno contido nesse vidro para cobrir a lâmina de uma arma cortante ou perfurante ou até três peças de munição. Aplicar o veneno leva uma ação. Uma criatura atingida pela arma ou munição envenenada deve obter sucesso em um teste de resistência de Constituição CD 10 ou sofrerá 1d4 de dano de veneno. Uma vez aplicado, o veneno retém sua potência durante 1 minuto antes de secar.',
            image: 'images/eqp82.jpg',
            value: '100 po',
            price: 100,
            peso: '-',
            rating: 1
        },
        {
            name: 'Orbe Modular',
            description: 'Energiza itens modulares, recarrega automaticamente após 12 horas de descanso.',
            image: 'images/eqp87.jpg',
            value: '30 PO',
            price: 30,
            peso: '2kg',
            rating: 1
        }
    ];

    const productList = document.getElementById('product-list');

    const displayProducts = (products) => {
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

    const filterProducts = () => {
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

    // Inicialmente exibe todos os produtos
    displayProducts(products);
    
    // Adiciona a função filterProducts ao escopo global para ser chamada pelo botão de filtro
    window.filterProducts = filterProducts;
});