const nome1 = "José da Silva";
const nome2 = "Carlos de Souza";
const nome3 = "Aline Ferreira";
const nome4 = "Ana Paula";

let idade1 = 27;
let idade2 = 27;
let idade3 = 33;
let idade4 = 26;

let peso1 = 83.5;
let peso2 = 80.1;
let peso3 = 63.7;
let peso4 = 55;

let altura1 = 1.70;
let altura2 = 1.76;
let altura3 = 1.53;
let altura4 = 1.62;

let plano1 = true;
let plano = false;


let IMC1 = peso1 / (altura1 * altura1);
let IMC2 = peso2 / (altura2 * altura2);
let IMC3 = peso3 / (altura3 * altura3);
let IMC4 = peso4 / (altura4 * altura4);

console.log( nome1 + " tem " + idade1 +" anos e seu índice de massa corporal é de: " + IMC1.toFixed(2)  + "  -  " + " Possui plano? " + plano1);

console.log( nome2 + " tem " + idade2 +" anos e seu índice de massa corporal é de: " + IMC2.toFixed(2)  + "  -  " + " Possui plano? " + plano1);

console.log( nome3 + " tem " + idade3 +" anos e seu índice de massa corporal é de: " + IMC3.toFixed(2) + "  -  " + " Possui plano? " + plano);

console.log( nome4 + " tem " + idade4 +" anos e seu índice de massa corporal é de: " + IMC4.toFixed(2)  + "  -  " + " Possui plano? " + plano1);


