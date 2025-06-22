// Squaring Nos.//
console.log("");
console.log("Squaring Nos. 1 to 10");

// print row-wise//
let row2="";
let sqr=0;
for(i=1;i<=10;i++)
{
    sqr=i*i;
    row2 +=  `${sqr} `;
}
console.log(row2);
console.log("---------------------------")
console.log("");
console.log("----Odd/Even Numbers-------")

 for (let i = 1; i <= 20; i++) {
       
         if (i % 2 === 0) {
            console.log(i + ' Even');
        } else  {
            console.log(i + ' Odd');
        
        }
    }

console.log("");
console.log("----Fizz/Buzz/FizzBuzz-----")

 for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' FizzBuzz');
        } else if (i % 3 === 0) {
            console.log(i + ' Fizz');
        } else if (i % 5 === 0) {
            console.log(i + ' Buzz');
        } else {
            console.log(i);
        }
    }
