const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

//extracting first name of peoples form the array
for(elem of people){console.log(elem.firstName)} 

// 1.What the average income of the peoples inside this array 
let avSalary = people.reduce((accum,people)=>accum + parseInt(people.salary),0);
let averageSalary = avSalary/people.length 
console.log(avSalary)
console.log(averageSalary)

// 2.Who are the people that are currently older than 30?
let newRray = people.filter((people)=>new Date().getFullYear() - new Date(people.DOB).getFullYear() > 30)
console.log(newRray)

// 3. Get the list of peoples with the firstName and the lastname.
// we can do it with the map method 
let list = people.map((person)=>`${person.firstName} ${person.lastName}`)
console.log(list)

// 4.Get a list of peolpe in the array ordered from youngest to oldest 
// Arrange in the descending form by using the sort method 
let ytoOldest = people.sort((personaA, personB)=> new Date(personaA.DOB)-new Date(personB.DOB));
console.log(ytoOldest)


// 5. How many peoples are there in each department
console.log(people.reduce((accum,person)=>({...accum,[person.department]:accum[person.department]+1 || 1})),{});