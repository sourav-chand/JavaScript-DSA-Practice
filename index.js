// /*
// let a =20
// console.log("hello world \n",a)
// console.log(25)
// console.log(true);*/
// // const arr = [1,2,3,4,5]
// // arr.push(6)
// // console.log(arr)
// // function test(){
// //     {
// //         let x = 100;
// //     }
// //   console.log(x);

// // }

   
// // test()

// // index.js
// // function test() {
// //     let a = 1;
// //     console.log(a);
// // }

// // test(); 
// // // console.log(=a); 

// // console.log(a);

// // console.log(b);

// let person1 = {
//     name: "Sourav"
// };

// let person2 = person1;

// person2.name = "Rahul";

// console.log(person1.name);

// let num = 2e4;

// console.log(num);
// console.log(10 / 0);
// console.log("abc" / 2);
// let name = "Sourav";

// console.log(name);
// let word = "Hello";

// word = 544646544654654654n;

// console.log(typeof word);
// console.log(Number("abc"));

// a = Number("100")
// console.log(a)
// int = {
//     hello: "world"
// }
// int1=int
// int2=int
// int.hello = "Rahul"
// console.log(int1.hello)
// console.log(int2.hello)

// a = 10
// b = a
// b=20
// console.log(b,a)
// let x = 5;

// console.log(++x);
// console.log(x);
// console.log(6 & 9);
// 0110
// 1001
// 0000
// console.log(5 | 3);
// console.log(8 >> 1);
// if (a = 10){
//     console.log( a);
// } else if (a = 20) {
//     console.log(a = 20);
// } else {
//     console.log("hello world");
// }
// console.error("Something went wrong!");
// process.stdin.on("data", (input) => {
//     console.log(input.toString());
// });
// taking input from the user
// const fs = require("fs");

// const input = Number(fs.readFileSync(0, "utf8").trim());
// console.log("hello",input ,typeof input);
// taking input from the user in array
// const fs = require("fs");

// const arr = fs
//     .readFileSync(0, "utf8")
//     .trim()
//     .split(" ")
//     .map(Number);// only for number array for string array remove map(Number)

// console.log(arr);



// The 5 Input Patterns You Should Memorize
// 1. Single Number
// const n = Number(fs.readFileSync(0, "utf8").trim());
// 2. Single String
// const str = fs.readFileSync(0, "utf8").trim();
// 3. Array of Numbers ⭐
// const arr = fs
//     .readFileSync(0, "utf8")
//     .trim()
//     .split(" ")
//     .map(Number);
// 4. Array of Strings ⭐
// const arr = fs
//     .readFileSync(0, "utf8")
//     .trim()
//     .split(" ");


// import fs from "fs"
// let input = fs.readFileSync(0, "utf8")
// console.log("after taking input",input);
// input = input.trim()
// console.log("after trim",input);
// input = input.split(" ")
// console.log("after split",input);
// input = input.map(Number)
// console.log("after converting in num",input);


// import fs from "fs"
// // let input = fs.readFileSync(0,"utf8").trim().split("/\s+/")
// let input = fs.readFileSync(0,"utf8").trim().split(/\s+/) // Correct

// console.log(input);
// let a = 10.87
// console.log(typeof parseFloat("12.75"));


// reverse an integer 

// import fs from "fs"
// console.log("Enter a NUmber");
// let n = parseInt(fs.readFileSync(0,"utf8").trim())
// console.log(n);

// let reverse=0
// while (n>0){
//     let r = n%10
//     reverse= reverse*10+r
//     n = Math.floor (n/10)
// }
// console.log(reverse);
// console.log(Math.trunc(-8.99));
// console.log(Math.floor(-8.99));


// const arr = [1,2,3];
// const removed = arr.pop(2);
// console.log(removed);
// console.log(arr);
// let arr = [2,4,5,7]
// arr.shift()
// console.log(arr);

// arr.unshift(50)
// console.log(arr);
// const arr = [10,20,30,40];

// arr.splice(1,2);

// console.log(arr);

// const arr = [10,40];

// arr.splice(1,0,20,30,40,60,70);

// console.log(arr);
// str = "hello"
// str.reverse()
// console.log(str);
// arr = [1,3,4,5,57]
// console.log(typeof arr);
// const id = Symbol("id");

// const user = {
//     name: "Sourav",
//     [id]: 101
// };

// console.log(user[id]);

console.log(false && "Hello");







