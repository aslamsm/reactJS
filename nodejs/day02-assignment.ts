type Book = {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string;
};
const book1: Book = {
  title: "Programming VB.NET",
  author: "Gary Cornell",
  publishedYear: 2002,
  summary: "Comprehensive guide to VB.NET.",
};
const book2: Book = {
  title: "C# in Depth",
  author: "Jon Skeet",
  publishedYear: 2019,
};
console.log(`Book1   : ${book1.title} by ${book1.author}`);
console.log(`Summary : ${book1.summary}`);
console.log(`Book2   : ${book2.title} by ${book2.author}`);

// union
let userId: number | string;
function displayUserId(id: number | string) {
  console.log("User ID:", id);
}
userId = 101;
displayUserId(userId);

userId = "EMP_102";
displayUserId(userId);

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo(): string {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }
}
const Car1 = new Car("Toyota", "Camry", 2020);
console.log(Car1.getInfo());

class Employee {
  name: string;
  role: string;
  phone?: string;

  constructor(name: string, role: string, phone?: string) {
    this.name = name;
    this.role = role;
    this.phone = phone;
  }

  contactInfo(): void {
    if (this.phone) {
      console.log(`Name: ${this.name}, Phone: ${this.phone}`);
    } else {
      console.log(`Name: ${this.name}, Phone: N/A`);
    }
  }
}

// Example usage:
const emp1 = new Employee("Ali", "Accountant", "989812345");
const emp2 = new Employee("Shihab", "Manager");
emp1.contactInfo();
emp2.contactInfo();
