const registerBtn = document.querySelector("#registerBtn")
const clearBtn = document.querySelector("#clearBtn")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const swiperdiv = document.querySelector("#swiperdiv")
const swiper = document.querySelector("#swiper")
const salaryInput = document.querySelector("#salaryInput")
const incomD = document.querySelector("#incomD")
const socialD = document.querySelector("#socialD")
const flagD = document.querySelector("#flagD")
const clearBalancD = document.querySelector("#clearBalancD")

let salaryvalue = 150000

salaryInput.value = salaryvalue

let a = 0
let salPercent = 0
let socialPercent = 0

let income,social,flag

const Salary = {
    incomeTax : function(salary){
        if(salPercent === 0){
            income = (salary*21)/100
            incomD.innerHTML = income
           }else{
            income = (salary*10)/100
            incomD.innerHTML = income
           }
    },
    socialTax : function(salary){
        if(socialPercent === 0){
            social = (salary*4.5)/100
            socialD.innerHTML = social
           }
           else if(socialPercent === 1){
            social = (salary*5)/100
            socialD.innerHTML = social
           }
           else if(socialPercent === 2){
            social = 0
            socialD.innerHTML = social
           }
             
    },
    flagTax : function(salary){
        if(salary <= 0){
            flag = 0
            flagD.innerHTML = flag
        }
        else if(salary <= 100000){
            flag = 1500
            flagD.innerHTML = flag
        }else if(salary > 100000 && salary <= 200000){
            flag = 3000
            flagD.innerHTML = flag
        }else if(salary > 200000 && salary <= 500000){
            flag = 5500
            flagD.innerHTML = flag
        }else if(salary > 500000 && salary <= 1000000){
            flag = 8500
            flagD.innerHTML = flag
        }else if(salary > 1000000){
            flag = 15000
            flagD.innerHTML = flag
        }
    }
}


function clearbalance(allbalance,tax1,tax2,tax3){
    return allbalance - (tax1 + tax2 + tax3) 
 }

Salary.incomeTax(+salaryInput.value)
Salary.socialTax(+salaryInput.value)
Salary.flagTax(+salaryInput.value)

clearBalancD.innerHTML = clearbalance(+salaryInput.value,income,social,flag)















registerBtn.addEventListener("click",function(){
    registerBtn.style.background = "#369"
    registerBtn.style.color = "white"
    clearBtn.style.background = "rgb(243, 243, 243)"
    clearBtn.style.color = "rgb(153, 153, 153)"
})


clearBtn.addEventListener("click",function(){
    clearBtn.style.background = "#369"
    clearBtn.style.color = "white"
    registerBtn.style.background = "rgb(243, 243, 243)"
    registerBtn.style.color = "rgb(153, 153, 153)"
})















swiperdiv.addEventListener("click",function(){
    if(a === 0){
        swiper.style.background = "#69b"
        swiper.style.left = "30px" 
        a = 1
        salPercent = 1
        
    }else{
        swiper.style.background = "white"
        swiper.style.left = "0px" 
        a = 0
        salPercent = 0
        
    }
    Salary.incomeTax(+salaryInput.value)
    clearBalancD.innerHTML = clearbalance(+salaryInput.value,income,social,flag)
    
})





button1.addEventListener("click",function(){
    button1.style.background = "#ff4545"
    button1.style.color = "white"
    button2.style.background = "rgb(243, 243, 243)"
    button2.style.color = "rgb(153, 153, 153)"
    button3.style.background = "rgb(243, 243, 243)"
    button3.style.color = "rgb(153, 153, 153)"

    socialPercent = 1
    Salary.socialTax(+salaryInput.value)
    clearBalancD.innerHTML = clearbalance(+salaryInput.value,income,social,flag)
})

button2.addEventListener("click",function(){
    button2.style.background = "#ff4545"
    button2.style.color = "white"
    button1.style.background = "rgb(243, 243, 243)"
    button1.style.color = "rgb(153, 153, 153)"
    button3.style.background = "rgb(243, 243, 243)"
    button3.style.color = "rgb(153, 153, 153)"

    socialPercent = 0
    Salary.socialTax(+salaryInput.value)
    clearBalancD.innerHTML = clearbalance(+salaryInput.value,income,social,flag)
})

button3.addEventListener("click",function(){
    button3.style.background = "#ff4545"
    button3.style.color = "white"
    button2.style.background = "rgb(243, 243, 243)"
    button2.style.color = "rgb(153, 153, 153)"
    button1.style.background = "rgb(243, 243, 243)"
    button1.style.color = "rgb(153, 153, 153)"

    socialPercent = 2
    Salary.socialTax(+salaryInput.value)
    clearBalancD.innerHTML = clearbalance(+salaryInput.value,income,social,flag)
})












/*

function salaryCounter(salary){
    let incomeTax,socialTax,flagTax
   if(salPercent === 0){
    incomeTax = (salary*21)/100
    incomD.innerHTML = incomeTax
   }else{
    incomeTax = (salary*10)/100
    incomD.innerHTML = incomeTax
   }

   if(socialPercent === 0){
    socialTax = (salary*4.5)/100
    socialD.innerHTML = socialTax
   }
   else if(socialPercent === 1){
    socialTax = (salary*5)/100
    socialD.innerHTML = socialTax  
   }
   else if(socialPercent === 2){
    socialTax = 0
    socialD.innerHTML = socialTax
   }
   
   flagTax = (salary*1.5)/100
   flagD.innerHTML = flagTax

   let allBalance = salary - (incomeTax+socialTax+flagTax)
   clearBalancD.innerHTML = allBalance


}

salaryCounter(+salaryInput.value)

*/




salaryInput.addEventListener("keyup",function(){
  let inpnumarr = salaryInput.value.match(/[A-Za-z]/g)
  if(inpnumarr === null){
    Salary.incomeTax(+salaryInput.value)
    Salary.socialTax(+salaryInput.value)
    Salary.flagTax(+salaryInput.value)

    clearBalancD.innerHTML = clearbalance(+salaryInput.value,income,social,flag)
  }
})









