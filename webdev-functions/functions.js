function evaluateString(string) {
    if(string) {
        return 'The string has a value!';
    } else {
        return 'What String?';
    }
}

let first = evaluateString('');
let second = evaluateString('This one!');
console.log(first);
console.log(second);

function square(number) {
    return number*number;
}

console.log(square(2));
let result = square(3);
console.log(result);

function dayofWeek(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

let now = new Date();
console.log('Happy ' + dayofWeek(now) + '!');

let name = 'Chris';
console.log(`My name is ${name}.`);

function calculateSalesTax(price, tax) {
    console.log(`price is $${price}`);
    console.log(`tax is $${tax}`);
    return price*tax;
}

let result2 = calculateSalesTax(10, 0.15);
console.log(`Sales tax is $${result2}`);

function calculateSalesTax2(prices, taxes) {
    let result3 = [];
    for (let i = 0; i<prices.length; i++) {
        result3.push(prices[i]*taxes);
    }
    return result3;
}

console.log(calculateSalesTax2([1, 5, 10], 0.15));
console.log(calculateSalesTax2(0.15, [1, 5, 10]));