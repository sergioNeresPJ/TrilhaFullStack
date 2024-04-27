const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Insira o numero:"));

for (i = 0; i < 10; i++) {
    console.log(`${i+1}:${numero}`);
}