console.log("Testing")

// 1.add label to each input fields : username password confirmpassword 

// This can be done by using insertAdjacentHTML method that is used to insert html to the specific part 
document.querySelector('.username').insertAdjacentHTML('beforebegin','<label for="username">Username: </label>')
document.querySelector('.password').insertAdjacentHTML('beforebegin','<label for="username">Password: </label>')
document.querySelector('.confirmPassword').insertAdjacentHTML('beforebegin','<label for="username">ConfirmPassword: </label>')


// 2.add a required validation to each input that shows an error message next to the entry if it doesnot have any text entered 

const checkInput = (event)=>{
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'))
    if(event.target.value === '' && !errorElement.length){
        event.target.insertAdjacentHTML('afterEnd','<span style="color:red";>Required Field :</span>')
    }
    if(errorElement && event.target.value !==''){
        errorElement.forEach(elem=>elem.remove());
    }
};

document.querySelector('.username').addEventListener('blur',checkInput)


// 3.Add a further validation to check if the user input in the passoword should match to the confirm password otherwise show a message 

document.querySelector(".confirmPassword").addEventListener('blur',(event)=>{
    if(event.target.value !== document.querySelector(".password").value){
        event.target.insertAdjacentHTML('afterEnd','<span style="color:red";>Password Not Matching</span>');
    }
});

// 4.Ensure that the submit button is disabled till the all the  details of the form is filled 
const btn = document.querySelector(".btn");
btn.setAttribute('disabled','disabled');

    document.querySelector("#registration-form")
    .addEventListener('change',(event)=>{
        const formIsFilled = Array.from(document.querySelectorAll('input'))
        .every(input=>input.value);
        if(formIsFilled){
            btn.removeAttribute('disabled');
        }else{
            btn.setAttribute('disabled','disabled')
        }
    })