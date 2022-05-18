const pipoca = (tempoPipoca) => {
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

console.log(pipoca(10));
console.log(macarrao(9));
console.log(carne(46));
console.log(feijao(12));
console.log(brigadeiro(17));