let myDetails={
    name:"Sattyam Thakur",
    age:26
}
let bfDetails = myDetails;

bfDetails.age=29;

console.log(myDetails.age)
console.log(bfDetails.age)


// Function for printing a table using for loop
function table(input){
for(a=1;a<=10;a++){
    document.write(`${input}*${a}=${input*a}<br>`)
}
}
table(4);


//Console a table in simple
for (var i = 1; i <=10; i++){
    let num =6;
    console.log(`${num}*${i} = ${num*i}`)
}




