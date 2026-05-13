// Task 1 — Basic Function
function welcomeUser(name){
    console.log("welcome" + name);
    
}
welcomeUser("VIJAY");
// Task 2 — Parameter + Return
function squareNumber(num){
    return num * num
    
}
console.log(squareNumber(5));
// Task 3 — Object Function
let emp = {
   name : "Rahul",
   salary : 50000
}
function employeeBonus(bonus){
    console.log(emp.name);
    console.log(emp.salary + bonus);
    
    
    
}
employeeBonus(5000)
// Task 4 — Scope Checking
function scopeCheck(){
    if(true){
        var a = "1000"
        let b = "2000"
        const c = "5000 "
    }
console.log(a); //Works
// console.log(b); //Error
// console.log(c); //Error
}
scopeCheck()
// Task 5 — Arrow Function
let add = (a,b)=>{
    console.log(a+b);
    
}
add(10,20)
// Task 6 — Callback Function
const multiply = (a,b)=>{
    return a * b;
};
function calculator(callback,num1,num2){
    console.log(callback(num1,num2));
    
}
calculator(multiply,5,2)
// Task 7 — Generator Function
function* offer(){
    yield "50% OFF"
    yield "Free Delivery"
    yield "Cashback"
}
let genVal = offer()
console.log(genVal.next().value);
console.log(genVal.next().value);
console.log(genVal.next().value);
// for(let x1 of genVal){
//     console.log(x1);
    
// }
// Task 8 — Default Parameter
let form = function(name,course="Javascript"){
    console.log("name", name);
    console.log("course", course);
    
    
}
form("Surya")
// Task 9 — Currying
function multi(a){
    return function (b){
        return function (c){
            return a*b*c
        }
    }
}console.log(multi(2)(3)(4))
// Task 10 — Spread Operator
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let totalArray = [...arr1,...arr2]
console.log(totalArray);
// Task 11 — Object Spread
let Obj1 = {name:"Navi" };
let Obj2 = {role:"Developer"};
let mergedObj = {...Obj1,...Obj2}
console.log(mergedObj);
// Task 12 — Rest Operator
function number(...num){
console.log(num);
let total = 0
for(let i = 0; i< num.length; i++){
    total += num[i]
}
console.log(total);
}
//Example
number(1,2,3,4)
// Mini challenge/
// Student Array
let students = [];
// Add Student Function
function addStudent(name, ...marks) {
    const student = {
        name: name,
        marks: marks
    };
    students.push(student);
}
// Print Students
function printStudents() {
    console.log("Student Details");
    students.forEach((student) => {
        console.log(student);
    });
}
// Callback Function for Total Marks
function calculateMarks(marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total;
}
// Add Bonus Marks using Spread Operator
function addBonusMarks(bonus) {
    students = students.map((student) => {
        const updatedMarks = student.marks.map(mark => mark + bonus);
        return {
            ...student,
            marks: updatedMarks
        };
    });
}
// Calculator Function using Callback
function studentResult(callback) {
    students.forEach((student) => {
        const total = callback(student.marks);
        console.log(`${student.name} Total Marks: ${total}`);
    });
}
// Add Students
addStudent("Rahul", 80, 90, 85);
addStudent("Navi", 70, 75, 80);
// Print Students
printStudents();
// Calculate Total Marks
studentResult(calculateMarks);
// Add Bonus Marks
addBonusMarks(5);
console.log("After Bonus Marks");
// Print Updated Students
printStudents();