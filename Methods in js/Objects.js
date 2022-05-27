// seal() allows changes to the existing properties of an object whereas Object. freeze() does not allow so. Object. freeze() makes an object immune to everything even little changes cannot be made.


let profile = {
    name:"Sattyam"
}

// Object.freeze(profile); // This method will not allow you to add new properties
Object.seal(profile); // This method will  allow you to modify the object properties but not allow you to add new properties.

profile.name="Saurabh"
// profile.age=25; // adds new property to the object 
console.log(profile)

console.log(Math.max())
console.log(Math.min())