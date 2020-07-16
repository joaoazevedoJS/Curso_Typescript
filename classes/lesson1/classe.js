"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var anivarsario = new Data(11, 1, 1993);
console.log(anivarsario);
anivarsario.mes = 12;
console.log(anivarsario);
var casamento = new Data; // poso omitir os "()"
casamento.ano = 2025;
console.log(casamento);
console.log(new Data().mes);
//# sourceMappingURL=classe.js.map