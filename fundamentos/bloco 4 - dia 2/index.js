let numbers = [301, 9, 3, 19, 70, 8, 100, 227, 35, 27];
let soma = 0;
let media = 0;


// for (let i = 0; i < numbers.length; i += 1){                     // exercicio 1 - imprime todos os itens de um array
//     console.log(numbers[i]);
// }
  
//-----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < numbers.length; i += 1){                     // exercicio 2 - soma dos itens de um array
//      soma += numbers[i]; 
// }
// console.log(soma);

// //-----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < numbers.length; i += 1){                     // exercicio 3 - media da soma dos itens do array
//     media += numbers[i]; 
// }
// console.log(media / numbers.length);

// //-----------------------------------------------------------------------------------------------------------------------
// let valorFinal = (media / numbers.length);                       // exercicio 4 - verifica se media é maior que 20
// if (valorFinal > 20){
//     console.log("valor maior que 20");
// }
// else (console.log("valor menor ou igual a 20"));

//-----------------------------------------------------------------------------------------------------------------------
let test = 0;                                                       // exercicio 5 - verifica e imprime o maior valor do array
let maiorNum = 0;
for (let i = 0; i < numbers.length; i += 1){
    test = numbers[i];
    if (test > maiorNum){
        maiorNum = test;
    }
    else (test = numbers[i]);
}
console.log(maiorNum);

//-----------------------------------------------------------------------------------------------------------------------


