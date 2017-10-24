const assert = require('chai').assert;
const authenticate = require('../main').authenticate;
const balance = require('../main').balance;
const withdraw = require('../main').withdraw;

describe('authenticate', () =>{
    it('authenticate should return true', () =>{
        assert.equal(authenticate(12345, 1111), true);
    });

    it('balance should return 2000', () =>{
        assert.equal(balance(), 2000);
    });
    
    it('balance should return 1000', () =>{
        assert.equal(withdraw(), 1000);
    });
});