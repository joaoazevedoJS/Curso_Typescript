"use strict";
let interval;
var Semaforo;
(function (Semaforo) {
    Semaforo[Semaforo["Vermelho"] = 0] = "Vermelho";
    Semaforo[Semaforo["Amarelo"] = 1] = "Amarelo";
    Semaforo[Semaforo["Verde"] = 2] = "Verde";
})(Semaforo || (Semaforo = {}));
function sairDoLocal() {
    estrada();
}
function chegarNoLocal() {
    clearInterval(interval);
}
function estrada() {
    interval = setInterval(() => {
        const random = Math.floor(Math.random() * 3);
        console.log(`O sinal está ${Semaforo[random]}`);
    }, 2000);
}
sairDoLocal();
setTimeout(() => chegarNoLocal(), 70000);
//# sourceMappingURL=semaforo.js.map