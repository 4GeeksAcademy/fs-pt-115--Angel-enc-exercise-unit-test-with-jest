
const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))


let oneEuroIs ={
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(dollar){
    let valueInEuro = dollar / oneEuroIs.USD
    return valueInEuro * oneEuroIs.JPY;
}

function fromYenToPound(yen){
    let valueInEuro = yen / oneEuroIs.JPY
    return valueInEuro * oneEuroIs.GBP;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }