const prompt = require('prompt-sync')();

let i = 1;
let n;
let p;
const numeros = [];

while (true) {
    n = parseInt(prompt(`Insira o numero ${i}: `));
    if (n === 0) break;
    p = parseInt(prompt(`Insira o peso do numero ${i}: `));
    numeros.push({ numero: n, peso: p });
    i++;
}

const calculaMediaPonderada = (numeros) => {
    const somaProdutos = numeros.reduce((acc, { numero, peso }) => acc + numero * peso, 0);
    const somaPesos = numeros.reduce((acc, { peso }) => acc + peso, 0);
    return somaProdutos / somaPesos;
};

console.log(`A média ponderada dos números é: ${calculaMediaPonderada(numeros)}`);
