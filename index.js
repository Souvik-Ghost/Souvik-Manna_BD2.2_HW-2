let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//1
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
    return true;
  }
}
function filterPrimesNumbers(num){
  return isPrime(num);
}
app.get("/prime-numbers", (req, res) => {
  let result = numbers1.filter((num) => filterPrimesNumbers(num));
  res.json(result);
});
//prime-numbers

//2
let numbers2 = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterPossitiveNumbers(num){
  return num > 0;
}
app.get("/positive-numbers", (req, res) => {
  let result = numbers2.filter((num) => filterPossitiveNumbers(num));
  res.json(result);
});
//positive-numbers

//3
let numbers3 = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function filterNegativeNumbers(num){
  return num < 0;
}
app.get('/negative-numbers', (req, res) => {
  let result = numbers3.filter(num => filterNegativeNumbers(num));
  res.json(result);
});
//negative-numbers

//4
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterOddNumbers(num){
  return num % 2 !==0;
}
app.get('/odd-numbers', (req, res) => {
  let result = numbers4.filter(num => filterOddNumbers(num));
  res.json(result);
});
//odd-numbers

//5
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function filterNumbersGreaterThan(num, value){
  return num > value;
}
app.get('/numbers-greater-than', (req, res) => {
  let value = parseFloat(req.query.value);
  let result = numbers5.filter(num => filterNumbersGreaterThan(num, value));
  res.json(result);
});
//numbers-greater-than?value=5

//6
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterNumbersLessThan(num, value){
  return num < value;
}
app.get('/numbers-less-than', (req, res) => {
  let value = parseFloat(req.query.value);
  let result = numbers6.filter(num => filterNumbersLessThan(num, value));
  res.json(result);
});
//numbers-less-than?value=5