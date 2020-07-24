//Amount of accessories
//decreasing amount and cost of accessories
function decreaseAccessories() {
    currentNumber = document.getElementById("phoneAmount").value;
    currentNumber--;
    document.getElementById("phoneAmount").value = currentNumber;
    let currentCost = document.getElementById("mobileCost").innerHTML;
    currentCostNumber = parseFloat(currentCost);
    let totalCost = currentCostNumber;
    totalCost = totalCost-1219;
    document.getElementById("mobileCost").innerHTML = totalCost;
}
//increasing amount and cost of accessories
function increaseAccessories() {
    currentNumber = document.getElementById("phoneAmount").value;
    currentNumber++;
    document.getElementById("phoneAmount").value = currentNumber;
    let currentCost = document.getElementById("mobileCost").innerHTML;
    currentCostNumber = parseFloat(currentCost);
    let totalCost = currentCostNumber;
    totalCost = totalCost+1219;
    document.getElementById("mobileCost").innerHTML = totalCost;
}

//Decreasing of phone 
document.getElementById("phoneDecrease").addEventListener("click",function(){
    decreaseAccessories();
})
//Increasing of phone
document.getElementById("phoneIncrease").addEventListener("click",function(){
    increaseAccessories();
})