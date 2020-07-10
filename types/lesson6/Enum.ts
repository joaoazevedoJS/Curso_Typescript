// enums

// enums são estrutura com valores pre definidos, por exemplo: segunda, terça, ...

enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul,  // 101
  Preto = 3, // 3
  Laranja, // 4
  Amarelo, // 5
  Vermelho = 100, // Não tem problema em duplicar
}

let minhaCor: Cor = Cor.Verde

console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Vermelho)
console.log(Cor[0])
console.log(Cor[3])
