// Output Predictions with Datatypes

function log(message) {
    document.getElementById('output').innerHTML += message + '<br>';
}

log("10" + 5); 
log(typeof ("10" + 5));

log(10 + true);
log(typeof (10 + true));

log(false + null);
log(typeof (false + null));

log("vijay" + undefined);
log(typeof ("vijay" + undefined));
log([1, 2] + 5);
log(typeof ([1, 2] + 5));

// Task 2 – Implicit Type Casting

// 1. String + Number
let example1 = "Age: " + 25;
log(example1);
log(typeof example1);

// 2. Boolean + Number
let example2 = true + 10;
log(example2);
log(typeof example2);

// 3. Array + String
let example3 = [1, 2, 3] + " is an array";
log(example3);
log(typeof example3);

// 4. Object + Number
let example4 = {} + 5;
log(example4);
log(typeof example4);

// 5. Null + Number
let example5 = null + 7;
log(example5);
log(typeof example5);

// Convert to Number and print output with datatype

let val1 = Number("500");
log(val1);
log(typeof val1);

let val2 = Number(true);
log(val2);
log(typeof val2);

let val3 = Number(false);
log(val3);
log(typeof val3);

let val4 = Number(null);
log(val4);
log(typeof val4);

let val5 = Number("abc");
log(val5);
log(typeof val5);

let val6 = Number([100]);
log(val6);
log(typeof val6);

// Check Boolean values

let values = [
    "",
    "javascript",
    0,
    1,
    null,
    undefined,
    [],
    {}
];

values.forEach(value => {
    log(value + " → " + Boolean(value) + " | Type: " + typeof value);
});

let mark = 45;

if (mark > 35) {
    log("Student passed with mark: " + mark);
} else {
    log("Student failed with mark: " + mark);
}

let age = 20;
log(age >= 18 ? "Eligible" : "Not Eligible");

// New test case
log(true + true + " | " + ("5" - 2) + " | " + ("5" + 2) + " | " + (null + 1) + " | " + (undefined + 1) + " | " + Boolean(" ") + " | " + Number(true));

let greatest;

// Find greatest among 3 numbers

let a = 50;
let b = 80;
let c = 30;

if (a > b && a > c) {
    log("Greatest number is: " + a);
} 
else if (b > a && b > c) {
    log("Greatest number is: " + b);
} 
else {
    log("Greatest number is: " + c);
}

let light = "red";

switch (light) {
  case "red":
    log("Stop");
    break;

  case "yellow":
    log("Ready");
    break;

  case "green":
    log("Go");
    break;

  default:
    log("Invalid signal");
}
// Task 10 – Session Finder

let hour = 14;

if (hour >= 1 && hour <= 12) {
    log("Morning");
} 
else if (hour >= 13 && hour <= 15) {
        log("Afternoon");
} 
else if (hour >= 16 && hour <= 19) {
    log("Evening");
} 
else if (hour >= 20 && hour <= 24) {
    log("Night");
} 
else {
    log("Invalid hour");
}
console.log(true + true, " | ", "5" - 2, " | ", "5" + 2, " | ", null + 1, " | ", undefined + 1, " | ", Boolean(" "), " | ", Number(true));