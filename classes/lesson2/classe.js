"use strict";
var Data2 = /** @class */ (function () {
    function Data2(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data2;
}());
var anivarsario2 = new Data2(11, 1, 1993);
console.log(anivarsario2);
anivarsario2.mes = 12;
console.log(anivarsario2);
var casamento2 = new Data2; // poso omitir os "()"
casamento2.ano = 2025;
console.log(casamento2);
console.log(new Data2().mes);
//# sourceMappingURL=classe.js.map