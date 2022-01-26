// program to create a new string from a given string taking first and last 3  characters and adding them together. The string length must be 3 or more if not print the original string 

const newString=(str)=>{
    return str.length<3?str:str.slice(0,3)+ str.slice(-3);
}
console.log(newString("Sattyam "))
console.log(newString("abcd"))
console.log(newString("ab"))

// program to extract the first half of the string of even length
const evenLength=(str)=>{
    return str.slice(0,str.length/2);
}
console.log(evenLength("SattyamChauhan"));
console.log(evenLength("Sattyam"));

// program to concat two string except their first characters
const FChar=(str1,str2)=>{
     let newStr=str1.slice(1)+str2.slice(1) 
     return newStr;
}
console.log(FChar("Sattyam","Chauhan"))

// Given two values , write a js program to find out which one is nearest to 100;
const newNum=(a,b)=> (100-a)< (100-b)?a:b;
console.log(newNum(99,1))
console.log(newNum(30,70))
console.log(newNum(20,54))
