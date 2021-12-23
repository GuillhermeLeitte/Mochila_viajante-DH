function FizzBuzz(num1,num2){
    for (let i=1; i<=100; i++){
        
        if (multiplo(i,num1) && multiplo(i,num2)){
            console.log(`${i} é multiplo de ${num1} e de ${num2} - FizzBuzz`);
        }
        else if (multiplo(i, num1)){
            console.log(`${i} é multiplo de ${num1} - Fizz`);
        }
        else if (multiplo(i,num2)){
            console.log(`${i} é multiplo de ${num2} - Buzz`);
        }
    }
}

const multiplo = (n1, n2) => n1%n2 == 0?true:false;
FizzBuzz(2,1);