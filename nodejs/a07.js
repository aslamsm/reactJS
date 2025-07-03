const numbers = [4, 7, 12, 15, 9];
const modifiedNumbers = numbers.map((num) => {
  return num % 2 === 0 ? num * 2 : num + 1;
});
console.log(`Modified Numbers: ${modifiedNumbers}\n`);

const numbs = [12, 5, 8, 130, 44, 3, 25, 60, 7, 90];
const evenNumbers = numbs.filter((num) => num % 2 === 0);
console.log(`Even Numbers: ${evenNumbers}`);
