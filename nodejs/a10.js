// oops concept with array
let users = [
  { name: "Aisha", age: 22 },
  { name: "Zaid", age: 19 },
  { name: "Kiran", age: 25 },
];
// Output:Zaid
console.log(users[1].name);

users.forEach((u) => {
  console.log(u.name + " is " + u.age + " years");
  // Output:
  // Aisha is 22 years
  // Zaid is 19 years
  // Kiran is 25 years
});

// create an array of objects for 4 books
// title, author, price
let books = [
  { title: "Book One", author: "Author A", price: 100 },
  { title: "Book Two", author: "J.K. Rowling", price: 150 },
  { title: "Book Three", author: "Author C", price: 200 },
  { title: "Book Four", author: "J.K. Rowling", price: 250 },
];
// print the all books written by J.K. Rowling
books.forEach((b) => {
  if (b.author === "J.K. Rowling") {
    console.log(b.title + " is written by " + b.author);
    // Output: Book Four is written by J.K. Rowling
  }
});
// print average price of all books
totalPrice = books.reduce((sum, b) => sum + b.price, 0);
let averagePrice = totalPrice / books.length;
console.log("Average price of all books:" + averagePrice);

let students = [
  { name: "Haasib", marks: 95 },
  { name: "Ashraf", marks: 65 },
  { name: "Rizwan", marks: 80 },
  { name: "Shabbar", marks: 60 },
  { name: "Shebaz", marks: 78 },
];
// filter students with marks greater than 75
let passedStudents = students.filter((s) => s.marks > 75);
console.log("Students marks greater than 75:");
passedStudents.forEach((s) => {
  console.log(s.name + " has marks: " + s.marks);
});
// Passed student names
let passedStudentNames = passedStudents.map((s) => s.name);
console.log("Passed student names:", passedStudentNames);
// use reduce to find total marks of all students
let totalMarks = students.reduce((tot, s) => tot + s.marks, 0);
console.log("Total marks of all students:", totalMarks);

let items = [
  { name: "Pen", Cost: 10 },
  { name: "NoteBook", Cost: 80 },
];
console.log(items[2]); // Output: undefined, as there is no item at index 2
console.log(items[1]); // Fixed the error, by accessing index 1 instead of 2

// create an array of 3 products
// product name, price, quantity
let products = [
  { name: "Laptop", price: 50000, quantity: 10 },
  { name: "Mobile", price: 20000, quantity: 4 },
  { name: "Tablet", price: 15000, quantity: 7 },
];
// print all products quantity < 5
products.forEach((p) => {
  if (p.quantity < 5)
    console.log(`${p.name} has quantity: ${p.quantity} / less than 5`);
});

console.log("Increased price by 10%");

let updatedProducts = products.map((product) => {
  return {
    // Increase price by 10%

    name: product.name,
    quantity: product.quantity,
    price: parseFloat((product.price * 1.1).toFixed(2)),
  };
});
console.log(updatedProducts);
// print total value of stock for each product
// price * quantity

console.log("Stock Value of each Product :");
let stockValues = updatedProducts.map((product) => {
  return {
    name: product.name,
    StockValue: parseFloat((product.price * product.quantity).toFixed(2)),
  };
});

console.log(stockValues);
