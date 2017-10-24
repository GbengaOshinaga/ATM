/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Account = __webpack_require__(3);

var _Account2 = _interopRequireDefault(_Account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BankDatabase = function () {
    function BankDatabase() {
        _classCallCheck(this, BankDatabase);

        var firstAccount = new _Account2.default(12345, 1111, 2000, 2000);
        var secondAccount = new _Account2.default(67890, 2222, 3000, 3000);
        this.accounts = [firstAccount, secondAccount];
    }

    _createClass(BankDatabase, [{
        key: 'getAccountNumber',
        value: function getAccountNumber(acNumber) {
            var result = void 0;
            for (var i in this.accounts) {
                if (this.accounts[i].getAccountNumber() === acNumber) {
                    result = this.accounts[i];
                }
            }
            return result;
        }
    }, {
        key: 'authenticateUser',
        value: function authenticateUser(acNumber, pin) {
            var account = this.getAccountNumber(acNumber);

            if (account !== undefined) {
                return account.validatePin(pin);
            } else {
                return false;
            }
        }
    }, {
        key: 'getBalance',
        value: function getBalance(accNumber) {
            var account = this.getAccountNumber(accNumber);

            if (account !== undefined) {
                return account.getBalance();
            } else {
                return 0;
            }
        }
    }, {
        key: 'withdraw',
        value: function withdraw(accNumber, amount) {
            var account = this.getAccountNumber(accNumber);

            if (account !== undefined) {
                account.debit(amount);
                return account.getBalance();
            } else {
                return 0;
            }
        }
    }]);

    return BankDatabase;
}();

exports.default = BankDatabase;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ATM = __webpack_require__(2);

var _ATM2 = _interopRequireDefault(_ATM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    authenticate: function authenticate() {
        var atm = new _ATM2.default();
        return atm.authenticateUser(12345, 1111);
    },

    balance: function balance() {
        var atm = new _ATM2.default();
        return atm.getBalance(12345);
    },

    withdraw: function withdraw() {
        var atm = new _ATM2.default();
        return atm.withdraw(12345, 1000);
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BankDatabase = __webpack_require__(0);

var _BankDatabase2 = _interopRequireDefault(_BankDatabase);

var _Transaction = __webpack_require__(4);

var _Transaction2 = _interopRequireDefault(_Transaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ATM = function () {
    function ATM() {
        _classCallCheck(this, ATM);

        var _isUserAuthenticated = new WeakMap();
        var _currentAccountNumber = new WeakMap();

        _isUserAuthenticated.set(this, false);
        _currentAccountNumber.set(this, 0);
    }

    _createClass(ATM, [{
        key: 'authenticateUser',
        value: function authenticateUser(accNumber, pin) {
            var database = new _BankDatabase2.default();
            return database.authenticateUser(accNumber, pin);
        }
    }, {
        key: 'getBalance',
        value: function getBalance(accNumber) {
            var transact = new _Transaction2.default(accNumber, 1, 0);
            return transact.transact();
        }
    }, {
        key: 'withdraw',
        value: function withdraw(accNumber, amount) {
            var transact = new _Transaction2.default(accNumber, 2, amount);
            return transact.transact();
        }
    }]);

    return ATM;
}();

exports.default = ATM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Account = function () {
    function Account(accountNumber, pin, availableBalance, totalBalance) {
        _classCallCheck(this, Account);

        this._accountNumber = new WeakMap();
        this._pin = new WeakMap();
        this._balance = new WeakMap();

        this._accountNumber.set(this, accountNumber);
        this._pin.set(this, pin);
        this._balance.set(this, availableBalance);
    }

    _createClass(Account, [{
        key: "validatePin",
        value: function validatePin(userPin) {
            return userPin === this._pin.get(this);
        }
    }, {
        key: "getBalance",
        value: function getBalance() {
            return this._balance.get(this);
        }
    }, {
        key: "debit",
        value: function debit(amount) {
            if (this._balance < amount) {
                return 0;
            } else {
                this._balance.set(this, this._balance.get(this) - amount);
            }
        }
    }, {
        key: "getAccountNumber",
        value: function getAccountNumber() {
            return this._accountNumber.get(this);
        }
    }]);

    return Account;
}();

exports.default = Account;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BankDatabase = __webpack_require__(0);

var _BankDatabase2 = _interopRequireDefault(_BankDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function () {
    function Transaction(accNumber, type, amount) {
        _classCallCheck(this, Transaction);

        this.accNumber = accNumber;
        this.type = type;
        this.amount = amount;
    }

    _createClass(Transaction, [{
        key: 'transact',
        value: function transact() {
            switch (this.type) {
                case 1:
                    var inquiry = new BalanceInquiry(this.accNumber);
                    return inquiry.transact();
                    break;
                case 2:
                    var withdraw = new Withdrawal(this.accNumber, this.amount);
                    return withdraw.transact();
                    break;
                default:
                    return undefined;
            }
        }
    }]);

    return Transaction;
}();

//Balance Inquiry class, returns account balance


exports.default = Transaction;

var BalanceInquiry = function (_Transaction) {
    _inherits(BalanceInquiry, _Transaction);

    function BalanceInquiry(accNumber) {
        _classCallCheck(this, BalanceInquiry);

        var _this = _possibleConstructorReturn(this, (BalanceInquiry.__proto__ || Object.getPrototypeOf(BalanceInquiry)).call(this, accNumber, 1, 0));

        _this.accNumber = accNumber;
        return _this;
    }

    _createClass(BalanceInquiry, [{
        key: 'transact',
        value: function transact() {
            var database = new _BankDatabase2.default();
            return database.getBalance(this.accNumber);
        }
    }]);

    return BalanceInquiry;
}(Transaction);

//Withdrawal class, debits accounts and returns account balance


var Withdrawal = function (_Transaction2) {
    _inherits(Withdrawal, _Transaction2);

    function Withdrawal(accNumber, amount) {
        _classCallCheck(this, Withdrawal);

        var _this2 = _possibleConstructorReturn(this, (Withdrawal.__proto__ || Object.getPrototypeOf(Withdrawal)).call(this, accNumber, 2, amount));

        _this2.accNumber = accNumber;
        _this2.amount = amount;
        return _this2;
    }

    _createClass(Withdrawal, [{
        key: 'transact',
        value: function transact() {
            var database = new _BankDatabase2.default();
            return database.withdraw(this.accNumber, this.amount);
        }
    }]);

    return Withdrawal;
}(Transaction);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map