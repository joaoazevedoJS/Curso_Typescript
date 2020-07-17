"use strict";
// No tsconfig.json existe uma opção chamada "strictNullChecks": true
// que vem por padrão true, isso é uma garantia do typescript
// que o valores são obrigatorios, para poder usar null quando precisar
// você pode usar union types, ou também você colocar false no nullchecks
// "strictNullChecks": false
let altura = 12;
// altura = null
console.log(altura);
let alturaOpc = 20;
alturaOpc = null;
console.log(alturaOpc);
const contato1 = {
    nome: "Fulano",
    tel1: "9876543221",
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
// quando você declara um valor null, a variavel receber um tipo any,
// caso se a variavel for var ou let
let podeSerNulo = null; // tipo any
// const podeSerNulo // tipo null
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'Tenho x anos';
console.log(podeSerNulo);
//# sourceMappingURL=null.js.map