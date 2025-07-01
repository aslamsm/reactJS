// Factorial using array
let numbers = [3, 4, 5, 6, 7];
let factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  let output = 1;
  for (let i = 2; i <= n; i++) output *= i;
  return output;
};

console.log("\nFactorial Numbers :");
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  console.log(`Factorial of ${num} is ${factorial(num)}`);
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// From the last index to the first - Reverse
console.log("\nNames in reverse order:");
for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

// No. greater than 5.
const nos = [3, 6, 8, 2, 9];
console.log("\nNumbers greater than 5:");
for (let i = 0; i < nos.length; i++) {
  if (nos[i] > 5) {
    console.log(`${nos[i]}`);
  }
}

const nums = [2, 4, 7, 9, 11];

// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is prime
  if (num % 2 === 0) return false; // Even numbers divs. by 2 are not prime
  // Check divisible
  for (let i = 3; i <= num / 2; i = i + 2) {
    if (num % i === 0) return false;
  }
  return true;
};
// print Number is prime or not.
console.log("\nPrint a Number is Prime or Not :");
for (let i = 0; i < nums.length; i++) {
  const no = nums[i];
  console.log(`${no} is ${isPrime(no) ? "prime" : "not prime"}`);
}
