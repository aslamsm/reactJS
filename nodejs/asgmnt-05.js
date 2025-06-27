// function to check Area of rectangle //
function calculateArea(length, width) {
  return length * width;
}
let area = calculateArea(5, 8);
console.log(`Area of rectangle is : ${area}\n`);

// function to check even/odd //
function checkEvenOdd(no) {
  let msg = no % 2 === 0 ? `No. ${no} is Even` : `No. ${no} is Odd\n`;
  console.log(msg);
}
checkEvenOdd(4);
checkEvenOdd(7);

// function to count Vowels //
function countVowels(ovstr) {
  let count = 0;
  let ch = "";

  for (const chr of ovstr) {
    ch = chr.toLowerCase();
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    }
  }
  console.log(`total vowels in [${ovstr}] : ${count}`);
}
countVowels("reactjs");
countVowels("banana");

// function to find Max number //
function finMax(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`Max of ${a}, ${b}, ${c} is : ${a}`);
  } else if (b >= a && b >= c) {
    console.log(`Max of ${a}, ${b}, ${c} is : ${b}`);
  } else {
    console.log(`Max of ${a}, ${b}, ${c} is : ${c}`);
  }
}
finMax(12, 5, 20);

// function to print pattern //
function printPattern(chrs, no) {
  for (i = 1; i <= no; i++) {
    let prn = "";
    for (j = 0; j < i; j++) {
      prn = prn + `${chrs}`;
    }
    console.log(`${prn}`);
  }
}
printPattern("*", 9);
