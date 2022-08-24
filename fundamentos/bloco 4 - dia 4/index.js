// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

  //-------------------------------------------------------------------------------------------------------------------------

//   let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  //-------------------------------------------------------------------------------------------------------------------------

//   let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

//-------------------------------------------------------------------------------------------------------------------------

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     },
//     bestInTheWorld: [
//         '2006',
//         '2007',
//         '2008',
//         '2009',
//         '2010',
//         '2018'
//     ]
// }

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + " anos de idade.");

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

//-------------------------------------------------------------------------------------------------------------------------

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let i in names){
//     console.log('Olá ' + names[i]);
//   }

//-------------------------------------------------------------------------------------------------------------------------

// // exercicio 1 - imprimir mensagem de boas vindas
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim',
//   };

// for (let i in info){
// }
// console.log('Bem vinda ' + info.personagem);

// //-------------------------------------------------------------------------------------------------------------------------

// // exercicio 2 - imprimir o objeto no console
// for (let index in info){
//     console.log(index, info[index]);
// }

// //-------------------------------------------------------------------------------------------------------------------------

// // exercicio 3 - for/in que mostre todas as chaves do objeto
// for (let i in info){
//     console.log(i);
// }

// //-------------------------------------------------------------------------------------------------------------------------

// // exercicio 4 - for/in que mostre todos os valores das chaves do objeto
// for (let i in info){
//     console.log(info[i]);
// }

// //-------------------------------------------------------------------------------------------------------------------------

// // exercicio 5 - defina um segundo objeto com a mesma estrutura e imprima os valores de cada objeto juntos de acordo com cada uma das chaves
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim',
//   };

//   for (let index in info){
//     console.log(info[index] + " e " + info2[index]);
// }

//-------------------------------------------------------------------------------------------------------------------------

// exercicio 6 - faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
for (let index of leitor.livrosFavoritos){
    console.log();

}
console.log("O livro favorito de", leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0]);
  