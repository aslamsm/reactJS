import { sum, difference, product, quotient } from "./mathUtils.mjs";
import getArea from "./geometryUtils.mjs";
let ans1 = sum(10, 20);
console.log(`Adding 10+20 = ${ans1}`);
let ans2 = difference(20, 10);
console.log(`Difference 20-10 = ${ans2}`);
let ans3 = product(10, 20);
console.log(`Product 10*20 = ${ans3}`);
let ans4 = quotient(100, 25);
console.log(`Division 100/25 = ${ans4}`);
let ans5 = getArea(20, 5);
console.log(`getArea of 20, 5 = ${ans5}`);
