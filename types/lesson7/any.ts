// Any

// e bom tentar evitar o tipo any, pois se não voltarimos para
// o mesmo cenario do javascript

let carro: any = "BMW"
console.log(carro)

carro = { marca: "BMW", ano: 2019 }
console.log(carro)
