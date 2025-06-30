// array for movies
let movies = ["Sholay", "Baazigar", "Sarfarosh", "Saajan", "Lagaan"];
console.log(`Movies List : ${movies}"`);
let fl_movie = movies[0] + ", " + movies[4];
console.log(`First and Last Movie : ${fl_movie}"`);
movies.push("Deewana");
console.log(`Array with new movie : ${movies}`);
movies.shift();
console.log(`Array with first movie removed : ${movies}`);

// array shoppinglist with some grocery
let shoppingList = [
  "Rice",
  "Wheat",
  "Sugar",
  "Salt",
  "Oil",
  "Tea",
  "Coffee",
  "Spices",
  "Fruits",
  "Vegetables",
];
// print the length of shoppingList
console.log(`\nShopping Array length : ${shoppingList.length}`);
// if Milk is not available, add in the first position.
if (shoppingList.includes("Milk") == false) {
  shoppingList.unshift("Milk");
}
console.log(`Milk Added first :${shoppingList}`);

let numbers = [10, 20, 30, 40, 50, 60];
// new array using slice() that contains only the middle three numbers.
let midNumbers = numbers.slice(1, 4);
console.log(`\nOriginal Numbers : ${numbers}`);
console.log(`Middle three Numbers : ${midNumbers}`);
let frontend = ["HTML", "CSS"];
let backend = ["NodeJS", "Express"];
// let fullstack = combine frontend and backend using concat()
let fullstack = frontend.concat(backend);
console.log(`Courses : ${fullstack}`);

let colors = ["Red", "Green", "Blue", "Yellow"];
for (i = 0; i < colors.length; i++) {
  console.log(`Color ${i + 1} : ${colors[i]}`);
}
// using forof loop to print colors
for (const color of colors) {
  console.log(`Color > ${color}`);
}
console.log(`\n`);
let scores = [78, 92, 85, 60, 95];
scores.forEach((score) => {
  if (score >= 70) {
    console.log(`Score=> ${score}: Pass`);
  } else {
    console.log(`Score=> ${score}: Fail`);
  }
});
