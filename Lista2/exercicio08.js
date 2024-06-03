/* Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

const prompt = require('prompt-sync')();

const horas_usuario = parseInt(prompt("Informe a quantidade de horas de atividade fisica do mês:"));

if (horas_usuario < 10) console.log(`Você ganhou ${horas_usuario * 2} pontos e faturou R$${horas_usuario * 0.1},00`)
else if (horas_usuario < 20) console.log(`Você ganhou ${horas_usuario * 5} pontos e faturou R$${horas_usuario * 0.25},00`)
else console.log(`Você ganhou ${horas_usuario * 10} pontos e faturou R$${horas_usuario * 0.5},00`)