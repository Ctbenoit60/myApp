const Logger = require("../libraries/logger");

class Calculator {
    constructor() {
      this.id = Math.floor(Math.random() * 1000); // Use a random number as the ID
    }
  
    add(num1, num2) {
      const result = num1 + num2;
      this.log(`Addition: ${num1} + ${num2} = ${result}`);
      return result;
    }
  
    subtract(num1, num2) {
      const result = num1 - num2;
      this.log(`Subtraction: ${num1} - ${num2} = ${result}`);
      return result;
    }
  
    multiply(num1, num2) {
      const result = num1 * num2;
      this.log(`Multiplication: ${num1} * ${num2} = ${result}`);
      return result;
    }
  
    divide(num1, num2) {
      const result = num1 / num2;
      this.log(`Division: ${num1} / ${num2} = ${result}`);
      return result;
    }
  
    log(message) {
      Logger.log(`${this.id}: ${message}`);
    }
  }
  
  module.exports = Calculator;
  