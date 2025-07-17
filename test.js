const {sum, fromEuroToDollar, fromDollarToYen, oneEurols} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const dollars =  fromEuroToDollar(3.5)
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * oneEurols.USD;
    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("one dollar should be 156.5 yenes", function () {
    //Importo la funcion desde app.js
    const yenes= fromDollarToYen(1);
    // Uso la funcion como debe ser usada
    const expected = (1/oneEurols.USD) * oneEurols.JPY;
    // Si 1 euro son 1.07 dólares, u 1 euro son 156.5 yenes, entonces 1 dólar son (1/1.07) * 156.5 yenes
    expect(yenes).toBe(expected);
    
});