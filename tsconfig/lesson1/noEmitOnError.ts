// "noEmitOnError": true, // ele não vai compilar caso tenha um erro no código

let canal: string = "Gaveta"
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal ${canal}`);

// remover o erro "Cannot redeclare block-scoped variable"
// let nome: string = 'João'

(() => {
  let nome: string = "João Azevedo"
  console.log(`My name is ${nome}`)
})()
