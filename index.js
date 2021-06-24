class BankAccount {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.transactions = [];
  }
  deposit(money) {
    this.transactions.push(money);
  }
  withdraw(money) {
    this.transactions.push(-money);
  }
  getBalance() {

    const sum = this.transactions.reduce((acc, number) => {
      return acc + number;
    }, 0);

    return sum;
  }

}
module.exports = BankAccount;