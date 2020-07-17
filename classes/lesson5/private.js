"use strict";
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValidade = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValidade) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
    verVelocidade() {
        return `${this.velocidadeAtual}Km/h`;
    }
}
const carro1 = new Carro('BMW', 'V4', 250);
// hack para preecher um array rapidao
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.verVelocidade());
Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.verVelocidade());
//# sourceMappingURL=private.js.map