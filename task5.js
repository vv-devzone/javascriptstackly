let name = prompt("Enter your name:");
let department = prompt("Enter your department:");
let age = prompt("Enter your age:");

console.log(`Welcome ${name}
Department: ${department}
Age: ${age}`);

let balance = 10000;
let amount = Number(prompt("Enter withdrawal amount:"));

if (amount < 100) {
    console.log("Minimum withdrawal is 100");
} else if (amount <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

let orderAmount = Number(prompt("Enter order amount:"));

let message = orderAmount > 499 
    ? "Free Delivery Available" 
    : "Delivery Charges Applied";

console.log(message);

let username = prompt("Enter username:");

if (username === "admin") {
    let password = prompt("Enter password:");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}
let signal = prompt("Enter signal (red/yellow/green):").toLowerCase();

switch (signal) {
    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}

function salaryCalculation(basic, bonus) {
    return basic + bonus;
}

let totalSalary = salaryCalculation(25000, 5000);
console.log(totalSalary);
``
let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);

let contact = {
    name: "Vijay",
    phone: "9876543210",
    status: "Available"
};

for (let key in contact) {
    console.log(key + ": " + contact[key]);
}

function payment() {
    console.log("Payment Successful");
}

function bookTicket(callback) {
    console.log("Ticket Booked Successfully");
    callback(); // calling payment function
}

bookTicket(payment);

function* deliveryStatus() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let status = deliveryStatus();

console.log(status.next().value);
console.log(status.next().value);
console.log(status.next().value);
console.log(status.next().value);