import ATM from './src/ATM.js';

module.exports = {
    authenticate: ()=>{
        let atm = new ATM();
        return atm.authenticateUser(12345, 1111);    
    },

    balance: ()=>{
        let atm = new ATM();
        return atm.getBalance(12345);
    },

    withdraw: ()=>{
        let atm = new ATM();
        return atm.withdraw(12345, 1000);
    }
}
