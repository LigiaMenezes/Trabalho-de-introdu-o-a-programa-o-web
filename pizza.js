let pizzaJson = [
    {
        id: 1,
        name: 'Mussarela',
        img: 'images/pizza.png',
        price: [30.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, camada dupla de mussarela e orégano'
      },
      {
        id: 2,
        name: 'Calabresa',
        img: 'images/pizza2.png',
        price: [31.00, 35.00, 40.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, mussarela, calabresa fatiada, cebola e orégano'
      },
      {
        id: 3,
        name: 'Quatro Queijos',
        img: 'images/pizza3.png',
        price: [28.00, 30.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, camadas de mussarela, provolone, parmessão, gorgonzola e orégano'
      },
      {
        id: 4,
        name: 'Brasileira',
        img: 'images/pizza4.png',
        price: [25.00, 30.00, 38.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, mussarela, calabresa picada, palmito, champignon, azeitonas e orégano'
      },
      {
        id: 5,
        name: 'Portuguesa',
        img: 'images/pizza5.png',
        price: [29.00, 35.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, mussarela, presunto, ovos, cebolas, pimentão, azeitona  e orégano'
      },
      {
        id: 6,
        name: 'Moda da Casa',
        img: 'images/pizza6.png',
        price: [30.00, 33.00, 38.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, mussarela, carne de sol, tomates em cubos, coentro, cebola, azeitona, catupiry e orégano'
      },
      {
        id: 7,
        name: 'Banana com canela',
        img: 'images/pizza7.png',
        price: [27.00, 35.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Mussarela, banana, canela e açúcar'
      },
      {
        id: 8,
        name: 'Chocolate com morano',
        img: 'images/pizza8.png',
        price: [30.00, 32.00, 35.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Creme de leite, lascas de chocolate e morangos'
      },

      {
        id: 9,
        name: 'Frango com legumes',
        img: 'images/pizza9.png',
        price: [30.00, 32.00, 35.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Frango, pimenta, tomate, espinafre'
      },

      {
        id: 10,
        name: 'bacon com queijo',
        img: 'images/pizza10.png',
        price: [21.00, 24.00, 26.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, bacon, mussarela, calabresa fatiada, cebola e orégano'
      },
      {
        id: 11,
        name: 'Frango com Catupiry',
        img: 'images/pizza11.png',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de Tomate, Frango, Catupiry'
      },
      {
        id: 12,
        name: 'De casa',
        img: 'images/pizza12.png',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de Tomate, presunto, oregano, catupiry'
      },
      {
        id: 13,
        name: 'Cogumelos com verduras',
        img: 'images/pizz14.jpg',
        price: [30.00, 34.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Cogumelos, cebola, milho, tomate, queijo'
      },
      
      {
        id: 14,
        name: 'Peixe com verduras',
        img: 'images/pizza20.webp',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Peixe, Molho de tomate, tomate, acelga, pimenta'
      },
      {
        id: 15,
        name: 'Cogumelos',
        img: 'images/pizz16.webp',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Cogumelos, tomate, molho branco, espinafre'
      },
      {
        id: 16,
        name: 'Vegana',
        img: 'images/pizz17.webp',
        price: [30.00, 34.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'milho, acelga, tomate, Molho Bechamel '
      },
      {
        id: 17,
        name: 'Tomate com farofa',
        img: 'images/pizz18.webp',
        price: [30.00, 35.00, 38.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Tomate, farofa, legumes'
      },
      {
        id: 18,
        name: 'Queijo a dois',
        img: 'images/pizz19.webp',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Mussarela, queijo, tomate, espinafre'
      },
      {
        id: 19,
        name: 'Paulistana',
        img: 'images/pizz15.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'tomate, calabresa, presunto, molho de tomate, queijo'
      },
      {
        id: 20,
        name: 'Piaui',
        img: 'images/pizz21.webp',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Calabresa, acelga, mussarela, queijo'
      },
      {
        id: 21,
        name: 'Molho com tomate',
        img: 'images/pizz25.webp',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Tomate, pimenta, queijo, peixe, molho branco'
      },
      {
        id: 22,
        name: 'Vegetariana',
        img: 'images/pizza21.webp',
        price: [31.00, 34.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho de tomate, tomate, espinafre'
      },
      {
        id: 23,
        name: 'Tomate com espinafre',
        img: 'images/pizza22.webp',
        price: [30.00, 33.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Tomate, molho de tomate, espinafre'
      },


      {
        id: 33,
        name: 'Presunto',
        img: 'images/pizza35.webp',
        price: [30.00, 35.00, 40.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Presunto, oregano, queijo'
      },


      {
        id: 38,
        name: 'Ostracismo',
        img: 'images/pizza16.jpg',
        price: [30.00, 34.00, 38.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Tomate, molho branco, pimentão, azeitona'
      },
      {
        id: 39,
        name: 'Mista',
        img: 'images/pizza17.jpg',
        price: [30.00, 34.00, 37.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo, presunto'
      },
      {
        id: 40,
        name: 'Tomuva',
        img: 'images/pizza18.jpg',
        price: [32.00, 35.00, 40.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Azeitona, tomate, molho de tomate, espinafre'
      },
      {
        id: 37,
        name: 'Mistura',
        img: 'images/pizza19.jpg',
        price: [30.00, 35.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Calabresa, acelga, cebola, tomate, molho de tomate'
      },

      {
        id: 39,
        name: 'Bom Sabor',
        img: 'images/pizza21.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Azeitona preta, tomate, queijo'
      },
      {
        id: 40,
        name: 'Vesul',
        img: 'images/pizza22.jpg',
        price: [32.00, 38.00, 41.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Azeitona preta, queijo, tomate, molho de tomate'
      },
      {
        id: 41,
        name: 'Molho com bacon',
        img: 'images/pizza23.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Molho branco, bacon,frango'
      },
      {
        id: 42,
        name: 'Presunto com cheddar',
        img: 'images/pizza24.jpg',
        price: [30.00, 35.00, 40.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Chedar, presunto, molho de tomate'
      },

      {
        id: 44,
        name: 'Shake',
        img: 'images/pizza26.jpg',
        price: [32.00, 38.00, 40.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Tomate, molho branco, legumes'
      },
      {
        id: 45,
        name: 'Lhaquix',
        img: 'images/pizza27.jpg',
        price: [32.00, 35.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Tomate, molho, frango, legumes'
      },
      {
        id: 46,
        name: 'Maxsabor',
        img: 'images/pizza28.jpg',
        price: [34.00, 40.00, 45.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Tomate, calabresa, presunto, carne de sol'
      },

      {
        id: 49,
        name: 'Caipira',
        img: 'images/caipira.jpg',
        price: [32.00, 38.00, 43.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, bacon tipo crispy, azeitona p reta e orégano.'
      },

      {
        id: 51,
        name: 'Carne de Sol',
        img: 'images/CARNEDESOL.jpg',
        price: [30.00, 34.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, carne de sol desfiada, finas fatias de cebola, Requeijão cremoso, azeitona preta e orégano'
      },
      {
        id: 52,
        name: 'Nordestina',
        img: 'images/nordestina.jpg',
        price: [30.00, 35.00, 40.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo coalho em cubos ,bacon fatiados , finas fatias de cebola , azeitona preta e orégano'
      },
      {
        id: 53,
        name: 'Frango catupiry',
        img: 'images/frango.jpg',
        price: [28.00, 34.00, 39.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, frango assado desfiado, com requeijão cremoso, milho, bacon, azeitona preta e orégano'
      },
      {
        id: 54,
        name: 'Marguerita',
        img: 'images/MARGUERITA.jpg',
        price: [34.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, tomates selecionados, manjericão, azeitona preta e orégano'
      },
      {
        id: 55,
        name: 'Lombinho',
        img: 'images/lombinho.jpg',
        price: [33.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, lombo canadense, azeitona preta e orégano'
      },
      {
        id: 56,
        name: 'Lombinho com abacaxi',
        img: 'images/lombinho2.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, lombo canadense, abacaxi, azeitona preta e orégano'
      },
      {
        id: 57,
        name: 'Cartola',
        img: 'images/cartola.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, rodelas de banana, açúcar e canela.'
      },
      {
        id: 58,
        name: 'Chocolate com castanha',
        img: 'images/castanha.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Choolate ao leite e granulado de castanha'
      },
      {
        id: 59,
        name: 'CHARQUE E CREAM CHEESE',
        img: 'images/charque.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, charque, finas fatias de cebola roxa, pimenta biquinho, cream cheese, orégano e azeitona.'
      },
      {
        id: 60,
        name: 'Cubana',
        img: 'images/cubana.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Muçarela, frango, champignon, bacon em tiras, calabresa, requeijão, orégano e azeitona'
      },
      {
        id: 61,
        name: 'Doce de leite com abacaxi',
        img: 'images/docedeleiteabacaxi.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Doce de leite em pasta, com toque cítrico de limão siciliano'
      },
      {
        id: 62,
        name: 'Dois Amores',
        img: 'images/doisamores.jpg',
        price: [34.00, 39.00, 45.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'chocolate ao leite e coco ralado e morango'
      },
      {
        id: 63,
        name: 'Camarão c/ 4 queijos',
        img: 'images/camarao4queijos.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Queijo muçarela, gorgonzola, provolone, requeijão cremoso, camarão, azeitona preta e orégano.'
      },
      {
        id: 64,
        name: 'Romeu e Julieta',
        img: 'images/romeu.jpg',
        price: [32.00, 38.00, 42.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Creme cheese e doce de goiaba'
      },
      {
        id: 65,
        name: 'Sonho de valsa',
        img: 'images/sonhodevalsa.jpg',
        price: [35.00, 40.00, 45.00],
        sizes: [
          '6 fatias',
          '8 fatias',
          '12 fatias'
        ],
        description: 'Chocolate gratinado e bombons sonho de valsa'
      },
      {
        id: 66,
        name: 'Coca Cola',
        img: 'images/coca.jpg',
        price: [5.99, 7.99, 8.99],
        sizes: [
          '1 litro',
          '1,5 litros',
          '2 litros'
        ],
        description: 'Coca Cola'
      },
      {
        id: 67,
        name: 'Guaraná',
        img: 'images/guarana.jpeg',
        price: [5.00, 7.00, 8.00],
        sizes: [
          '1 litro',
          '1,5 litros',
          '2 litros'
        ],
        description: 'Guaraná Antarctica'
      },
      {
        id: 67,
        name: 'Fanta',
        img: 'images/fanta.jpeg',
        price: [4.80, 6.00, 7.00],
        sizes: [
          '1 litro',
          '1,5 litros',
          '2 litros'
        ],
        description: 'Fanta'
      },

];