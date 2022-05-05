// Closures in JS 
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  console.time("6")
  init();
  console.timeEnd("6") // Method we can check the execution time of any function

  //Scopes in js
  //Global Scope
 var a = 3;
 function first(b){
     return function second(c){
         //Outer function scope
         return function third(d){
             //Local Scope
             return  a+b+c+d ;
         };
     };
 };
console.log(first(2)(4)(6)) //15



// Questions on closures in javascript 
// 1. What will this console log 
let count = 0;
(function printCount(){
if(count === 0){
  let count = 1;
  console.log(count) // shadowing , returns 1 
}
console.log(count)// returns 0 as well
})();


// 2.Write a fucntion that will allow you to do this 
var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // return 27
// This function will return the required output
function createBase(num){ // Here the createBase value will still unchangeble
  return function inner(num1){
   console.log(num1+num);
  }
}
