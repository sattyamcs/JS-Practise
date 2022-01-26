// On windows
// var num =document.write("Enter a number");
// var num =10;
// for(let i=1;i<=10;i++){
//     document.write(`<br>${num}*${i}=${num*i}`)
// }

// Used for writing table 
// On console
// var number=prompt("Enter your number")
// for(let i=1;i<=10;i++){
//     console.log(`${number}*${i}=${number*i}`)
// }

// Ques. Write a js program to check two numbers and returns true if the number is 100 or the sum of two numbers is 100
const isNumber=(a,b)=>{
    if(a==100,b==100,((a+b)==100)){
        return true
    }else{
        return false
    }
}
console.log(isNumber(0,100))
console.log(isNumber(10,0))
console.log(isNumber(10,90))

// Ques. Write a js program to print the extension of the file name
const extLast=(str)=>{
    return str.slice(str.lastIndexOf('.'))
}
console.log(extLast("index.html"));
console.log(extLast("javascript.js"));

// Ques Write a js program to get the current date
// In the format of dd/mm/yy
const newDate=(newDt= new Date())=>{
    const days=newDt.getDay();
    const month=newDt.getMonth();
    const year=newDt.getFullYear();
    return(`${days}/${month}/${year}`)
};
console.log(newDate());

