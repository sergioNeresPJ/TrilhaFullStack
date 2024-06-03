/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h^-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/


const prompt = require('prompt-sync')();

const velocidade = parseInt(prompt("Insira sua velocidade em km/h (sem mentir):"));

if(velocidade > 80){
    const total = (velocidade-80) * 5;
    console.log(`Pague uma multa no valor de R$${total},00`);
}else{
    console.log("Sem multas por aqui.")
}