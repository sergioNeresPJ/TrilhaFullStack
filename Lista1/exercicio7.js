const prompt = require('prompt-sync')();

const nMacas = parseInt(prompt("Insira o numero de maçãs compradas:"));

const precos = [0.3, 0.25];

function calculaTotal (quantidade){
    if(quantidade<12) return precos[0] * quantidade;
    else return precos[1] * quantidade;
}

console.log(`O total gasto foi de: R$${calculaTotal(nMacas)}`);