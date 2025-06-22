console.log("NodeJS Tutorial");
let fname="Basheer";
let lname="Sheikh";
let fullname=fname+ " " + lname;
console.log("Full Name :"+fullname);

console.log("");
console.log("Even Numbers :");
// print row-wise//
let row="";
// even numbers//
for(i=2;i<=100;i=i+2)
{
    row += `${i} `;
}
console.log(row);
// odd numbers//
console.log("");
console.log("Odd Numbers :");

// print row-wise//
let row1="";
for(i=1;i<=100;i=i+2)
{
    row1 += `${i} `;
}
console.log(row1);
