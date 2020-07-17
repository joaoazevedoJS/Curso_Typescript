"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const anivarsario = new Data(11, 1, 1993);
console.log(anivarsario);
anivarsario.mes = 12;
console.log(anivarsario);
const casamento = new Data; // poso omitir os "()"
casamento.ano = 2025;
console.log(casamento);
console.log(new Data().mes);
//# sourceMappingURL=classe.js.map