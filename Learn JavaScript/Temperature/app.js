//forcast today in kelvins
const kelvin = 0;
//conversion from kelvin to celsius
const celsius = kelvin-273;
//conversion from celsius to farenheit
let fahrenheit = celsius*(9/5) + 32;
//round down the farenheit
fahrenheit = Math.floor(fahrenheit);
//conversion from celsius to newton
newton = celsius*(33/100);
//round down the newton
newton = Math.floor(newton);
//display fahrenheit and newton
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
