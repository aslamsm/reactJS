// trim / toUpperCase / concat
let firstName = "  Ali  ";
let lastName = "Khan";
firstName = firstName.trim();
lastName = lastName.trim();
let fullName = firstName.concat(" ", lastName).toUpperCase();
console.log("Full Name:", fullName);

// Extract username from email.
let email = "student@example.com";
let splitarray = email.split("@");
let username = splitarray[0];
console.log("Username:", username);

//Count the number of words in a sentence
let sentence = "JavaScript is awesome and powerful";
let wordsarray = sentence.split(" ");
console.log("Word Count:", wordsarray.length);

//Check if the letter is a vowel (a, e, i, o, u – case-insensitive)
let letter = "E";
let vowels = "aeiou";
chr = letter.toLowerCase();
if (vowels.includes(chr)) {
  console.log(letter, "is a vowel");
} else {
  console.log(letter, "is not a vowel");
}

//Replace "JavaScript" with "Python"
let msg = "I love JavaScript";
msg = msg.replace("JavaScript", "Python");
console.log("Updated Message:", msg);

// convert the first letter to uppercase
let word = "hello";
let firstLetter = word.charAt(0).toUpperCase();
let capsWord = firstLetter + word.slice(1);
console.log("Capitalized Word:", capsWord);

//Reverse the string using string/array methods
let name = "Aisha";
let reversedName = name.split("").reverse().join("");
console.log("Reversed Name:", reversedName);
