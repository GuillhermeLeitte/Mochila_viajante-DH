/*let objeto = {
    nome: 'Rodrigo',
    profissao: 'Analista de sistema',
    exibirNome: function() {
        return `${this.nome} ${this.sobrenome}`;
    },
    sobrenome: 'Sarri',
    chave: {
        teste: function() {

        }
    }
}
console.log(objeto.exibirNome());*/


class Aluno {
    constructor(itens) {
        this.nome = itens.nome;

        if (itens.sobrenome) {
            this.sobrenome = itens.sobrenome;
        }

        this.nota;
    }

    exibirNome() {
        return this.nome;
    }

    exibirNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }

    calcularMedia() {
        this.nota = 9;

        return this.nota;
    }

    exibirNomeENota() {
        console.log(`Olá ${this.exibirNome()} sua nota foi: ${this.calcularMedia()}`);
    }
}

const ana = new Aluno({nome: 'Ana'});
ana.exibirNomeENota();