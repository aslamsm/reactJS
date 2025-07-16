enum PaymentStatus {
  Pending,
  Completed,
  Failed,
}
let status1: PaymentStatus = PaymentStatus.Completed;
console.log(`Payment Status: ${status1} (${PaymentStatus[status1]})`); // prints the value/name

let location1: [number, number] = [12.97, 77.59];
console.log(`Latitude: ${location1[0]}, Longitude: ${location1[1]}`);

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string;
}
const book1: Book = {
  title: "TypeScript Basics",
  author: "Jane Doe",
  publishedYear: 2022,
  summary: "An introduction to TypeScript",
};

const book2: Book = {
  title: "NodeJS in Action",
  author: "John Smith",
  publishedYear: 2021,
};

function printBookDetails(book: Book): void {
  console.log(`Book: ${book.title} by ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);
  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}
printBookDetails(book1);
printBookDetails(book2);

type Customer = {
  name: string;
  email: string;
};
type BillingDetails = {
  cardNumber: string;
  expiryDate: string;
};
type Bill_Customer = Customer & BillingDetails;
const Customer1: Bill_Customer = {
  name: "Asnan",
  email: "asnan@xyzco.com",
  cardNumber: "1234-5678-8765-4321",
  expiryDate: "12/25",
};

function maskcard(): string {
  let mstar: string = "";
  for (let i: number = 0; i < Customer1.cardNumber.length - 4; i++) {
    if (Customer1.cardNumber[i] === "-") {
      mstar += " ";
    } else mstar += "*";
  }
  return mstar;
}
let mskcard: string = maskcard();
console.log("\nBilling Customer Details:");
console.log(`Name: ${Customer1.name}`);
console.log(`Email: ${Customer1.email}`);
console.log(`Card Number: ${mskcard} ${Customer1.cardNumber.slice(-4)}`);
console.log(`Expiry Date: ${Customer1.expiryDate}`);
console.log();
