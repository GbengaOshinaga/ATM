export default class Account{
    constructor(accountNumber, pin, availableBalance, totalBalance){
        //Initialize attributes with WeakMap to encapsulate the data
        this._accountNumber = new WeakMap();
        this._pin = new WeakMap();
        this._balance = new WeakMap();

        this._accountNumber.set(this, accountNumber);
        this._pin.set(this, pin);
        this._balance.set(this, availableBalance);
    }

    //Validate user pin
    validatePin(userPin){
        return userPin === this._pin.get(this);
    }

    //Get account balance
    getBalance(){
        return this._balance.get(this);
    }
    
    //Debit user account
    debit(amount){
        if(this._balance < amount){
            return 0;
        }else{
            this._balance.set(this, this._balance.get(this) - amount);
        }
    }

    //Get account number
    getAccountNumber(){
        return this._accountNumber.get(this);
    }
}