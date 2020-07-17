"use strict";
/* Desafio
 *
 * Cria um objeto funcionário com:
 * - Array de strings com os nomes dos supervisores
 * - Função de bater ponto que recebe a hora (number)
 *    e retorna uma string
 *    -> Ponto normal (<= 8)
 *    -> Fora do horário (> 8)
 */
function Ponto(horario) {
    return horario <= 8 ?
        'Ponto Normal' : 'Fora do Hórario';
}
const funcionario = {
    supervisores: ['João', 'Paula', "Carlos"],
    baterPonto: Ponto
};
console.log(funcionario.baterPonto(7));
console.log(funcionario.supervisores);
//# sourceMappingURL=desafio.js.map