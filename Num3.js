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




