const calculate = document.getElementById("calculate")

let docalc = function(days){
  let total = 0;
  for (let theNumber = Number(days); theNumber>0;   theNumber -=1){
   total = total + ((theNumber + 1)*(theNumber/2))
}
return total;}

let today = function(days){
return (days+1)*(days/2)
}

calculate.addEventListener("click",() => {
const inputField = document.getElementById("days").value
if (!parseInt(inputField,10) || parseInt(inputField,10)>12) {
alert("Please enter a number between 1 and 12")
return
}
const doingCalc = docalc(inputField)
const answer = document.getElementById("result")
answer.innerHTML = doingCalc
const todaysPresents = today(parseInt(inputField,10))
const todaysPresentsAnswer = document.getElementById("today")
todaysPresentsAnswer.innerHTML = todaysPresents
})
