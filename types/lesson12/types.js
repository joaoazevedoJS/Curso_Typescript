"use strict";
function Ponto2(horario) {
    return horario <= 8 ?
        'Ponto Normal' : 'Fora do Hórario';
}
var funcionario2 = {
    supervisores: ['João', 'Pedro', "Ana"],
    baterPonto: Ponto2
};
var funcionario3 = {
    supervisores: ['João', 'Pedro', "Ana"],
    baterPonto: Ponto2
};
console.log(funcionario2.baterPonto(8));
console.log(funcionario3.baterPonto(12));
// Union types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '7';
console.log("Minha nota \u00E9 " + nota + "!");
// nota = true // caso o tipo da nota fosse any, poderia acontecer esse bug
//# sourceMappingURL=types.js.map