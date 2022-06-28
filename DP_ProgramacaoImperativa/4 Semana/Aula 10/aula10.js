// let nome = 'Marcos'
// let verdade = true
// let lista =[1,2,3]
//console.log(nome[2])
//console.log(nome.length)
//console.log(verdade.length)// não vai funcionar se o tipo não é String
//console.log(lista.length)
// o espaço também é contado 
// ex 1,2,' '.

// let saudacao = "Olá! Estamos programando"
// console.log(saudacao.indexOf("Estamos"))

// Mesa de trabalho : 
//A. Acessar elementos específicos de um array

const nomes1 = ['Guilherme', 'Francisco', 'João']
const sobrenome = ['Leite', 'João', 'Vieira']

console.log(nomes1.length)
console.log(nomes1[2])

// B. Modificar cada um dos elementos de um array e imprimi-los no console
nomes1[1] = "Alterado"
console.log(nomes1)

sobrenome[0] = "Demais"
console.log(sobrenome)

console.log(nomes1[1] + " " + sobrenome[0])

// C. Adicionar elementos a um array.

nomes1.push("Adicionado")
sobrenome.push("Mais um")
console.log(nomes1.length, sobrenome.length)
console.log(nomes1[3]+" "+sobrenome[3])

// D. Extrair elementos de um array.

nomes1.pop()
sobrenome.pop()
console.log(nomes1.length, sobrenome.length)
console.log(nomes1, sobrenome)

// E. Comparar elementos de um array com os elementos de outro.

if ((nomes1[0]) == (sobrenome[0])){
    console.log(`O ${nomes1[0]} é igual o ${sobrenome[0]}`)
}

if((nomes1[1]) == (sobrenome[1])){
    console.log(`O ${nomes1[1]} é igual o ${sobrenome[1]}`)

}

if((nomes1[2]) == (sobrenome[1])){
    console.log(`O ${nomes1[2]} é igual o ${sobrenome[1]}`)

} else {
    console.log("É diferente")
}

const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.log(notas);
console.log(notas[3], notas[2]); // é assim que se acessa elementos específicos do array
console.log(notas[6]);
console.log(notas[0]);

// alterando o valor de um elemento do array. (obs.: não é possível alterar a constante "notas", mas é possível alterar os valores dentro do array)

notas[3] = 9.2;

console.log(notas);

//definir os elementos de uma array após a criação da array

const nomes = [];

nomes[0] = "Pedro";
nomes[1] = "Ana";
nomes[2] = "Bia";
nomes[3] = "Gui";
nomes[4] = "Rebeca";
nomes[5] = "Thiago";

console.log(nomes);

nomes[5] += " da Silva"; //concatenando valores em um elemento do array

console.log(nomes);

nomes[6] = 45;

console.log(nomes);

nomes[6]++ //caso o elemento seja um número ele realiza a operação indicada

console.log(nomes);

nomes[1] -= 5;

console.log(nomes); //ao tentar somar um nome com um texto, retorna NaN (como esperado)

// Uso do .slice, para fazer cortes
let nome = 'Marcos é top'
console.log(nome.slice(6,12))

// Uso do .trim, para eliminar os espaços no inicio e no fim da string
nome = '  Marcos é top  '
console.log(nome.trim())

// Uso do .split, para transformar uma string em array
nome = nome.trim()
console.log(nome.split(" "))

//Uso do .replace, para substituir uma parte da String por outra
nome = "Marcos é top"
nome = nome.replace("Marcos", "Guilherme")
console.log(nome)

// Uso do metodo array .pop()
console.log(nomes)
nomes.pop()
console.log(nomes)



// Uso do metodo array .join
console.log(nomes)
console.log(nomes.join())// console.log(nomes)// Ele não modifica o Array

// Uso do método .includes(), para verificar se tem ou não o que estou procurando.
console.log(nomes.includes("Gui"))












