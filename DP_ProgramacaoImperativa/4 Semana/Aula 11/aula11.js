for (let aux=1; aux<=5; aux++ ){
    console.log(aux + " - Olá for")
}

for (let aux=5; aux>=0; aux-- ){
    console.log(aux + " - Olá for")
}

aux = 0;
while (aux<5){
    console.log(aux+"- Olá While");
    aux++;
}

aux = 0;
while(aux<5){
    if (aux==4){
        console.log("Apareceu o 4")
    }
    aux++;
}

volta = 5;
do{
    console.log("Volta número " + volta)
    volta++
}while(volta<=5);


aux = 0;
do {
    console.log("Olá While "+ aux);
    aux++;
}while( aux < 5);

// Exercício
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for (let i = 0; i <5 ; i++){
    console.log("Olá Mundo!!")
}

//2- Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

for (i=0; i<=10 ; i++ ){
    if ( i%2==1){
        console.log(i)
    }
}

//3 Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for)

for (let multiplicado = 1; multiplicado <= 10; multiplicado++){
    for (let multiplicando=1 ;multiplicando <= 10; multiplicando++){
        console.log(multiplicado+" x "+multiplicando+" = "+ (multiplicado * multiplicando))
    }
    console.log("---------------")
    }