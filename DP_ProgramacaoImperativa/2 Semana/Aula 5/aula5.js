/* function repeticao (info,qtd){
     return info.repeat (qtd);
 }
 

 console.log(repeticao("Guiilherme ", 5)); */

 /* function sub ( a=0, b=0){
     return a-b;
 }
 
 console.log(sub(1,3)); */

 /* console.log('string '+ 8);
 console.log(`string ${8}`);
  */
 
 /* function soma (a , b){
     return a + b;
 }
 
 function divideSoma (a, b){
     return a / b;
 }

 console.log(divideSoma(soma(3,7),10 )); */

/* function soma (a,b,c){
    return a + b+ c
}

console.log(soma(5,5));

function soma1 (a,b,c=0){
    return a + b+ c
}

console.log(soma1(5,5)); */

/* console.log("String"==="String"); */










 //Função para transformar Polegadas em Centímetros

function PolCent (polegadas) {
    return polegadas * 2.54
}

console.log(PolCent(2));

// Função para receber uma string e converter em URL

function url (palavra) {
    return "www." + palavra + ".com.br"
}

console.log(url('digitalhouse'));

// Função que receba a mesma palavra mais acrescente um (!) ao final

function exclamacao (frase) {
    return frase + "!"
}

console.log(exclamacao("Isso é uma função em execução"));


// Função que calcula a idade de um cachorro levando em consideração 7 anos humanos para 1 de cachorro

function idadeCao (idadeCachorro) {
    return idadeCachorro * 7 + " idade humana"
}

console.log(idadeCao(2));

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês

function salarioHr (salario){
    return salario / 160
}

console.log(salarioHr(2000))

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

function IMC (altura, peso){
    return altura / peso
}

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.
