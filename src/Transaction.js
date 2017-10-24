import BankDatabase from './BankDatabase.js';

//Generalization class for all transactions
export default class Transaction{
    constructor(accNumber, type, amount){
        this.accNumber = accNumber;
        this.type = type;
        this.amount = amount;
    }

    transact(){
        switch(this.type){
            case 1:
                let inquiry = new BalanceInquiry(this.accNumber);
                return inquiry.transact();
                break;
            case 2:
                let withdraw = new Withdrawal(this.accNumber, this.amount);
                return withdraw.transact();
                break;
            default:
                return undefined;
        }
    }
}

//Balance Inquiry class, returns account balance
class BalanceInquiry extends Transaction{
    constructor(accNumber){
        super(accNumber, 1, 0);
        this.accNumber = accNumber;
    }

    transact(){
        let database = new BankDatabase();
        return database.getBalance(this.accNumber);
    }
}

//Withdrawal class, debits accounts and returns account balance
class Withdrawal extends Transaction{
    constructor(accNumber, amount){
        super(accNumber, 2, amount);
        this.accNumber = accNumber;
        this.amount = amount;
    }

    transact(){
        let database = new BankDatabase();
        return database.withdraw(this.accNumber, this.amount);
    }
}
