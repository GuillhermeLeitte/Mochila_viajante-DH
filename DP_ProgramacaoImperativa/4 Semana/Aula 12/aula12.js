//em programação orientada a objetos: os OBJETOS recebem METODOS que funcionam como funções direcionadas a estes objetos.

//por exemplo: para o objeto "console" existe o metodo "log" que imprime NO CONSOLE o valor referente à expressão escrita dentro do parênteses.
// console.log(typeof console);
// console.log(typeof console.log);

// const numeros = [1, 2, 3];
// console.log(typeof numeros);
// console.log(numeros);

// //além de métodos há os atributos que retornam alguma característica ou propriedade do objeto.
// console.log(`Comprimento do array: ${numeros.length}`);

// numeros.push(4);
// numeros.push(5);

// console.log(numeros);

// console.log(`Comprimento do array: ${numeros.length}`);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//direto, utilizando-se indice (sem foreach)
// for (let i = num.length - 2; i >= 0; i -= 2) {
//     console.log(i, num[i]);
// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (i = 0; i <= (numeros.length - 1); i++) {
//     console.log(i, numeros[i]);
// }

const num = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i <= (num.length - 1); i++) {
//     console.log(i, num[i]);
// }


//METODO [forEach]
// function paraCadaElemento(element, index, fullArray) {
//     console.log(element, index, fullArray);
// } // caso não me importe com o valor de outros parâmetros, substituir por "_" (i.e.: paraCadaElemento(_, _, fullArray))

// num.forEach(paraCadaElemento); //executa esta função N vezes, sendo N = .length


