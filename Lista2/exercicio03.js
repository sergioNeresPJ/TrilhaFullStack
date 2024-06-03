/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const prompt = require('prompt-sync')();

const distancia = parseInt(prompt("Insira a distância que deseja percorrer em km (sem mentir):"));

let total;
if(distancia > 200) {
    total = distancia * 0.45;
    console.log(`Você pagará R$${total},00 pela viagem`)
}else{
    total = distancia * 0.5;
    console.log(`Você pagará R$${total},00 pela viagem`)
}