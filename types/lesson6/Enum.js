"use strict";
// enums
// enums são estrutura com valores pre definidos, por exemplo: segunda, terça, ...
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Preto"] = 3] = "Preto";
    Cor[Cor["Laranja"] = 4] = "Laranja";
    Cor[Cor["Amarelo"] = 5] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Vermelho);
console.log(Cor[0]);
console.log(Cor[3]);
//# sourceMappingURL=Enum.js.map