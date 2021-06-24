const BankAccount = require("./index")

describe("BankAccount", () => {
    let ali
    beforeEach(() => { 
         ali = new BankAccount("ali", "agaoglu")
     });
    it("Should create a new customer object", () => {
        expect(ali).toBeInstanceOf(Object)
    })

    it("creates an object with the given name and surname properties", () => {
        expect(ali).toEqual({
            name: "ali",
            surname: "agaoglu",
            transactions: []
        });
    })
    it("checks total money in bank account", () => {
        ali.deposit(20)
        expect(ali.transactions).toEqual([20])
    })

    it("check to reduce correct amount of money", () => {
        ali.withdraw(10)
        expect(ali.transactions).toEqual([-10])
    })

    it("compute total balance", () => {
        ali.deposit(50)
        ali.withdraw(20)
        ali.deposit(100)
        expect(ali.getBalance()).toBe(130);
    })
})