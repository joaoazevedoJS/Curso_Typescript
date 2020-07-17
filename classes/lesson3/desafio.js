"use strict";
// Desafio Classes Produto
// Atributos: nome, preco e desconto
// criar o construtor
// obs 1: desconto é opcional (valor padrão 0)
// obs 2: criar dois produtos: passando dois a três params
class Product {
    constructor(name, preco, desconto = 0) {
        this.name = name;
        this.preco = preco;
        this.desconto = desconto;
    }
}
const p1 = new Product('Laptop', 2740);
console.log(p1);
const p2 = new Product('Video Game', 1870, 0.1);
console.log(p2);
//# sourceMappingURL=desafio.js.map