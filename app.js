
const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))


let oneEurols ={
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEurols.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(dollar){
    let valueInEuro = dollar/oneEurols.USD;
    return valueInEuro * oneEurols.JPY;
}


const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen/ oneEurols.JPY;
    return valueInEuro * oneEurols.GBP;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEurols }