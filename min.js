const doller=document.querySelector("#inputText")
const personnumber=document.querySelector("#personNumber")
const amountpeople=document.querySelector(".amountPeople")
const totalpeople=document.querySelector(".totalPeople")
const percent=document.querySelectorAll(".number")
const reset=document.querySelector(".reset")
const number2=document.querySelector("#number")
const custom=document.querySelector(".custom")
// const input=document.querySelectorAll(["input"])


// create event and function
    for(let i =0;i<percent.length;i++){
        percent[i].addEventListener("click",()=>{
            validation()/* validate form person*/ 
            let amount= (doller.value * percent[i].value)/personnumber.value;
            amountpeople.innerText=amount+ "$"
            let total=(doller.value * percent[i].value)
            totalpeople.innerText=total+ "$"

        })
    }

//  empty form
reset.addEventListener("click",()=>{
    totalpeople.innerText="0.0";
    amountpeople.innerText="0.0"
})
// calc custom persond

custom.addEventListener("onchange", ()=>{
    let amount = (dollar.value  / 100 ) * custom.value /personnumber.value;/* there is a problem in run this function */
    amountpeople.innerText=amount+ "$"
    let total=doller.value * custom.value.value
      totalpeople.innerText=total+ "$"
})

// validation
const validation =()=>{
    if(personnumber.value==="" &&  doller.value===""){
        alert("لطفا کادر ها را پر کنید ")
     }
}