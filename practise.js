let number = [2,3,4,5,6,7,8,9]


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