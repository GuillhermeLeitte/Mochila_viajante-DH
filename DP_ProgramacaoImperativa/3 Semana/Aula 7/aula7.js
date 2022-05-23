// Exercício do PG mesa de trabalho aula 7

/* console.log(!true);
console.log(!false);
/* console.log(!!false true);
 */
//console.log(!!true);
//console.log(!1); porque esse deu False?
/* console.log(1);
console.log(!!1);
console.log(!0); // porque esse deu verdadeiro
console.log(!!'');
console.log('');
console.log(!'');// porque verdadeiro?
let x = 5;

let y = 9;

console.log(x < 10 &&  x==5);
console.log(x > 9 ||  x===5);
console.log(!(x===y));
 */

/* if (true){
    console.log('Dentro do IF')
}

console.log('Fora do IF');
 */
/* if (false){
    console.log('Dentro do IF')
}

console.log('Fora do IF'); */

/* if ( 10 == "10"){
    console.log ('Dentro do IF')
} else {
    console.log ('Fora do IF')
}

if ( 10 === "10"){
    console.log ('Dentro do IF')
} else {
    console.log ('Fora do IF')
} */

function comparaValor(valor){
    if (valor >= 18){
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }

return valor
}

console.log(comparaValor(18));
console.log(comparaValor(19));
console.log(comparaValor(17));


