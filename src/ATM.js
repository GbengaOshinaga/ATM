import BankDatabase from './BankDatabase';
import Transaction from './Transaction';

export default class ATM {
  authenticateUser(accNumber, pin) {
    const database = new BankDatabase();
    return database.authenticateUser(accNumber, pin);
  }

  getBalance(accNumber) {
    const transact = new Transaction(accNumber, 1, 0);
    return transact.transact();
  }

  withdraw(accNumber, amount) {
    const transact = new Transaction(accNumber, 2, amount);
    return transact.transact();
  }
}
