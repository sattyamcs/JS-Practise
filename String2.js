// 1. write a js function that returns a passed string with letters in alphabetical orders
// input string:"ttyamsa"
// output string:"Sattyam"
const sortString=(inp)=>{
   return inp.split('').sort((a,b)=>a>b?1:-1).join('')
}
console.log(sortString("ahsg")) 

// 2.Write a function that takes string as a parameter and rturns vowels within the string
const vowels=(inp,letter=['a','e','i','o','u'])=>{
    return inp.split('').filter((s)=>letter.indexOf(s)>-1).length
}
console.log(vowels("aeiou" ))

// 3.Write a js program to extract unique characters from a String. 
function getUniqueChar(inp){
   return inp.split('').filter((elem,index,arr)=>arr.slice(index + 1).indexOf(elem)=== -1)
}
console.log(getUniqueChar('aaaddddss'))
// Or it can be done as using Set. 
const uniqueChar=(str)=>{
    return new Set(str.split(''));
}
console.log(uniqueChar("Ssssgggggghhh"))

// 4.write a js function to find the first not reapeated chracter 
// example string='aabbbddcce'
// expected outptut='e'
function nonRepeated(str){
    str.split('').filter((item,indx,arr)=>arr.filter((arrItem)=>arrItem===item).length===1)
}
console.log(nonRepeated('assdddsfdff'))

// 5.Find the total words in a String. 
let str1 = "Sattyam is a good developer "
let newStr = str1.split(' ').length 
console.log(newStr)// This will return the total numbers of words in a string

// 6.Reverse an sectence 
function reverseString(input){
    return input.split(' ').reverse().join(' ')
} 
console.log(reverseString("Sattyam Singh is a good developer"));