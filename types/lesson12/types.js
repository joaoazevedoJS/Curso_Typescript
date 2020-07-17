"use strict";
function Ponto2(horario) {
    return horario <= 8 ?
        'Ponto Normal' : 'Fora do Hórario';
}
const funcionario2 = {
    supervisores: ['João', 'Pedro', "Ana"],
    baterPonto: Ponto2
};
const funcionario3 = {
    supervisores: ['João', 'Pedro', "Ana"],
    baterPonto: Ponto2
};
console.log(funcionario2.baterPonto(8));
console.log(funcionario3.baterPonto(12));
// Union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '7';
console.log(`Minha nota é ${nota}!`);
// nota = true // caso o tipo da nota fosse any, poderia acontecer esse bug
//# sourceMappingURL=types.js.map