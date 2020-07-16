"use strict";
var Product1 = /** @class */ (function () {
    function Product1(name, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.name = name;
        this.preco = preco;
        this.desconto = desconto;
    }
    Product1.prototype.resumo = function () {
        return "O produto " + this.name + " custa R$" + this.precoComDesconto() + (this.desconto !== 0 ?
            ", " + this.desconto * 100 + "% de desconto" :
            '.');
    };
    Product1.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    return Product1;
}());
var prod1 = new Product1('Laptop', 2740);
console.log(prod1.resumo());
var prod2 = new Product1('Video Game', 1870, 0.1);
console.log(prod2.resumo());
//# sourceMappingURL=metodos.js.map