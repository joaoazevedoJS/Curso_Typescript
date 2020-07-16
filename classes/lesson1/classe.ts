class Data {
  // publicos
  dia: number
  public mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const anivarsario = new Data(11, 1, 1993)
console.log(anivarsario)
anivarsario.mes = 12
console.log(anivarsario)

const casamento = new Data // poso omitir os "()"
casamento.ano = 2025
console.log(casamento)
console.log(new Data().mes)
