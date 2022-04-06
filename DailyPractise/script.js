//Create online Loader
window.onload=()=>{
    main()
}
function main(){
    //Taking refrences for button 
    // Buttons Refrences
    const textColor=document.getElementById('textColor')
    const bodyColor=document.getElementById('bodyColor')
    // Body and text refrences
    const body = document.getElementsByTagName('body')[0]
    const heading=document.getElementsByTagName('h1')[0]
  
    //For Text Color
    textColor.addEventListener('click',function(){
        console.log('Text Clicked')
        const bgColor= generateRGBColor();
        heading.style.color=bgColor;
       
    })
    //For Body Color
    bodyColor.addEventListener('click',function(){
        console.log('Body Clicked')
        const bgColor= generateRGBColor();
        body.style.background=bgColor;
    })
    //Random color generator function
    function generateRGBColor(){
        //min and max rgb color code is rgb(0,0,0) and rgb (225,225,225)
        const red=Math.floor(Math.random()*225)
        const green=Math.floor(Math.random()*225)
        const blue=Math.floor(Math.random()*225)

        return `rgb(${red},${green},${blue})`

    }
}