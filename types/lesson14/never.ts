// never

// o tipo never quer dizer que a função nunca vai retornar algo,
// porque ela provavelmente vai ficar em loop inifinito ou quando
// a função termina com erro

function Loop(): never {
  while(true) {}
}

function Erro(msg: string): never {
  throw new Error(msg)
}

type Produto = {
  nome: string,
  preco: number,
  validarProduto: () => void
}

const produto: Produto = {
  nome: 'Sabão',
  preco: 1,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) {
      Erro('Precisa ter um nome')
    }

    if(this.preco <= 0) {
      Erro('Preço inválido!')
    }
  }
}

produto.validarProduto()
