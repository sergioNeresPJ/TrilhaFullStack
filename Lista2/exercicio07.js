/* Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt = require('prompt-sync')();

const tipo_carro = parseInt(prompt("Informe o tipo de carro desejado (1-popular, 2-luxo):"));
const dias_aluguel = parseInt(prompt("Informe por quantos dias vocÊ deseja alugar o carro:"))
const km_percorridos = parseInt(prompt("Informe quantos km você percorreu:"));

if (tipo_carro === 1) {
    if (km_percorridos < 100) console.log(`Você deve pagar R$${0.2 * km_percorridos},00 no total`)
    else console.log(`Você deve pagar R$${0.1 * km_percorridos},00 no total`)
} else if (tipo_carro === 2) {
    if (km_percorridos < 200) console.log(`Você deve pagar R$${0.3 * km_percorridos},00 no total`)
    else console.log(`Você deve pagar R$${0.25 * km_percorridos},00 no total`)
} else console.log("Tipo de carro inválido. Tente novamente.")