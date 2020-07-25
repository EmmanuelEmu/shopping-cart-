//Amount of accessories
//decreasing amount and cost of accessories
function decreaseAccessories(minus, minusCost, price) {
    currentNumber = minus.value;
    if(currentNumber<=0){
        minus.innerHTML=0;
    }
    else{
        currentNumber--;
        minus.value = currentNumber;
        let currentCost = minusCost.innerHTML;
        currentCostNumber = parseFloat(currentCost);
        let totalCost = currentCostNumber;
        totalCost = totalCost - price;
        minusCost.innerHTML = totalCost;
    }
}
//increasing amount and cost of accessories
function increaseAccessories(plus, plusCost, price) {
    currentNumber = plus.value;
    currentNumber++;
    plus.value = currentNumber;
    let currentCost = plusCost.innerHTML;
    currentCostNumber = parseFloat(currentCost);
    let totalCost = currentCostNumber;
    totalCost = totalCost + price;
    plusCost.innerHTML = totalCost;
}
//common function for mobile phone cost adding and deducting 
let phoneNumber = document.getElementById("phoneAmount");
let totalCost = document.getElementById("mobileCost");
let perCost = 1219;
//Decreasing of phone 
document.getElementById("phoneDecrease").addEventListener("click", function () {
    decreaseAccessories(phoneNumber, totalCost, perCost);
})
//Increasing of phone
document.getElementById("phoneIncrease").addEventListener("click", function () {
    increaseAccessories(phoneNumber, totalCost, perCost);
})

//function for phone case 
//common function for phone case 

let phoneCaseNumber = document.getElementById("caseNumber");
let totalCaseCost = document.getElementById("caseCost");
let perCaseCost = 59;

//decreasing of case
document.getElementById("decreaseCase").addEventListener("click", function () {
    decreaseAccessories(phoneCaseNumber, totalCaseCost, perCaseCost);
})

//Increasing of case 
document.getElementById("increaseCase").addEventListener("click", function () {
    increaseAccessories(phoneCaseNumber, totalCaseCost, perCaseCost);
})
