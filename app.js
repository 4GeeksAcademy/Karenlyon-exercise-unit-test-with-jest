let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(value){
    let valueInDollar = value / oneEuroIs["USD"];
    let valueInYen = valueInDollar * oneEuroIs ["JPY"]
    return valueInYen;
}

const fromYenToPound = function(value){
    let valueInEuro = value / oneEuroIs["JPY"]
    let valueInPound = valueInEuro * oneEuroIs["GBP"]
    return valueInPound
}

module.exports = {  fromEuroToDollar, fromDollarToYen, fromYenToPound };