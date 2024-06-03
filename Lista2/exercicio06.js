/* Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require('prompt-sync')();

const numero = Math.floor(Math.random() * 4) + 1; //somando um no final para ficar entre 1 e 5

const palpite = parseInt(prompt("Insira o seu palpite (de 1 a 5):"));

if (palpite ===  numero) console.log("Você acertou!");
else console.log("Você errou...");