// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//     valores da sequência.
    

const prompt = require('prompt-sync')();

const n = parseInt(prompt("Insira o primeiro termo: "));
const q = parseInt(prompt("Insira a razão da P.A: "));
let valorAntigo;
let soma = 0;

for (valorAntigo = n, i = 0; i < 10; i++) {
  console.log(`${valorAntigo} `);
  soma += valorAntigo;  
  valorAntigo += q; 
}

console.log(`A soma dos 10 primeiros termos da PA é: ${soma}`);
