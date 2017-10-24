import ATM from './src/ATM.js';

module.exports = {
  authenticate: () => {
    const atm = new ATM();
    return atm.authenticateUser(12345, 1111);
  },

  balance: () => {
    const atm = new ATM();
    return atm.getBalance(12345);
  },

  withdraw: () => {
    const atm = new ATM();
    return atm.withdraw(12345, 1000);
  },
};
