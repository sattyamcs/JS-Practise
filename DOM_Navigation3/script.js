console.log("Testing")

// 1.A new feature has to been added to the pro plan '24/7 Phone Support' Add this using js in pro plan 

document.querySelector('#pro-plan ul')
.insertAdjacentHTML('beforeend','<li>24/7 Phone support</li>')


// 2.To make the ordering more logical using javascript make the basic plan to be before the pro plan 
const basic = document.querySelector('#basic-plan')
const pro = document.querySelector('#pro-plan')
const parent = basic.parentNode;
parent.insertBefore(basic,pro)
// OR
document.querySelector('.card-deck').style['flex-direction']='row-reverse';



// 3.To make the pro plan more stronger , update the current button with #007bff background and white color     
const newButton = document.querySelector('#pro-plan button')
newButton.style.backgroundColor='#007bff'
newButton.style.color='#fff'
newButton.style.cursor='pointer'
newButton.innerText='Buy Now'
newButton.style.fontSize = 'x-large'

// OR
newButton.classList.add('btn-primary')
newButton.classList.add('btn-online-primary')

// 4.There is a special offer on the moment that offering 50% more storage on the basic plan and 25% on the pro plan . Update the basic and the pro plan using the javascript


const basicPlanstorage = document.querySelector('#basic-plan .storage-amount')
const proPlanstorage = document.querySelector('#pro-plan .storage-amount')

basicPlanstorage.innerText = basicPlanstorage.innerText * 1.5
proPlanstorage.innerText = proPlanstorage.innerText * 1.25



// 5.You have been asked to toggle/radio-box for annual and monthly payments for the basic and the pro plan . add a radio button to toggle between monthly and the annual payment options and adjust the prices shown for both plans if the annual option is selected( give two months free if the customer pay annualy) 
document.querySelector('.container')
.insertAdjacentHTML('afterbegin',`<label>
Monthly
<input id="monthly-pricing" type='radio' name='pricing' value='monthly' checked>
</label>
<label>
Annualy
<input id="annualy-pricing" type='radio' name='pricing' value='annualy' checked>
</label>`
);
const pricing = {
    monthly:{
        basic:'10/month',
        pro:'30/month'
    },
    annualy:{
        basic:'100/year',
        pro:'300/year'
    }
}

const changePricing = (event)=>{
    const selection = event.target.value 
    document.querySelector('#basic-plan .pricing').innerText=pricing[selection].basic
    document.querySelector('#pro-plan .pricing').innerText=pricing[selection].pro
}

Array.from(document.querySelectorAll('input[type="radio"]'))
.forEach(radio=>radio.addEventListener('change',changePricing))