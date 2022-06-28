// Micro desafio - Passo 7

let Aluno = require("./aluno");

const Estudantes = [];
Estudantes.push(
    new Aluno ("Guilherme", 4, [5, 9, 10]),
    new Aluno ("Felipe", 2, [6, 4, 8]),
    new Aluno ("Roberto", 1, [8, 9, 8])
);

module.exports = Estudantes;