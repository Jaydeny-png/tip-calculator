function calculateAndDisplay()
{
    let bill = parseFloat(document.getElementById("totalBill").value)
    let numOfPpl = parseInt(document.getElementById('numofPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    let tip = calculateTip(bill, serviceQuality)
    let totalBIll = calcualteTotalBill(bill, tip)
    let amtPerPers = calculateAmtperPers(bill, numOfPpl)

     // Display the results in the HTML document
  document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
  document.getElementById('totalBillResult').innerText =
    'Total Bill: $' + totalBill.toFixed(2)
  document.getElementById('amtPerPersonResult').innerText =
    'Amount per person: $' + amtPerPers.toFixed(2)

}













/* let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great'){
        return bill * .2
    } else if (quality === 'Good'){
        return bill * .15
    } else if(quality === 'Poor'){
        return bill * .10
    }else {
            //alert type smth later
    }
}

let tip = calculateTip(serviceQuality)


function calculateTotalBill(bill, tip){
    return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calcAmtPerPrs(totalBill, numOfPpl){
    return totalBill / numOfPpl
}

let amtPerPers = calcAmtPerPrs(totalBill, numOfPpl)

console.log('Tip: $' + tip)
console.log('Total Bill: $' + totalBill);
console.log('Amount per person: $' + amtPerPers); */