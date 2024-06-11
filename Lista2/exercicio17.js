// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
//     dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
//     os dados das pessoas menores de idade.
    
const prompt = require('prompt-sync')();

const pessoas = []; 

for (let i = 0; i < 9; i++) {
  const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
  const idade = parseInt(prompt(`Digite a idade de ${nome}: `));

  pessoas.push({ nome: nome, idade: idade });
}

console.log("Pessoas menores de idade:");
for (const pessoa of pessoas) {
  if (pessoa.idade < 18) {
    console.log(`${pessoa.nome} - ${pessoa.idade} anos`);
  }
}

