class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  calculateTotalValue() {
    return this.price * this.quantity;
  }
  applyDiscount(discountPercentage) {
    this.price -= (this.price * discountPercentage) / 100;
  }
  restock(newQuantity) {
    this.quantity += newQuantity;
  }
  isOutOfStock() {
    return this.quantity <= 0;
  }
  displayProductDetails() {
    return `Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
  }
}
const product1 = new Product("Laptop", 900, 5);
console.log(product1.displayProductDetails());
console.log("***********************************************");
console.log(`Calculated Value : ${product1.calculateTotalValue()}`); // Output: 4500
product1.applyDiscount(10);
console.log(`Price After Discount : ${product1.price}`); // Output: 810
product1.restock(10);
console.log(`Quantity : ${product1.quantity} ( Increased 10 )`); // Output: 15
console.log(`Out of Stock ? : ${product1.isOutOfStock()}`); // Output: false
product1.restock(-15);
console.log(`Quantity : ${product1.quantity} ( Decreased 15 )`); // Output: 0
console.log(`Out of Stock : ${product1.isOutOfStock()}`); // Output: true
console.log(product1.displayProductDetails());
console.log("***********************************************");
