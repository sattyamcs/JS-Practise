// On windows
var num =document.write("Enter a number");
var num =10;
for(let i=1;i<=10;i++){
    document.write(`<br>${num}*${i}=${num*i}`)
}

// Used for writing table 
// On console
var number=prompt("Enter your number")
for(let i=1;i<=10;i++){
    console.log(`${number}*${i}=${number*i}`)
}

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


// Ques Write a js program to get the current date
// In the format of dd/mm/yy
const newDate=(newDt= new Date())=>{
    const days=newDt.getDay();
    const month=newDt.getMonth();
    const year=newDt.getFullYear();
    return(`${days}/${month}/${year}`)
};
console.log(newDate());


// let number = [2,3,4,5,6,7,8,9]



//Map filter and reduce
mult=number.map((elem)=>{
    return elem*2
}).filter((elem)=>{
    return elem%2==0
})
console.log(mult)
newNumber= number.reduce((sum,index)=>{
    return sum=sum+index
},0)
console.log(newNumber)


// find the sum(2)(3)(4);

function num1(a){
    return function num2(b){
        return function num3(c){
            console.log(a+b+c)
        }
    }
}
num1(2)(3)(4);