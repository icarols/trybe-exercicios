// const myName = "Icaro Sousa";
// const birthCity = "Juazeiro do Norte";
// let birthYear = 1992;
// birthYear = 2030;
// birthCity = "Crato";

// console.log(myName, birthCity, birthYear);



// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// patientId = "50";
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail, typeof patientAge); 



let a = -2;
let b = 4;
const c = 5;
const d = 3;
const e = 4;
let f = 60; 
let g = 60;
let h = 60;
let somaLados = f + g + h;

let soma = a + b; //exercicio 1
console.log(soma);

let subtr = a - b; //exercicio 1
console.log(subtr);

let multi = a * b; //exercicio 1
console.log(multi);

let divis = a / b; //exercicio 1
console.log(divis);

let mod = a % b; //exercicio 1
console.log(mod);

if (c > d){ //exercicio 2
    console.log(d);}
else{ 
    console.log(e);} 

if (c > d && e){ //exercicio 3
    console.log(c); }
    else if (d > c && e){
        console.log(d);}
        else if (e > c && d){
            console.log(e);}
            else {
                console.log("erro! troque os valores dos numeros")}

if (a >= 1){ //exercicio 4
    console.log("positive");}
    else if (a < 0){ 
        console.log("negative");}
        else {
            console.log("zero");}

if (f < 0){ //exercicio 5
    console.log("erro! insira um valor positivo");
}
else if (g < 0){
    console.log("erro! insira um valor positivo");
}
else if (h < 0){
    console.log("erro! insira um valor positivo");
}
else if (somaLados == 180){
    console.log(true);
}
else (console.log(false));