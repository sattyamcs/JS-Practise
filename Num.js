console.log("Sattyam Testing")

// 1.Given a year report if it is a leap year.
function isLeapYear(inp){
return inp%4===0;
}
console.log(isLeapYear(2018));
console.log(isLeapYear(2020));
console.log(isLeapYear(2015));
console.log(isLeapYear(2014));

// 2.Write a js program to covert a comma separted values(csv)string to a 2D Array. A new line indicates a new row in the Array.  
// Example. 
   var str=     `abc,def,ghi
        jkl,mno,pqr
        stu,vwx,yza`;

const parseCSV=(csvString)=>csvString.split('\n');
console.log(parseCSV(str))


// 3.Write a js program to generate a random hexadecimal color code. 
const randomHexDec=()=>Math.floor(Math.random()*16).toString(16) //toString returns the value to the string and 16 means the value after 9 goes to the alphabets.
console.log(randomHexDec())
 
const randomHexColor=()=>"#" + Array.from({length:6}).map(randomHexDec).join('');
//The Array.from() method returns an array from any object with a length property.
console.log(randomHexColor())

function otpGenerator(){
        let number="012356789"
        let otp=""
        for(let i=0;i<6;i++){
            otp+=number[Math.floor(Math.random()*10)]
        }
        return otp;
    }
    
    console.log(otpGenerator());
    


