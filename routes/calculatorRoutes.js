

// new route for adding two numbers
const express = require("express");
const router = express.Router();
const Calculator = require("./Calculator");
const Logger = require("./Logger");

const calculatorInstance = new Calculator();

router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculatorInstance.add(number1, number2);
  res.status(200).json({ result });
});

router.get("/sub", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculatorInstance.subtract(number1, number2);
  res.status(200).json({ result });
});

router.get("/multi", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculatorInstance.multiply(number1, number2);
  res.status(200).json({ result });
});

router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = calculatorInstance.divide(number1, number2);
  res.status(200).json({ result });
});

module.exports = router;
