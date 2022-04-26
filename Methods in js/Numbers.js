// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.

// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(z) //30

// let x = '10';
// let y = '10';
// let z = x + y;
// console.log(z)//1010

// let x = 10;
// let y = '10';
// let z = x + y;
// console.log(z) // 1010

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;
// console.log(result) //3030

// let x = "100";
// let y = "10";
// let z = x / y;
// console.log(z) //10

// let x = "100";
// let y = "10";
// let z = x - y;
// console.log(z)//90

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
console.log(typeof(NaN)) //number
console.log(typeof(null)) //object

// let x = 100 / "Apple";
// console.log(x) //NaN


// let x = NaN;
// let y = "5";
// let z = x + y;
// console.log(z) //NaN5


// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
// Division by 0 (zero) also generates Infinity:
console.log(typeof(Infinity)) //number
// let x =  2 / 0;
// let y = -2 / 0;
// console.log(x,y) //infinity

// the toString() method to output numbers from base 2 to base 36. //number to a string 
let myNumber = 32;
console.log(myNumber.toString(32)); //10


// But numbers can also be defined as objects with the keyword new:
let y = new Number(123);
console.log(y) //returns a object
