var should = require('should');
var calc = require('./calculator');

calc.AddTwoNumbers(5,2);

describe('Calculator', function(){
    describe('when used synchronously', function(){
        it('should add two numbers correctly', function(){
            calc.AddTwoNumbers(2, 2).should.equal(4);
        });
        it('should not work if it is not a number', function(){
            calc.AddTwoNumbers(2,'a').should.not.equal(4);
        });
        it('throws', function(){
            calc.AddTwoNumbers(2,2).throws;
        });
    })
});
