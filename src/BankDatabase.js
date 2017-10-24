import Account from './Account';

// BankDatabase class that acts as an interface between account the rest of the application
export default class BankDatabase {
  constructor() {
    const firstAccount = new Account(12345, 1111, 2000, 2000);
    const secondAccount = new Account(67890, 2222, 3000, 3000);
    this.accounts = [firstAccount, secondAccount];
  }

  // Get user account number
  getAccountNumber(acNumber) {
    let result;
    for (const i in this.accounts) {
      if (this.accounts[i].getAccountNumber() === acNumber) {
        result = this.accounts[i];
      }
    }
    return result;
  }

  // Authenticate the user
  authenticateUser(acNumber, pin) {
    const account = this.getAccountNumber(acNumber);

    if (account !== undefined) {
      return account.validatePin(pin);
    }
    return false;
  }

  // Get account balance
  getBalance(accNumber) {
    const account = this.getAccountNumber(accNumber);

    if (account !== undefined) {
      return account.getBalance();
    }
    return 0;
  }

  // Withdraw a specified amount from the account
  withdraw(accNumber, amount) {
    const account = this.getAccountNumber(accNumber);

    if (account !== undefined) {
      account.debit(amount);
      return account.getBalance();
    }
    return 0;
  }
}
