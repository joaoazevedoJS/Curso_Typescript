"use strict";
// tipo função
var oi = function (person) { return "Hello " + person; };
var Falar;
Falar = oi;
// Falar = {}
console.log(Falar('oi'));
var calculo = function (obs) { return "1 + 1 = 2, obs: " + obs; };
Falar = calculo;
console.log(Falar('soma caraio'));
