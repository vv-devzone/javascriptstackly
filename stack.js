(function() {
  const outputEl = document.getElementById('output');
  if (!outputEl) return;

  function formatValue(value) {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return String(value);
  }

  function write(...args) {
    if (!args.length) return;
    const text = args.map(formatValue).join(' ');
    if (!text) return;
    const p = document.createElement('p');
    p.textContent = text;
    outputEl.appendChild(p);
  }

  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  console.log = function(...args) {
    write(...args);
    originalLog.apply(console, args);
  };
  console.warn = function(...args) {
    write('WARN:', ...args);
    originalWarn.apply(console, args);
  };
  console.error = function(...args) {
    write('ERROR:', ...args);
    originalError.apply(console, args);
  };
})();

var a = 10;
a = 15;
console.log(a); //15

// let b = 20;
// let b = 30; // not allow, its  redeclaration

const c = 50;
console.log(c); //50


// const x = 10;
// x = 20; // error is const not allowed redeclaration , const is allowed constant variable

var p = 5;
var p = 10;
console.log(p); //10

let q = 25;
q = q + 10;
console.log(q); //35

const r = 7;
console.log(r + 3); //10

// _ a = 10; //var

//  Section 2: Console Methods (9–12)

console.log()
console.warn()
console.error()
// 12 . clear the console outputs

//  Section 3: Data Types (13–18)

let d = "hello";
console.log(typeof d); //string

let b = 100;
console.log(typeof b); //number

let n = false;
console.log(typeof n); //boolean

let m;
console.log(m); //undefined


// What is type of null?   // its primitive value .null is  mean empty or no value

var x="25"
var y =Number(x)
console.log(y);
console.log(typeof(y)); //change string to number

// Section 4: Arrays 

let fruits=["apple","orange","mango"]
console.log(fruits);

let arr = ["a","b","c"];
console.log(arr[1]); //b

let arry = ["x","y","z"];
console.log(arry[arry.length-1]); //z

console.log(arry[0])

// How to get first element? //console.log(arry[0])

let array = ["apple","banana"];
console.log(array.length); //2
array[2]="mango";
console.log(array)

// Add new element to array. // array[2]="mango";

// Create object with name & age.

let obj={
    name:"vijayvikram",
    age:28
}
console.log(obj.name) //vijayvikram
console.log(obj.age) //28

let obj1 = {name:"abinaya"};
console.log(obj1.name); //abinaya

let obj2 = {
  fruits: ["apple","banana"]
};
console.log(obj2.fruits[1]); //banana

// How to access last element inside object array? 
console.log(obj2.fruits[obj2.fruits.length-1])  // banana

//  Section 6: Arithmetic Operator

console.log(5 + 3); //8

console.log(10 % 3); //1
console.log(2 ** 3); //8
console.log(10 / 2); //5

// Section 7: Increment / Decrement

let z = 5;
z++;
console.log(z); //6
let bc = 5;
let cd = bc++;
console.log(bc, cd); //6 ,5 

let xy = 5;
let yz = ++xy;
console.log(xy, yz); //6,6


let mn = 3;
let no = mn--;
console.log(mn, no); //2,3

// Section 8: Comparison & Logica

console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(true && false || true); //true

//  Section 9: Ternary

5 > 3 ? console.log("Yes") : console.log("No");//Yes