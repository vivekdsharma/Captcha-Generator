const body = document.body
const refresh= document.getElementById('refresh')
const submit= document.getElementById('submit')
const input = document.getElementById('tobeentered').value

const container= document.getElementById('container')
const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let captcha=""

const heading = document.getElementById("heading")

body.onload = function generateCaptcha(){

    const clength = 6 ;

    for (let i = 0; i < clength; i++) {
       const randomIndex=Math.floor(Math.random()*char.length)
       captcha += char.substring(randomIndex,randomIndex+1)
        
    }

    document.getElementById('_show').value=captcha

    heading.innerText="Captcha Generator"
}


submit.onclick= function CheckInfo(){

    
    if (input === "") {
        heading.innerText="Please Enter The Captcha First"
        container.style="border-color:yellow"

    }

    else if( input === captcha){
        heading.innerText="Congratulations"
        container.style="border-color:green"
    }

    else{
        heading.innerText="Try Again"
        container.style="border-color:red"
}
}



refresh.onclick= function refreshCaptcha(){
    
    const clength = 6 ;
    let Newcaptcha =""

    for (let i = 0; i < clength; i++) {
       const randomChar= char [Math.floor(Math.random()*char.length)]
       Newcaptcha += randomChar
        
    }
    captcha=Newcaptcha

    document.getElementById('_show').value=captcha
}


