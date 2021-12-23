// callback

const msg = (texto) => texto;

function msgCompleta(texto) {
    return `O valor total da soma é de ${texto}`;
}

const soma = (valorA, valorB, callback) => {
    const total = valorA + valorB;
    return callback(total);
}

let teste1 = soma(5, 5, msg);
let teste2 = soma(5, 5, msgCompleta);

console.log(teste1);
console.log(teste2);


// recursividade
const potencia = (base, expoente) => {

    if (expoente === 0) {
        return 1;
    } else {
        console.log(base * potencia(base, expoente -1));
        return base * potencia(base, expoente -1);
    }

}

