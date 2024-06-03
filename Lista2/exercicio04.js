/* Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

const prompt = require('prompt-sync')();

const a = parseInt(prompt("Informe o comprimento do segmento a:"));
const b = parseInt(prompt("Informe o comprimento do segmento b:"));
const c = parseInt(prompt("Informe o comprimento do segmento c:"));

if ((a < b + c) && (b < a + c) && (c < a + b)) console.log("é possivel formar um triângulo");
else console.log("Não é possível formar um triângulo");