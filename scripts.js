const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    
const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-toconvert")
const currencyValueConverted =document.querySelector(".currency-value-converted")

const dolarToday= 5.2
const euroToday= 6.2
const libraToday= 7.4

if(currencySelect.value === "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
}
if(currencySelect.value === "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR",
    }).format(inputCurrencyValue / euroToday)
}

if(currencySelect.value === "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP",
    }).format(inputCurrencyValue / libraToday)
}
currencyValueToConvert.innerHTML= new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(inputCurrencyValue)


currencyValueConverted.innerHTML= new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"
}).format(convertedValue)

currencyValueConverted.innerHTML= new Intl.NumberFormat("en-GB",{
    style: "currency",
    currency: "EUR"
}).format(convertedValue)

currencyValueConverted.innerHTML= new Intl.NumberFormat("en-UK",{
    style:"currency",
    currency:"GBP"
}).format(convertedValue)

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)