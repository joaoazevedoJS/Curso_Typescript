"use strict";
// never
// o tipo never quer dizer que a função nunca vai retornar algo,
// porque ela provavelmente vai ficar em loop inifinito ou quando
// a função termina com erro
function Loop() {
    while (true) { }
}
function Erro(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            Erro('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            Erro('Preço inválido!');
        }
    }
};
produto.validarProduto();
//# sourceMappingURL=never.js.map