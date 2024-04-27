const prompt = require('prompt-sync')();

const n1 = parseInt(prompt("Insira o primeiro numero:"));

const n2 = parseInt(prompt("Insira o segundo numero:"));

const numeros = [n1, n2];

numeros.sort();

console.log(`Numeros em ordem: ${numeros}`)