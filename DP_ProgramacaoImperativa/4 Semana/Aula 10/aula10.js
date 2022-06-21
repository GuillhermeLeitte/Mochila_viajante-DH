// let nome = 'Marcos'
// let verdade = true
// let lista =[1,2,3]
//console.log(nome[2])
//console.log(nome.length)
//console.log(verdade.length)// não vai funcionar se o tipo não é String
//console.log(lista.length)
// o espaço também é contado 
// ex 1,2,' '.

// Mesa de trabalho : 
//A. Acessar elementos específicos de um array

/* let nomes = ['Guilherme', 'Francisco', 'João']
let sobrenome = ['Leite', 'João', 'Vieira'] */

/* console.log(nomes.length)
console.log(nomes[2]) */

// B. Modificar cada um dos elementos de um array e imprimi-los no console

// C. Adicionar elementos a um array.
// D. Extrair elementos de um array.
// E. Comparar elementos de um array com os elementos de outro.

/* let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0]) */
// var z=0;

// for (var i=20; i<50; i+=10){
//     z+=i;
// }
// console.log(z)

/* let frutasAmarelas=["Melão","Mamão","Limão"]
let [fruta1, fruta2, fruta3,]= frutasAmarelas;

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(frutasAmarelas)
 */

// const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

// console.log(notas);
// console.log(notas[3], notas[2]); // é assim que se acessa elementos específicos do array
// console.log(notas[6]);
// console.log(notas[0]);

// // alterando o valor de um elemento do array. (obs.: não é possível alterar a constante "notas", mas é possível alterar os valores dentro do array)

// notas[3] = 9.2;

// console.log(notas);

// //definir os elementos de uma array após a criação da array

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




