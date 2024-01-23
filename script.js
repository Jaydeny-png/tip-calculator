function calculateAndDisplay() {
    let bill = parseFloat(document.getElementById("totalBill").value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(bill, numOfPpl)

    // Display the results in the HTML document
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText =
        'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText =
        'Amount per person: $' + amtPerPers.toFixed(2)

}



//Helper Function to Calculate Tip based on the bill and service Quality
function calculateTip(bill, quality){
    if(quality === 'Great'){
        return bill * .2
    } else if (quality === 'Good'){
        return bill * .15
    } else if(quality === 'Poor'){
        return bill * .10
    }else {
        return 0
            //alert type smth later
    }
}

//Helper Function to Calculate Tip based on the bill and service Quality
function calculateTotalBill(bill, tip){
    return bill + tip
}

function calculateAmtPerPers(totalBill, numOfPpl){
    return totalBill / numOfPpl
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