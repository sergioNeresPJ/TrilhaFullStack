/*Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const prompt = require('prompt-sync')();

const quant_por_dia = parseInt(prompt("Insira a quantidade de cigarros fumados por dia:"));

const anos_total = parseInt(prompt("Insira a quantidade de anos de fumo:"));

const minutos_perdidos_por_dia = 10;
const dias_no_ano = 365

const minutos_perdidos = quant_por_dia * minutos_perdidos_por_dia * dias_no_ano * anos_total;

console.log(`Você perdeu um total de ${minutos_perdidos/3600} dias de sua vida fumando cigarro!`);