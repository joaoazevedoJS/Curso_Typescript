"use strict";
// Desafio Classes Produto
// Atributos: nome, preco e desconto
// criar o construtor
// obs 1: desconto é opcional (valor padrão 0)
// obs 2: criar dois produtos: passando dois a três params
var Product = /** @class */ (function () {
    function Product(name, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.name = name;
        this.preco = preco;
        this.desconto = desconto;
    }
    return Product;
}());
var p1 = new Product('Laptop', 2740);
console.log(p1);
var p2 = new Product('Video Game', 1870, 0.1);
console.log(p2);
//# sourceMappingURL=desafio.js.map