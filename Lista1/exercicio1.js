const prompt = require('prompt-sync')();

const tCelsius = parseInt(prompt("Insira a temperatura em Graus Celsius (ºC):"));

const celsius2Fahrenheit = (celsius) => {
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};

const tFahrenheit = celsius2Fahrenheit(tCelsius);

console.log(`A temperatura convertida para Fahrenheit é: ${tFahrenheit}`);