const doller=document.querySelector("#inputText")
const personnumber=document.querySelector("#personNumber")
const amountpeople=document.querySelector(".amountPeople")
const totalpeople=document.querySelector(".totalPeople")
const persond=document.querySelectorAll(".number")
const reset=document.querySelector(".reset")
const number2=document.querySelector("#number")
const custom=document.querySelector(".custom")
const input=document.querySelectorAll(["input"])


// create event and function
    for(let i =0;i<persond.length;i++){
        persond[i].addEventListener("click",()=>{
            let amount= (doller.value * persond[i].value)/personnumber.value;
            amountpeople.innerText=amount+ "$"
            let total=(doller.value * persond[i].value)
            totalpeople.innerText=total+ "$"

        })
    }

//  
reset.addEventListener("click",()=>{
    totalpeople.innerText="0.0";
    amountpeople.innerText="0.0"
})

custom.addEventListener("onchange", ()=>{
    let amount = (dollar.value  / 100 ) * custom.value /personnumber.value;/* there is a problem in run this function */
    amountpeople.innerText=amount+ "$"
    let total=doller.value * custom.value.value
      totalpeople.innerText=total+ "$"
})