function adicionar (num1,num2){
    return num1 + num2
}

function subtrair (num1,num2){
    return num1 - num2
}


function multiplicacao (num1,num2){
    return num1 * num2
}

function divisao (num1,num2){
    return num1 / num2
}


console.log("Testando resultado das funções")


console.log(adicionar(2,2))
console.log(subtrair(4,2))

console.log(multiplicacao(5,10));

console.log(divisao(10,5))

console.log(divisao(0,0))


function quadradoDoNumero(num){
    return multiplicacao(num,num)
}

console.log(5)

function mediaDeTresNumeros(num1,num2,num3){
    let soma = num1 + num2 + num3
    return divisao(soma,3)
}

console.log(mediaDeTresNumeros(9,9,9))


function calculaPorcentagem (num, porc){
let totalPorcentagem = multiplicacao(num,(porc/100))
return totalPorcentagem+"%"
}

console.log(calculaPorcentagem(50,10))


function geradorDePorcentagem(num1,num2){
    let cem = num2/100
    return num1 / cem

}

console.log(geradorDePorcentagem(2,200))