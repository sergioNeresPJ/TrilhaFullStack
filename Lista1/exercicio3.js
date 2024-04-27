const prompt = require('prompt-sync')();

let a = parseInt(prompt("Insira o valor de a:"));
let b = parseInt(prompt("Insira o valor de b:"));
let c = parseInt(prompt("Insira o valor de c:"));
let d = parseInt(prompt("Insira o valor de d:"));

d = a + b + c;
c = 0.12 * c;
b = 3 * b;
a = a + 25;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
