"use strict";
class Data2 {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const anivarsario2 = new Data2(11, 1, 1993);
console.log(anivarsario2);
anivarsario2.mes = 12;
console.log(anivarsario2);
const casamento2 = new Data2; // poso omitir os "()"
casamento2.ano = 2025;
console.log(casamento2);
console.log(new Data2().mes);
//# sourceMappingURL=classe.js.map