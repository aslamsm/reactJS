// Print Name,Age, isStudent ?
let myName: string = "Hussain";
let myAge: number = 22;
let student: boolean = true;
let iStudent: string = "";
student === true ? (iStudent = "yes") : (iStudent = "no");
console.log(`Name: ${myName},  Age: ${myAge},  Student?: ${iStudent}`);

// greet User
function greetUser(name: string): string {
  return `Hello! ${name}`;
}
console.log(greetUser("Basheer"));

// print colors
let colors: string[] = ["Red", "Blue", "Green"];
colors.forEach((color) => {
  console.log(color);
});

// print factorial
function factorial(num: number): number {
  if (num < 0) {
    console.log("Input must be positive number !");
    return 0;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  let factno = 1;
  for (let i = 2; i <= num; i++) {
    factno *= i;
  }
  return factno;
}
let fact = factorial(5);
console.log(`Factorial: ${fact}`);

// Number is Even/Odd ( print true/false )
function isEven(num: number): boolean {
  return num % 2 === 0;
}
let numEven: boolean = isEven(4);
console.log(`Number is Even ? : ${numEven}`);

// sum of array
function sumOfArray(numbers: number[]): number {
  return numbers.reduce(function (tot, curr_num) {
    return tot + curr_num;
  }, 0);
}

let result = sumOfArray([1, 2, 3, 4, 5]);
console.log("Sum:", result);
