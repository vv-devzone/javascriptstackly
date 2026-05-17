'use strict';

// ==========================================
// 1. Student Attendance System
// ==========================================
console.log('--- Student Attendance System ---');

const presentStudents = ['naveen', 'abi', 'Candru', 'Bharath'];
const absentStudents = ['David', 'giri'];

// Merge using spread operator + add new student
const allStudents = [...presentStudents, ...absentStudents, 'Frank'];

console.log('Final Student List:', allStudents);



// ==========================================
// 2. E-Commerce Cart
// ==========================================
console.log('\n--- E-Commerce Cart ---');

const mobile = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 70000
};

const charger = {
    type: 'Fast Charger',
    watt: '25W',
    price: 1500
};

// Merge objects + add deliveryDate
const cart = {
    ...mobile,
    ...charger,
    deliveryDate: '2026-05-20'
};

console.log('Final Cart Object:', cart);



// ==========================================
// 3. Food Delivery App
// ==========================================
console.log('\n--- Food Delivery App ---');

function orderFood(...items) {
    console.log('Total Items Ordered:', items.length);
    console.log('First Item:', items[0]);
    console.log('Last Item:', items[items.length - 1]);
}


orderFood('Pizza', 'Burger', 'Pasta', 'Ice Cream');



// ==========================================
// 4. Employee Salary Filter
// ==========================================
console.log('\n--- Employee Salary Filter ---');

const employees = [
    { name: 'John', salary: 45000 },
    { name: 'Jane', salary: 60000 },
    { name: 'Mark', salary: 75000 },
    { name: 'Steve', salary: 30000 }
];


const highSalaryEmployees = employees.filter(emp => emp.salary > 50000);

console.log('Employees with Salary > 50000:', highSalaryEmployees);



// ==========================================
// 5. Online Game Score Board
// ==========================================
console.log('\n--- Online Game Score Board ---');

const scores = [100, 200, 150, 300, 250];


const totalScore = scores.reduce((total, score) => total + score, 0);

console.log('Total Score:', totalScore);