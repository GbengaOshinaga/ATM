import BankDatabase from './BankDatabase.js';
import Transaction from './Transaction.js';

export default class ATM{
    constructor(){
        let _isUserAuthenticated = new WeakMap();
        let _currentAccountNumber = new WeakMap();

        _isUserAuthenticated.set(this, false);
        _currentAccountNumber.set(this, 0);
    }

    authenticateUser(accNumber, pin){
        let database = new BankDatabase();
        return database.authenticateUser(accNumber, pin);
    }

    getBalance(accNumber){
        let transact = new Transaction(accNumber, 1, 0);
        return transact.transact();
    }

    withdraw(accNumber, amount){
        let transact = new Transaction(accNumber, 2, amount);
        return transact.transact();
    }
}