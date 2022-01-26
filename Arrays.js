// 1.Write a JavaScript function to check whether an 'input' is an array or not.

let is_array=function (input){
    if(toString.call(input) =="[object Array]")
    return true; //array returns true
    return false; //if not an array return false
};

console.log(is_array(["sattyam"]))


// 2.Write a JavaScript function to clone an array.

function clone(input){
    return input.slice(0)
}
console.log(clone([9,4,5,6,7]));


// 3.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function nElem(input){
    return input.length();
}
// console.log(nElem([2,3,4,5,6]));

// 4. Write a simple JavaScript program to join all elements of the following array into a string. 
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
let  myColor = ["Red", "Green", "White", "Black"];
let color = myColor.toString();
console.log(color);
console.log(myColor.join());
console.log(myColor.join('+'));


// 5. Write a JavaScript program which accept a number as input and insert dashes (-) between each  numbers. For example if you accept 025468 the output should be 0-2-5-4-6-8.
const num=45364758;
const str=num.toString();
const result=[str[0]];

for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));

// 6.Write a JavaScript program to sort the items of an array.
// Sample array : 
var arr1 = [ 3, -8, 7, 6, 5, -4, -3, 2, 1 ];
arr1.sort();
console.log(arr1.toString());



