class Carro {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  private alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValidade = novaVelocidade >= 0
      && novaVelocidade <= this.velocidadeMaxima

    if(velocidadeValidade) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }

  public verVelocidade(): string {
    return `${this.velocidadeAtual}Km/h`
  }


}

const carro1 = new Carro('BMW', 'V4', 250)

// hack para preecher um array rapidao
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.verVelocidade())

Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.verVelocidade())
