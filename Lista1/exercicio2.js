const prompt = require('prompt-sync')();

const eleitores = parseInt(prompt("Insira a quantidade de eleitores:"));
const votosBrancos = parseInt(prompt("Insira a quantidade de votos brancos:"));
const votosNulos = parseInt(prompt("Insira a quantidade de votos nulos:"));
const votosValidos = parseInt(prompt("Insira a quantidade de votosValidos:"));

const calculaPercentual = (valor, total) =>{
    let percentual;
    percentual = valor * 100 / total;
    return percentual;
}

console.log(`O percentual de votos brancos é de: ${calculaPercentual(votosBrancos, eleitores)}%`);
console.log(`O percentual de votos nulos é de: ${calculaPercentual(votosNulos, eleitores)}%`);
console.log(`O percentual de votos validos é de: ${calculaPercentual(votosValidos, eleitores)}%`)