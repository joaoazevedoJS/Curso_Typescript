// tipo função

let oi = (person: string): string => `Hello ${person}`

let Falar: (person: string) => string
Falar = oi
// Falar = {}

console.log(Falar('oi'))

let calculo = function(obs: string) { return `1 + 1 = 2, obs: ${obs}` }

Falar = calculo
console.log(Falar('soma caraio'))
