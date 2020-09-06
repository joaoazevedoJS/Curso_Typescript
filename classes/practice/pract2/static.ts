class Calc {
  static num1: number;
  static num2: number;

  static somar() {
    return this.num1 + this.num2
  }
}

Calc.num1 = 10
Calc.num2 = 10
console.log(Calc.somar())
