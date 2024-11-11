function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    let count = sumUAH / chosenCurrency.value;
    return count;
}


console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));