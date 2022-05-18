
/* Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". 
 */



function  pipoca (tempoPipoca) {
    if ( tempoPipoca < 10){
        return "Tempo insuficiente - Menor possível 10"
    }

    if ( tempoPipoca > 20 && tempoPipoca < 30){
        return "A comida queimou"
    }
    
    if (tempoPipoca > 30 ){
        return "Kabumm!!!"
    
    } else {
        return 'Prato pronto, bom apetiti'
    }
  
};

function macarrao(tempoMacarrao){
    if ( tempoMacarrao < 8){
        return "Tempo insuficiente - Menor possível 8"
    }

    if ( tempoMacarrao > 16 && tempoMacarrao < 24){
        return "A comida queimou"
    }
    
    if (tempoMacarrao > 24 ){
        return "Kabumm!!!"
    
    } else {
        return 'Prato pronto, bom apetiti'
    }
};

function carne(tempoCarne){
    if ( tempoCarne < 15){
        return "Tempo insuficiente - Menor possível 15"
    }

    if ( tempoCarne > 30 && tempoCarne < 45){
        return "A comida queimou"
    }
    
    if (tempoCarne > 45 ){
        return "Kabumm!!!"
    
    } else {
        return 'Prato pronto, bom apetiti'
    }
};

function feijao(tempoFeijao){
    if ( tempoFeijao < 12){
        return "Tempo insuficiente - Menor possível 12"
    }

    if ( tempoFeijao > 24 && tempoFeijao < 36){
        return "A comida queimou"
    }
    
    if (tempoFeijao > 36 ){
        return "Kabumm!!!"
    
    } else {
        return 'Prato pronto, bom apetiti'
    }
};

function brigadeiro(tempoBrigadeiro){

    if ( tempoBrigadeiro < 8){
        return "Tempo insuficiente - Menor possível 8"
    }

    if ( tempoBrigadeiro > 16 && tempoBrigadeiro < 24){
        return "A comida queimou"
    }
    
    if (tempoBrigadeiro > 24 ){
        return "Kabumm!!!"
    
    } else {
        return 'Prato pronto, bom apetiti'
    }
};

// Para chamar a função utiliza o nome do prato e após coloca o tempo
console.log(pipoca(20));

