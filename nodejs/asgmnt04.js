// factorial of number //
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
  console.log(`Factorial of ${i} is ${factorial}`);
}
// Fibonacci series //
let n = 10; // Number of terms Fibonacci series
let a = 0,
  b = 1,
  nxt;
console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
  console.log(a);
  nxt = a + b;
  a = b;
  b = nxt;
}
