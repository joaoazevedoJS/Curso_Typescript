// Objeto

let usuario: { nome: string, idade: number } = {
  nome: "João",
  idade: 20,
}

console.log(usuario)

// error, usuario precisa ter nome e idade
// usuario = {}

// usuario = {
//   name: "Maria",
//   age: 27
// }

usuario = {
  idade: 27,
  nome: "Maria",
}

console.log(usuario)
