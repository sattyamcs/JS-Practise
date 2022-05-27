console.log("Console Testing")


// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


let today = new Date();
// console.log(today)
let currentDay = today.getDay();
console.log(currentDay)
let dayList = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
console.log(`Today is ${dayList[currentDay]}`)

let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()

let day_Night = 'AM'

if(hours>12){
    day_Night = 'PM'
    hours = hours - 12;
}
console.log(`The Time is ${hours}${day_Night} : ${minutes} : ${seconds}`)

2.//Function for printing the current window
function buttonClick (){
    window.print();
}

// 3. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
let month = today.getMonth()
let day = today.getDate()
let year = today.getFullYear()

console.log(`${month}-${day}-${year}`)
console.log(`${month}/${day}/${year}`)
console.log(`${day}/${month}/${year}`)


// 4.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
let s1=5;
let s2=6;
let s3=7;

// Semiperimeter = s1+s2+s3/2;
let s = (s1+s2+s3)/2;
// console.log(s)
let AreaOfTriangle = Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)))
console.log(AreaOfTriangle)

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

// This function can be used for moving string from left to right 
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length-1] + text.substring(0, text.length - 1);
  textNode.data = text;
},500);
}

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const isLeapYear = (year)=>{
   return year % 4 === 0;
}
console.log(isLeapYear(2019))
console.log(isLeapYear(2020))

// 7.Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
for(year=2014;year<=2050;year++){
    var d= new Date(year,0,1); //(yy,mm,dd)
    if(d.getDay()===0){
        console.log(`The given year is Sunday ${year}`)
    }
}

// 8.Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
// let num = Math.ceil(Math.random()*10)
// console.log(num)
// let gNum = prompt("Hello Enter your number")
// if(gNum == num){
//     Console.log("Yay! Its a Match")
// }else{
//     console.log("Sorry! Doesnot Match")
// }

// 11.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function farToCel(f){
    let fToC = (f - 32) * 5 / 9;
    console.log(`The farehnheit to celcius is ${fToC}`)
}
farToCel(52);
function celToFar(c){
    let cTof = c * 9 / 5 + 32;
    console.log(`The celcius to farehneit is ${cTof}`)
}
celToFar(52);

// 12. Write a JavaScript program to get the website URL (loading page). 
// Both used to get the url of the current webpage
 console.log(window.location.href)
 console.log(document.URL)


// 13.Write a JavaScript exercise to create a variable using a user-defined name
 