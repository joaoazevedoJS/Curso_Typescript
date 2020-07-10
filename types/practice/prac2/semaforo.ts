let interval: number;

enum Semaforo {
  Vermelho,
  Amarelo,
  Verde,
}

function sairDoLocal(): void {
  estrada()
}

function chegarNoLocal(): void {
  clearInterval(interval)
}

function estrada(): void {
  interval = setInterval(() => {
    const random: number = Math.floor(Math.random() * 3)

    console.log(`O sinal está ${Semaforo[random]}`)
  }, 2000)
}

sairDoLocal()
setTimeout(() => chegarNoLocal(), 70000)
