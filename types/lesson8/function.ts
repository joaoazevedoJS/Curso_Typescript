// funções

let meuNome: string = "João Azevedo"

function retornarMenuNome(): string {
  return meuNome
}

console.log(meuNome)

function digaOi(): void {
  console.log('oi')
}

digaOi()

function mult(numA: number, numB: number): number {
  return numA * numB
}

console.log(mult(7, 7))
