const raining = false;
const cold = true;
if (raining) {
  console.log("Don't forget your umbrella!");
}
if (cold) {
    console.log("Make sure you pick out a scarf!");
  }
  console.log("Now you're ready to go outside!");

  const temperature = 16;

  if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
  } else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
  } else {
    console.log("Short sleeves are fine.");
  }

  console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");

}
if (!raining) {
  console.log("Leave your umbrella at home!");

}
/* const age = < 13 elementary school
age = >= 13 && <= 18 secndary school
else lighthouse labs */

const whichSchool = function () {
if (age <= 12) {
  whichSchool = "elementary school";
} else if (age > 12 && age < 19) {
  whichSchool = "secondary school";
} else {
  whichScool = "lighthouse labs";
} }
console.log(whichSchool);