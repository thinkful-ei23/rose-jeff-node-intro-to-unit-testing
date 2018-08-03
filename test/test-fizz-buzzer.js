'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer function
describe('fizzBuzzer', function() {

  // test for mulitples of 15
  it('should return fizz-buzz for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  it('should return fizz for multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

  it('should return buzz for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  it('should return number if not a multiple of 2 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  }); 

  it('should raise error if input is not a number', function() {
    // range of bad inputs where input is not a number
    const badInputs = [true, false, 'dog', function() {} [1, 2, 3]];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});   