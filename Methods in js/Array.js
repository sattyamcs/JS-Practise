console.log("Array Testing")

let a = [1,2,3,4,5,6,7,8]

// Methods of arrays

// 1.MAP // returns a new array by applying a function to the each element of the array.
// SYNTAX== Array.map((value,index,array)=>{Yours function to be applied})
let mapArray = a.map((value)=>value*2)
console.log(mapArray)//2,4,6,8,10,12,14

// 2.Reduce == Runs a function on each element of a array to produce(or reduced to ) the single value
// SYNTAX == Array.reduce((accum,value,index,array)=>{Your code},0)// Accum is the intial value that is given or we can take the first value
let sum = a.reduce((sum,value)=>{
    return sum=sum+value
})
console.log(sum);//36

// 3.Filter== returns a new array with array element that passes the test given by a function 
// SYNTAX== Array.filter((value,index,array)=>{MY code})
let evenNumbers = a.filter((value)=>{return value%2==0})
console.log(evenNumbers)//2,4,6,8

// 4.Array.find()== it returns the value of first element that passes the test otherwise it returns undefined 
//Executes a function on each element of the array
//It doesnot change the array
let valueFind = a.find((num)=>num<6)
console.log(valueFind)//1 value of the only first element

// 5.Array.from() == This returns length with the number of element OR returns amn object with the length property
let arrayFrom = Array.from(a)
console.log(arrayFrom) //(8)>[1,2,3,4,5,6,7,8]


// 6.Array.join() == converts an array to string 
let arrayJoin = a.join('')
console.log(arrayJoin) // 12345678

// 7.Array.every() == runs an fucntion on each element of the array and returns true if all are true otherwise return false 
let arrayEvery = a.every((num)=>num%2==0)
console.log(arrayEvery)//false because we dont have all the numbers even

// 8.Array.reverse()== used to reverse the array 
let arrayReverse = a.reverse();
console.log(arrayReverse) //[8,7,6,5,4,3,2,1]

// 9.Array.some() == This methods check if an array element passed the test and return value in boolean if any of the element pass the test
let arraySome = a.some((num)=>num%2==0)
console.log(arraySome) //true

// 10.Array.sort() == sort the elements of any arrayEvery, chnages the original array,  
let arraySort = a.sort((a,b)=>a-b)//ascending order
console.log(arraySort)
let highestNumber = arraySort[arraySort.length-1]//Highest number of an array , first make in ascending then length-1
console.log(highestNumber)

let arraySort2 = a.sort((a,b)=>b-a)//descending order
console.log(arraySort2)
let smallestNumber = arraySort2[arraySort2.length-1] //smallest number of an array, first descending then apply array.length-1
console.log(smallestNumber)
// ALSO DONE WITH THE rEDUCE METHOD 
let largestNumber1 = a.reduce((accum,value)=>accum>value?accum:value)
console.log(largestNumber1)
let smallestNumber1 = a.reduce((accum,value)=>accum<value?accum:value)
console.log(smallestNumber1)

// 11.Array.splice()== Splice method add or removes the element , overwrites the original array 
// SYNTAX arrayEvery.splice(index for where it is applicable,how many to delete,item1......a.itemX(New elements to be added))
// Here the elements added to the old array and areray got changed 
let newArray = ["Sattyam","Singh","Chauhan"]
let arraySplice = newArray.splice(2,1,"from","Farrukhabad")
console.log(arraySplice) //returns the deleted element only
console.log(newArray) //returns a new array with added elemnets

// 12.vlaueOf() == returns the same array itself 
let arrayValueOf = a.valueOf()
console.log(arrayValueOf) //returns the array itself


// 13.Array.slice()== returns the new array with the sliced element of the array 
// SYNTAX arrayEvery.slice(start,end) 
let arraySlice = a.slice(1,5)
console.log(arraySlice)// >7,6,5,4


// 14.Array.concat == it joins two or more array 
let a1 = ["Sattyam"]
let a2 = ["Singh"]
let a3 = ["Chauhan"]
let arrayConcat = a1.concat(a2,a3)
console.log(arrayConcat)


// 15.Array.copyWithin() == copies element of the array to the given position of an array 
// SYNATX arrayConcat.copyWithin(target,start,end)
let a4 = [1,2,3,4,5,6]
let arrayCopywithin = a4.copyWithin(2,0,2)
console.log(arrayCopywithin);


// 16.Array.forEach == calls a function for each element of an array 
// SYNTAX arrayConcat.forEach(function(value,index,array),thisvalue)
let arrayForEach = a4.forEach((value,index)=>console.log(`${index} of ${value}`))
console.log(arrayForEach)

// 17.Array.includes()== returns true if array conatains a specified value 
// SYNTAX arrayConcat.includes(element,start)
let arrayIncludes = a4.includes("Sattyam",1)
console.log(arrayIncludes)// false

// 18.Array.indexOf()== returns the first index of the specified value , return -1 if value not found , start from a specific index and searches from left to right 
// SYNTAX == arrayConcat.indexOf(item,start)
let arrayIndex = a4.indexOf(4);
console.log(arrayIndex) // return -1 because element not found in array

// 19.Array.isArray() == return true if the object is an array otherwise false 
// SYNtAX Array.isArray(obj);
let arrayIsArray = Array.isArray(a4)
console.log(arrayIsArray) // true because a4 is an array

// 20.Array.length == returns the length of an array , number of elements in a array
let arrayLength = a4.length 
console.log(arrayLength) //6

// 21.array.lastIndexOf() == returns the last index of an specified element or return -1 if not found, start searching form right to left  
// SYNTAX array.lastIndexOf(item,start)

