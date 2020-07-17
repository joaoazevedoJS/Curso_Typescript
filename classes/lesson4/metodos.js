"use strict";
class Product1 {
    constructor(name, preco, desconto = 0) {
        this.name = name;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `O produto ${this.name} custa R$${this.precoComDesconto()}${this.desconto !== 0 ?
            `, ${this.desconto * 100}% de desconto` :
            '.'}`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const prod1 = new Product1('Laptop', 2740);
console.log(prod1.resumo());
const prod2 = new Product1('Video Game', 1870, 0.1);
console.log(prod2.resumo());
//# sourceMappingURL=metodos.js.map