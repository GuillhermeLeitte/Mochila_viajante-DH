
// 1. Escreva um programa para ler 2 valores (considere que não serão informados valores iguais e escrever    o    maior    deles.

/* function Maior (a=0, b=0){
    if (a == b) {
        console.log("Os valores são iguais")
    }

    if (a > b){
        console.log(`O ${a} é maior que ${b}`)
    } else {
        console.log(`O ${b} é maior que ${a}`)
    }

}

console.log(Maior(3,4)) */


// 2. Escreva     um     programa     para     ler     o     ano     de     nascimento     de     uma     pessoa  e escrever     uma     mensagem     que     diga     se     ela     poderá     ou     não     votar     este     ano
//     (não    é    necessário    considerar    o    mês    em    que    ela    nasceu).

/* function Votar(anoNasci, anoAtual){
    let podeVotar = anoAtual - anoNasci;
    if (podeVotar >= 16){
        console.log(`Você tem : ${podeVotar} anos, já pode votar `)
    }
};

console.log(Votar(1984,2022)) */


/* // 3. Escreva     um     programa     que     verifique     a     validade     de     uma     senha     fornecida
//     pelo     usuário.     A     senha     válida     é     o     número     1234.    Devem     ser    impressas     as
//     seguintes    mensagens:
//     ACESSO    PERMITIDO    caso    a    senha    seja    válida.
//     ACESSO    NEGADO    caso    a    senha    seja    inválida.



function entrada (Senha=0){
    if (Senha != 1234) {
        return "ACESSO NEGADO"
    } else {
        return "ACESSO PERMITIDO"
    }
};

console.log(entrada(1243))
console.log(entrada(1234)) */


/* // 4. As    maçãs     custam     R$     0,30     cada     se     forem     compradas    menos     do     que     uma
//     dúzia,     e     R$     0,25     se     forem     compradas     pelo     menos     doze.     Escreva     um
//     programa     que     leia     o     número     de     maçãs     compradas,     calcule     e     escreva     o
//     valor    total    da    compra.



function Frutas (qtdMaças){
    let preço = 0;
    if (qtdMaças >= 12){
        preço = qtdMaças * 0.25,
        console.log(`Foram ${qtdMaças} maçãs, preço total: R$ ${preço} reais. `)
    } else {
        preço = qtdMaças * 0.30,
        console.log(`Foram ${qtdMaças} maçãs, preço total: R$ ${preço} reais. `)
    };
};

console.log(Frutas(12))
console.log(Frutas(10)) */


/* // 5. Tendo     como     entrada     a     altura     e     o     sexo     (codificado     da     seguinte     forma:
//     1:feminino          2:masculino)     de     uma     pessoa,     construa     um     programa     que
//     calcule    e    imprima    seu    peso    ideal,    utilizando    as    seguintes
//     Fórmulas:
//     - para    homens:    (72.7    *    Altura)    – 58
//     - para    mulheres:    (62.1    *    Altura)    – 44.7

function pesoIdeal (sexo=0, altura=0){
    let Sexo = 0
    let Peso = 0
    
    if (sexo == 1){
        Sexo =  "feminino"
    }
    if (sexo == 2){
        Sexo = "masculino"
    }

    if (Sexo == "feminino"){
        Peso = (62.1 * altura) - 44.7,
        console.log(`Seu peso ideal é : ${Peso.toFixed(2)}`)

    }
    if (Sexo == "masculino"){
        Peso = (72.7 * altura) - 58,
        console.log(`Seu peso ideal é : ${Peso.toFixed(2)}`)

    }
};

console.log(pesoIdeal(1,1.59))
console.log(pesoIdeal(2,1.79)) */





