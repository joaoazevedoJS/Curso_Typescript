"use strict";
class MyBank {
    constructor() {
        this.bankMoney = 20000;
        this.userMoney = 0;
    }
    bankAction(action, money) {
        let calc = money;
        if (action === '-') {
            calc = 0 - money;
        }
        this.bankMoney += calc;
        return (this.userMoney += calc);
    }
    deposit(money) {
        return `Foi depositado R$${money}, agora sua conta está com R$${this.bankAction('+', money)}`;
    }
    withdraw(money) {
        if (this.userMoney - money < 0)
            return `Sem dinheiro para sacar. ${this.myMoney()}`;
        return `Você sacou R$${money}, agora sua conta está com R$${this.bankAction('-', money)}`;
    }
    myMoney() {
        return `Seu saldo é de R$${this.userMoney}`;
    }
}
const joao = new MyBank();
console.log(joao.deposit(200));
console.log(joao.deposit(20));
console.log(joao.withdraw(170));
console.log(joao.withdraw(170));
console.log(joao.withdraw(10));
console.log(joao.myMoney());
class PayPal extends MyBank {
    deposit(money) {
        return `Foi depositado R$${money}, cada deposito você ganha R$0.50, agora sua conta está com R$${this.bankAction('+', money + 0.50)}`;
    }
}
const Maria = new PayPal();
console.log(Maria.deposit(100));
console.log(Maria.deposit(120));
console.log(Maria.withdraw(70));
console.log(Maria.myMoney());
//# sourceMappingURL=protected.js.map