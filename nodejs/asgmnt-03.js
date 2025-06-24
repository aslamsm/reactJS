let signal = "yellow";

if (signal === "red") {
  console.log("Stop");
} else if (signal === "yellow") {
  console.log("Get Ready");
} else if (signal === "green") {
  console.log("Go");
} else {
  console.log("Invalid signal");
}

let dayNumber = 4;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast off!");
