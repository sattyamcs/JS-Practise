console.log(2+'2') //22 , + is used to concatinate two strings in js, and adding two numbers
console.log(2-'2') //0, - is the only mathematical operator

let num = [1,1,2,2,3,3,4,4] //Removing duplicates
let numDup = new Set(num) //returns set with unique values
let numDup1 = [...new Set(num)]// returns array
console.log(numDup);
console.log(numDup1);


// scopes function 
function names(){
    {
        let a= "Sattyam" //block scope
        var b = "hello" //function scope
    }
    // console.log(a)//cannot accesed outside the block
    console.log(b)// hello
}
names();


console.log(5<6<7);  //true 5<6true and returns 1 then 1<7 returns false
console.log(7>6>5);  //false


console.log(null == undefined); //true , both are falsy by default
console.log(null === undefined); //false , Here the are of different data types 



function arg(){return arguments}
let argu = (...a)=>{return a}//Here we do this and it returns a array with arguments
console.log(arg('a')) //returns the arguments but not aplicable in arrow function it does not bind with argument there
console.log(argu('satyam'))//argument not defined 


console.log(typeof(null)) //object
console.log(typeof(NaN))  //number
console.log(typeof(Infinity)) //number

let x = 100 / "Apple";
console.log(x) //NaN

// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
// Division by 0 (zero) also generates Infinity:
console.log(typeof(Infinity)) //number
let x1 =  2 / 0;
let y = -2 / 0;
console.log(x1,y) //infinity -infinity

console.log(Math.max()) //-infinity
console.log(Math.min()) //infinity



// This all we need to convert to the string first
console.log({}) // returns empty object
console.log([]+[]) // returns an empty string 
console.log(String([])); // returns empty string


function a (){
    return "Hello"
}
const sentence = a `Hi`    //Here when we use tempate literals just after a function then it include as a argument 
console.log(sentence) // Hello


console.log(0.1+0.2) //0.30000000000000004



let Argumen = function(){
    return arguments.length
}
console.log(Argumen(1,2,3,5,6,5,4));// 7 