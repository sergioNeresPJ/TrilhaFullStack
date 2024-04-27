const prompt = require('prompt-sync')();


function parOuImpar(n){
    if(n%2==0) return "Par"
    else return "Impar"
}

let numero = 0;

while(true){
    numero = parseInt(prompt("Insira o numero:"));
    if(!numero || numero<0) break;
    console.log(`${numero} é ${parOuImpar(numero)}`);
}