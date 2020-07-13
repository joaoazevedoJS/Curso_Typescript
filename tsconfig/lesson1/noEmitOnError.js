"use strict";
// "noEmitOnError": true, // ele não vai compilar caso tenha um erro no código
var canal = "Gaveta";
var inscritos = 610234;
// canal = inscritos
console.log("Canal " + canal);
// remover o erro "Cannot redeclare block-scoped variable"
// let nome: string = 'João'
(function () {
    var nome = "João Azevedo";
    console.log("My name is " + nome);
})();
//# sourceMappingURL=noEmitOnError.js.map