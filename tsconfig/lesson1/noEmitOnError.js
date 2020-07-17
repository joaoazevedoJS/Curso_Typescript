"use strict";
// "noEmitOnError": true, // ele não vai compilar caso tenha um erro no código
let canal = "Gaveta";
let inscritos = 610234;
// canal = inscritos
console.log(`Canal ${canal}`);
// remover o erro "Cannot redeclare block-scoped variable"
// let nome: string = 'João'
(() => {
    let nome = "João Azevedo";
    console.log(`My name is ${nome}`);
})();
//# sourceMappingURL=noEmitOnError.js.map