
// JavaScript Fundamentals 

// 1. Variables and Data Types

// Variable Declaration (var, let, const)
var a = 5;      // Old style (Any time you changle the value of a variable, use let) --- We don't use it.
let b = 10;     // Modern style (Any time you changle the value of a variable, use let) --- We use it.
const z = 15;   // Modern style (you don't changle the value of a variable, use const) --- We use it.

// Data Types
// structure : let variableName = value;
let num = 10;         // Number
let name = "Sakib";   // String
let isFalse = true;   // Boolean
let x;                // Undefined
let y = null;         // Null
let arr = [1, 2, 3];  // Array (Object)
let obj = {name: "Sakib", age: 22}; // Object

// Typeof Operator
console.log(typeof num); // Output: number
console.log(typeof name); // Output: string
console.log(typeof isFalse); // Output: boolean
console.log(typeof x); // Output: undefined
console.log(typeof y); // Output: object (Note: typeof null is object - a historical quirk)
console.log(typeof arr); // Output: object
console.log(typeof obj); // Output: object

// Type Conversion

let strNum = "123";
let numFromString = parseInt(strNum); // Convert string to integer
console.log(typeof numFromString); // Output: number

let numToStr = 456;
let strFromNum = numToStr.toString(); // Convert number to string
console.log(typeof strFromNum); // Output: string

let boolValue = Boolean(0); // Convert to boolean (0, null, undefined, "", NaN are falsy)
console.log(boolValue); // Output: false

// Other Important Concepts

// isNaN() - Checks if a value is NaN (Not a Number)
console.log(isNaN("abc")); // Output: true
console.log(isNaN(123)); // Output: false

// Convert to number
let string = "10";
let number = parseInt(string);
console.log(number);

// Convert to string
let wegiht = 10;
let str = wegiht.toString();
console.log(str); 

// Convert to boolean
let bool = Boolean(1);
console.log(bool); 

// 2. Arithmetic Operations
let num1 = 10;
let num2 = 20;
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus (Remainder)
console.log(num1 ** 2);   // Exponentiation (Power)
num1++;                   // Increment
num2--;                   // Decrement
console.log(num1, num2);  

// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
console.log(10 == "10"); // Output: true (Equality, type conversion)
console.log(10 === "10"); // Output: false (Strict equality, no type conversion)
console.log(10 != 20); // Output: true (Inequality)
console.log(10 !== "10"); // Output: true (Strict inequality)
console.log(10 > 20); // Output: false (Greater than)
console.log(10 < 20); // Output: true (Less than)
console.log(10 >= 10); // Output: true (Greater than or equal to)
console.log(10 <= 10); // Output: true (Less than or equal to)


// Logical Operators (&&, ||, !)
console.log(true && false); // Output: false (AND Operator)
console.log(true || false); // Output: true (OR Operator)
console.log(!true); // Output: false (NOT Operator)

// Assignment Operators (=, +=, -=, *=, /=, %=)
let p = 10;
p += 5; // Equivalent to p = p + 5
console.log(p); // Output: 15



// 3. String Operations
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Concatenation

// String Interpolation (Modern Approach)
let greeting = `Hello, ${name}!`; // Template literals
console.log(greeting); // Output: Hello, Sakib!

// String Methods
console.log(str1.length); // Output: 5 (String length)
console.log(str1.toUpperCase()); // Output: HELLO
console.log(str2.toLowerCase()); // Output: world
console.log(str1.indexOf("l")); // Output: 2 (Index of "l")
console.log(str1.slice(1, 4)); // Output: ell (Extract substring)
console.log(str1.replace("l", "w")); // Output: Hewwo (Replace substring)
console.log(str1.charAt(0)); // Output: H (Character at index)
console.log(str1.split("")); // Output: ["H", "e", "l", "l", "o"] (Split into array)
console.log(str1.concat(" ", str2)); // Output: Hello World (Concatenation)

// 4. Boolean Values
console.log("AND Operator:", true && false);
console.log("OR Operator:", true || false);
console.log("NOT Operator:", !true);



// 5. Arrays

let myArray = [1, 2, 3, 4, 5];
console.log("Array:", myArray); // Output: Array: [1, 2, 3, 4, 5]

console.log("Length:", myArray.length); // Output: Length: 5

console.log("Index 2:", myArray[2]); // Output: Index 2: 3

myArray[2] = 10; // Modify element
console.log("Index 2 (Modified):", myArray[2]); // Output: Index 2 (Modified): 10

// Array Methods
myArray.push(6); // Add element to the end
console.log("Push:", myArray); // Output: Push: [1, 2, 3, 4, 5, 6]

myArray.pop();   // Remove element from the end
console.log("Pop:", myArray); // Output: Pop: [1, 2, 3, 4, 5]

myArray.shift();  // Remove element from the beginning
console.log("Shift:", myArray); // Output: Shift: [2, 3, 4, 5]

myArray.unshift(1); // Add element to the beginning
console.log("Unshift:", myArray); // Output: Unshift: [1, 2, 3, 4, 5]


console.log("Slice:", myArray.slice(1, 4)); // Output: Slice: [2, 3, 4] (Creates a new array)

myArray.splice(2, 1, "a", "b"); // Remove and add elements
console.log("Splice:", myArray); // Output: Splice: [1, 2, "a", "b", 4, 5]

console.log("Concat:", myArray.concat([7, 8, 9])); // Output: Concat: [1, 2, "a", "b", 4, 5, 7, 8, 9]

console.log("Join:", myArray.join("-")); // Output: Join: 1-2-a-b-4-5 (Creates a string)

console.log("Reverse:", myArray.reverse()); // Output: Reverse: [5, 4, "b", "a", 2, 1]

myArray.sort(); // Sorts the array (modifies original array), default is lexicographical
console.log("Sort:", myArray); // Output (will depend on your data): Sort: [1, 2, "a", "b", 4, 5]

console.log("IndexOf 'a':", myArray.indexOf("a")); // Output: IndexOf 'a': 2
console.log("Includes 'b':", myArray.includes("b")); // Output: Includes 'b': true


// 4. Conditional Statements (if-else, ternary, switch)

let age = 22;
if(age >= 18){
    console.log("You are adult");
}
else if(age >= 13){
    console.log("You are teenager");
}
else{
    console.log("You are child");
}

// Ternary Operator

let weight = 22;
let statu = (weight >= 18) ? "Adult" : "Child";
console.log(statu);

// loop

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop:", i);
}

// While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop:", j);
    j++;
}

// Do...While Loop (Guarantees at least one execution)
let k = 0;
do {
    console.log("Do...While Loop:", k);
    k++;
} while (k < 5);

// For...In Loop (Iterates over object properties)
let object = { name: "Alice", age: 30 };
for (let key in obj) {
    console.log("For...In Loop:", key, object[key]);
}

// For...Of Loop (Iterates over iterable objects like arrays)
let array = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log("For...Of Loop:", item);
}

// Object
let person = { name: "Alice", age: 30 };
console.log(person);
console.log(person.name);
console.log(person.age);


// Object key
let person1 = { name: "Alice", age: 30 };
for (let key in person1) {
    console.log(key);
}

// Object value
let person2 = { name: "Alice", age: 30 };
for (let key in person2) {
    console.log(person2[key]);
}

// Object key and value
let person3 = { name: "Alice", age: 30 };
for (let key in person3) {
    console.log(key + ": " + person3[key]);
}

// date object
let now = new Date();
console.log(now);


// 5. Functions

function greet(name) {
    return `Hello, ${name}!`;
}

let message = greet("Alice");
console.log(message); // Output: Hello, Alice!

// Arrow Functions (Shorter syntax)
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// switch, break, continue example
let day = 2;
switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    default:
        console.log("Invalid day");
}

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}



