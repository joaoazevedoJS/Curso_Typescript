// Atributos e métodos estáticos

class Matematica {
  static PI: number = 3.1415

  static areaCirc(raio: number): number {
    return this.PI * raio * raio
  }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))
