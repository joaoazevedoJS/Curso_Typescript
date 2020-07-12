function Ponto2(horario: number): string {
  return horario <= 8 ?
    'Ponto Normal' : 'Fora do Hórario'
}

// type seria tipo um alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horario: number) => string
}

const funcionario2: Funcionario = {
  supervisores: ['João', 'Pedro', "Ana"],
  baterPonto: Ponto2
}

const funcionario3: Funcionario = {
  supervisores: ['João', 'Pedro', "Ana"],
  baterPonto: Ponto2
}

console.log(funcionario2.baterPonto(8))
console.log(funcionario3.baterPonto(12))

// Union types

let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)

nota = '7'
console.log(`Minha nota é ${nota}!`)

// nota = true // caso o tipo da nota fosse any, poderia acontecer esse bug
