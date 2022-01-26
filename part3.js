// 1.Js program to find the number of even digits in a array of integer 

// This will not work
// const countevenNumb=(input)=>{
//         input.filter((num)=>{
//         return num%2===0;
//     })
// }

let countevenNumb = (input)=> input.filter((num)=>num%2===0);

console.log(countevenNumb([2,3,4,5,6,7,8,9]));

let array = [2,3,4,5,6,7]
const filterFunc=array.filter((num)=>{
    return num%2===0;
})
console.log(filterFunc);

// 2.Write a js program to find the number of even values upto a given number
//Hint: taken 10 means even numbers btw 1 to 10 , 5 so it will return 5


let evenNumb= (input)=>input.filter((num)=>num%2===0).length;
let createArray=(num)=>{
    const returnArray=[];
    for(let i=0;i<num;i++){
        returnArray.push(i)
    }
    return returnArray
}

console.log(evenNumb(createArray([10])));

// console.log(evenNumb([1,2,3,4,5,6,7,8,9,10]));

// 3. Write a js program to check whether a given array of integer is sorted in ascending order

 const arrayNew=(input)=>{
    for(i=0;i<input.length;i+=1)
    if(input[i+1]<input[i]){return false}//for checking whether the given array is in ascending order
 }
 console.log(arrayNew([2,3,4,5,6,2]))

//  4. Write a js program to get the largest even number from the given array
// Using spread function of ES6 and filter for even numbers
const largestEven=(arr)=>Math.max(...arr.filter((num)=>num%2===0))
console.log(largestEven([2,3,4,5,6,7,8,9]))