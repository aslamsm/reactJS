let sum = (a, b) => a + b;
let difference = (a, b) => a - b;
let product = (a, b) => a * b;
let quotient = (a, b) => {
  if (b === 0) {
    console.log("division by zero.?");
    return null;
  }
  return a / b;
};
export { sum, difference, product, quotient };
