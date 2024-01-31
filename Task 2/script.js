
// Hardcoded list of currencys
let currencysList = ["ARS", "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "INR", "ISK", "JPY", "KRW", "NZD", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD"]
let currency = document.getElementById("currency");
let currencyValue = document.getElementById("value");

let currencyValid = false
let valueValid = false

// Validation for the currency input
function currencyValidation() {
    for (let i=0; i<currencysList.length; i++) {
        if (currencysList[i] == currency.value) {
            currencyValid = true
            console.log("worked")
            document.getElementById("currency").style.background = "white";
            currencyValid = true
            break

        }
        else {
            document.getElementById("currency").style.background = "red";
            currencyValid = false
        }
    }

    enableSubmit()
}

// Validation for the value input
function valueValidation() {
    
    if (isNaN(currencyValue.value)) {
        document.getElementById("value").style.background = "red";
        valueValid = false
    }
    else if (currencyValue.value > 0) {
        console.log("worked")
        document.getElementById("value").style.background = "white";
        valueValid = true
    }
    else {
        document.getElementById("value").style.background = "red";
        valueValid = false
    }

    enableSubmit()
}


// If both inputs are valid enables the submit button
function enableSubmit() {
    let submitButton = document.getElementById("submit");
    if ((currencyValid) && (valueValid)) {

        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}