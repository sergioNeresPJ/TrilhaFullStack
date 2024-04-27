const prompt = require('prompt-sync')();

let i=0;
let n;
const numeros = [];

while (n != 0){
    n = parseInt(prompt("Insira o numero:"));
    numeros.push(n);
}

const calculaMedia = (numeros) => {
    const total = numeros.reduce((acc, n) => acc + n, 0);
    return total / numeros.length;
}

console.log(`A média aritmética dos números é de: ${calculaMedia(numeros)}`)