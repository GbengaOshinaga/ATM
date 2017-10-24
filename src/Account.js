export default class Account {
  constructor(accountNumber, pin, availableBalance) {
    // Initialize attributes with WeakMap to encapsulate the data
    this.accountNumber = new WeakMap();
    this.pin = new WeakMap();
    this.balance = new WeakMap();

    // Initialize attributes with parameters
    this.accountNumber.set(this, accountNumber);
    this.pin.set(this, pin);
    this.balance.set(this, availableBalance);
  }

  // Validate user pin
  validatePin(userPin) {
    return userPin === this.pin.get(this);
  }

  // Get account balance
  getBalance() {
    return this.balance.get(this);
  }

  // Debit user account
  debit(amount) {
    this.balance.set(this, this.balance.get(this) - amount);
  }

  // Get account number
  getAccountNumber() {
    return this.accountNumber.get(this);
  }
}
