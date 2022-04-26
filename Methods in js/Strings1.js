// 1.split() == retruns a string into array of substrings
// it doesnot change the original array it returns a new array 
// SYNTAX str.split(separator,limit)
let str = "Hello how are you Hello ?"
console.log(str.split(" ",2)) //it will split till the 2 index


// 2.substr() == method extract the part of the string 
// SYNTAX string.substr(start, length)
console.log(str.substring(1,4));


// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes. 


// 3.Slice()== slice extract the part of the string and returns a new string 
// SYNTAX slice (start,end )
console.log(str.slice(1,7))
// If you omit the second parameter, the method will slice out the rest of the string:
console.log(str.slice(7))//it will return rest of the string from 7 index


// 4.replace()==It replaces a specific value with another value 
// returns a new string , 
// replace only first match by default for every occurance you use reg expression with gobal keyword
// it is case sensitive
console.log(str.replace("Hello","HelloEveryone"))
console.log(str.replace(/Hello/g,"HelloEveryone"))// reg exp

// 5.str.length 
console.log(str.length)// returns the length of a string

// 6.str.toLowerCase()
console.log(str.toLowerCase())

// 7.str.toUpperCase()
console.log(str.toUpperCase ())

// 8.str.concat()== used to concat pr join two strings 

// 9.str.trim() == The trim() method removes whitespace from both sides of a string

// 10.padStart() and padEnd() to support padding at the beginning and at the end of a string.
let numb = 5;
let text = numb.toString();
// let padded = text.padStart(4,"0");
let padded = text.padStart(4,"x"); //xxx5
console.log(padded)//0005

let paddedEnd = text.padEnd(4,"0");
console.log(paddedEnd) //5000


// 11.str.charAt() == The charAt() method returns the character at a specified index (position) in a string
console.log(str.charAt(6));

// 12.indexOf == returns the index of first occurance in a string  
console.log(str.indexOf("are"))
// Both methods accept a second parameter as the starting position for the search:
// 13.lastIndexOf()== return the last index of the occurance in a string or text not found it returns -1
console.log(str.lastIndexOf("Hello"))

// 14.The search() method searches a string for a specified value and returns the position of the match:
console.log(str.search("are")) // The only difference is it doesnot takes the second parameter  

// 15.includes()== returns the boolean value if the string contains the word or not 
// SYNTAX- string.includes(searchvalue, start) //optional second parameter
console.log(str.includes("are"))

// 16.template literals == you can use both `` "" inside a string 
//write in multiple lines using this
//Template literals provide an easy way to interpolate variables and expressions into strings
let str1 = `Hello "Sattyam" how are you?`
let text1 = `The quick
brown fox
jumps over
the lazy dog`
console.log(str1)
console.log(text1)
