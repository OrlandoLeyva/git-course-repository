console.log("secondModule");

function sum(num1, num2) {
  return num1 + num2;
}

function res(num1, num2) {
  return num1 - num2;
}

console.log('process end')

module.exports = sum;

//working on secondModule to send a pull request
