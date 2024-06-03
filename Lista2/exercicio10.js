/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require('prompt-sync')();

let somatorio = 0;
let menor_valor = 0;
let quantidade_valores = 0;
let quantidade_pares = 0;
let continuar = 's';

while (continuar.toLowerCase() === 's') {
    const numero = parseInt(prompt("Digite um número: "));

    if (numero < menor_valor) menor_valor = numero;
    somatorio += numero;
    quantidade_valores++;
    if(numero % 2 == 0) quantidade_pares++;

    continuar = prompt("Deseja continuar? (s/n): ");
}

console.log(`Somtório: ${somatorio}`);
console.log(`Menor valor digitado: ${menor_valor}`);
console.log(`Média: ${somatorio/quantidade_valores}`);
console.log(`Quantidade de numeros pares informados: ${quantidade_pares}`);

