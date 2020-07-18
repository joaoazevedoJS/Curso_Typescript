// protected vs private

/*
  O private só é visivel no seu proprio escopo,
  ele não pode ser transmitido nem mesmo por herança

  caso queria passar um variavel privada por herança
  você vai ter que mudar private para protected.
  Assim a variavel vai continuar privada, mas além
  de ser visivel somente no seu escopo, ela pode
  ser transmitida para outra classe
*/

class Carros {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
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

class Ferrari extends Carros {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }

  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.verVelocidade())
