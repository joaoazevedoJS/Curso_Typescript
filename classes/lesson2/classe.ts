class Data2 {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const anivarsario2 = new Data2(11, 1, 1993)
console.log(anivarsario2)
anivarsario2.mes = 12
console.log(anivarsario2)

const casamento2 = new Data2 // poso omitir os "()"
casamento2.ano = 2025
console.log(casamento2)
console.log(new Data2().mes)
