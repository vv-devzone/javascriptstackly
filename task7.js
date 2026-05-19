

async function task1_UserNamesUppercase() {
  console.log("========== TASK 1: User Names Uppercase ==========");

  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const users = data.users; // ⚠️ DummyJSON wraps in an object!
  const upperNames = users.map(user => user.username.toUpperCase());
  console.log(upperNames);
}

async function task2_ExpensiveProducts() {
  console.log("========== TASK 2: Products price greater than ₹8,000 ==========");

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const USD_TO_INR = 83.5; 
  const expensiveProducts = products.filter(
    (product) => product.price * USD_TO_INR > 8000
  );

  console.log("Products with price greater than ₹8,000:");
  expensiveProducts.forEach((product) => {
    const priceInINR = (product.price * USD_TO_INR).toFixed(2);
    console.log(`  - ${product.title} | ₹${priceInINR}`);
  });
}



function task3_DigitalClock() {
  console.log("\n========== TASK 3: Digital Clock ==========");

  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  console.log(`${hours} : ${minutes} : ${seconds}`);
}



function task4_UsernameChecker() {
  console.log("\n========== TASK 4: Username Checker ==========");

  const username = "   ABINAYA PALANI  ";

  const trimmed = username.trim();
  console.log("After trim()    :", trimmed);

  const upperCased = trimmed.toUpperCase();
  console.log("After uppercase :", upperCased);

  const includesKumar = upperCased.includes("ABINAYA");
  console.log('Includes "ABINAYA":', includesKumar);

  console.log("Final Output    :", upperCased);
}


function task5_StudentRankSystem() {
  console.log("\n========== TASK 5: Student Rank System ==========");

  const marks = [450, 300, 700, 200, 900];

  const sortedMarks = marks.sort((a, b) => b - a);
  console.log("Sorted Marks (High to Low):", sortedMarks);

  const top3 = sortedMarks.slice(0, 3);
  console.log("Top 3 Marks:", top3);
}


async function runAllTasks() {
  await task1_UserNamesUppercase();
  await task2_ExpensiveProducts();
  await task3_DigitalClock();
  await task4_UsernameChecker();
  await task5_StudentRankSystem();
}

runAllTasks();