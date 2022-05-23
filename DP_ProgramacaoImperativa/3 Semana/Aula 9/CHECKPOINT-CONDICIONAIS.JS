/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

*/

// RESOLUÇÃO

/* 1 Questão - Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?
function MaiorMenor(num1=0,num2=0,num3=0){
if (num1 > num2 && num1 > num3){
    console.log(`O número maior é: ${num1}`)

} else if (num2 > num1 && num2 > num3){ 
    console.log(`O número maior é: ${num2}`)

} else{
    console.log(`O número maior é: ${num3}`)
}
}

function MenorMaior(num1=0,num2=0,num3=0){
    if (num1 < num2 && num1 < num3){
        console.log(`O número menor é: ${num1}`)
    
    } else if (num2 < num1 && num2 < num3){ 
        console.log(`O número menor é: ${num2}`)
    
    } else{
        console.log(`O número menor é: ${num3}`)
    }
    }

console.log(MaiorMenor(8,5,3));
console.log(MenorMaior(8,5,3));
 */

/* 2 Questão - Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

function doarSangue (idade){
    if (idade >=18 && idade <= 67){
        console.log("Pode doar")
    }else {
        console.log("Não pode doar, precisa ter entre 18 e 67 anos")
    }

}

console.log(doarSangue(18));
 */

/* 3 Questão - Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

function positivoNegativo (numero){
    if (numero >= 0){
        console.log("O número é positivo")
    }else {
        console.log('O número é negativo')
    }
}

console.log(positivoNegativo(2)); */

/* 4 Questão - Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

function nota (nota1=0, nota2=0){
    if (nota1+nota2==10){
        console.log("Aprovado com Distinção")
    } else if (nota1+nota2>=7){
        console.log("Aprovado")
    }else {
        console.log("Reprovado")
    }
}

console.log(nota(8,2)); */
