// ============================================================
// JAVASCRIPT PRACTICE - ORGANIZED BY TOPICS
// ============================================================

// ============================================================
// 1. VARIABLES & DATA TYPES
// ============================================================

// --- Basic console.log ---
// let a = 20;
// console.log("hello world \n", a);
// console.log(25);
// console.log(true);

// --- String, Number, Boolean ---
// let name = "Sourav";
// console.log(name);

// let word = "Hello";
// word = 544646544654654654n; // BigInt
// console.log(typeof word);

// let num = 2e4; // Scientific notation = 20000
// console.log(num);

// ============================================================
// 2. TYPE CONVERSION
// ============================================================

// console.log(Number("abc"));      // NaN
// a = Number("100");
// console.log(a);                  // 100
// console.log(typeof parseFloat("12.75")); // number

// ============================================================
// 3. ARITHMETIC & SPECIAL VALUES
// ============================================================

// console.log(10 / 0);            // Infinity
// console.log("abc" / 2);         // NaN

// ============================================================
// 4. INCREMENT OPERATOR
// ============================================================

// let x = 5;
// console.log(++x);  // 6 (pre-increment)
// console.log(x);    // 6

// ============================================================
// 5. OBJECTS & REFERENCE TYPES
// ============================================================

// --- Objects share reference ---
// let person1 = { name: "Sourav" };
// let person2 = person1;
// person2.name = "Rahul";
// console.log(person1.name);  // "Rahul" (same reference)

// --- Multiple variables pointing to same object ---
// int = { hello: "world" };
// int1 = int;
// int2 = int;
// int.hello = "Rahul";
// console.log(int1.hello);  // "Rahul"
// console.log(int2.hello);  // "Rahul"

// --- Primitive values (independent copies) ---
// a = 10;
// b = a;
// b = 20;
// console.log(b, a);  // 20, 10 (independent)

// ============================================================
// 6. SCOPE (Block Scope with let)
// ============================================================

// function test() {
//     {
//         let x = 100;  // block scoped
//     }
//     // console.log(x); // Error: x is not defined
// }
// test();

// function test() {
//     let a = 1;
//     console.log(a);
// }
// test();

// ============================================================
// 7. BITWISE OPERATORS
// ============================================================

// console.log(6 & 9);   // 0 (AND: 0110 & 1001 = 0000)
// console.log(5 | 3);   // 7 (OR:  0101 | 0011 = 0111)
// console.log(8 >> 1);   // 4 (Right shift: 1000 >> 1 = 0100)

// ============================================================
// 8. IF-ELSE STATEMENT
// ============================================================

// a = 10;
// if (a = 10) {          // NOTE: = is assignment, not comparison
//     console.log(a);
// } else if (a = 20) {
//     console.log(a = 20);
// } else {
//     console.log("hello world");
// }

// ============================================================
// 9. CONSOLE METHODS
// ============================================================

// console.error("Something went wrong!");

// ============================================================
// 10. TAKING INPUT FROM USER
// ============================================================

// --- Method 1: process.stdin ---
// process.stdin.on("data", (input) => {
//     console.log(input.toString());
// });

// --- Method 2: fs.readFileSync (Single Number) ---
// const fs = require("fs");
// const n = Number(fs.readFileSync(0, "utf8").trim());
// console.log("hello", n, typeof n);

// --- Method 3: fs.readFileSync (Single String) ---
// const str = fs.readFileSync(0, "utf8").trim();

// --- Method 4: fs.readFileSync (Array of Numbers) ---
// const arr = fs
//     .readFileSync(0, "utf8")
//     .trim()
//     .split(" ")
//     .map(Number);
// console.log(arr);

// --- Method 5: fs.readFileSync (Array of Strings) ---
// const arr = fs
//     .readFileSync(0, "utf8")
//     .trim()
//     .split(" ");

// ============================================================
// 11. INPUT PATTERN - STEP BY STEP BREAKDOWN
// ============================================================

// import fs from "fs";
// let input = fs.readFileSync(0, "utf8");
// console.log("after taking input", input);
// input = input.trim();
// console.log("after trim", input);
// input = input.split(" ");
// console.log("after split", input);
// input = input.map(Number);
// console.log("after converting in num", input);

// --- Using regex split for flexible whitespace ---
// import fs from "fs";
// let input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
// console.log(input);

// ============================================================
// 12. REVERSE AN INTEGER (Algorithm)
// ============================================================

// import fs from "fs";
// let n = parseInt(fs.readFileSync(0, "utf8").trim());
// console.log(n);

// let reverse = 0;
// while (n > 0) {
//     let r = n % 10;          // get last digit
//     reverse = reverse * 10 + r;  // build reversed number
//     n = Math.floor(n / 10);  // remove last digit
// }
// console.log(reverse);

// ============================================================
// 13. MATH METHODS
// ============================================================

// console.log(Math.trunc(-8.99));  // -8 (removes decimal)
// console.log(Math.floor(-8.99));  // -9 (rounds down)

// ============================================================
// 14. ARRAY METHODS
// ============================================================

// --- pop() - Remove last element ---
// const arr = [1, 2, 3];
// const removed = arr.pop();
// console.log(removed);  // 3
// console.log(arr);      // [1, 2]

// --- shift() - Remove first element ---
// let arr = [2, 4, 5, 7];
// arr.shift();
// console.log(arr);  // [4, 5, 7]

// --- unshift() - Add to beginning ---
// arr.unshift(50);
// console.log(arr);  // [50, 4, 5, 7]

// --- splice() - Remove elements ---
// const arr = [10, 20, 30, 40];
// arr.splice(1, 2);        // remove 2 elements from index 1
// console.log(arr);        // [10, 40]

// --- splice() - Insert elements ---
// const arr = [10, 40];
// arr.splice(1, 0, 20, 30, 40, 60, 70);  // insert at index 1
// console.log(arr);  // [10, 20, 30, 40, 60, 70, 40]

// --- typeof ---
// arr = [1, 3, 4, 5, 57];
// console.log(typeof arr);  // "object"

// ============================================================
// 15. SYMBOL (Unique Identifiers)
// ============================================================

// const id = Symbol("id");
// const user = {
//     name: "Sourav",
//     [id]: 101
// };
// console.log(user[id]);  // 101

// ============================================================
// 16. LOGICAL OPERATORS (Short-circuit)
// ============================================================

// console.log(false || "Hello");  // false (short-circuits, doesn't evaluate "Hello")

// import fs from "fs"
// let n = Number(fs.readFileSync(0, "utf8").trim())
// console.log(n);
// let str="sourav chand "
// console.log(str.length);
// console.log(str.slice(1,5));
// console.log(str.split(" "));
// console.log(str.replace(" ", ""));
// console.log(str.includes("ch"));
// console.log(str.replaceAll("ch", "so"));
// console.log(str.charAt(8));
// console.log(str.indexOf("h"));


//recursion practice


// function recursion(n) {
//     if (n == 0) {
//         return 1
//     }
    
//     return n * recursion(n-1)
    
// }
// let fac = recursion(5)
// console.log(fac);


// practice with Object
const student = {
    name: "Sourav",

    address: {
        city: "Kolkata",
        state: "West Bengal"
    }
};

const {
    address:{city}
} = student;

console.log(city);