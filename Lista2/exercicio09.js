/* Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require('prompt-sync')();

let total_salario_homens = 0;
let tota_salario_mulheres = 0;
let continuar = 's';

while (continuar.toLowerCase() === 's') {
    const salario = parseFloat(prompt("Digite o salário do funcionário: "));
    const sexo = prompt("Digite o sexo do funcionário (m/f): ").toLowerCase();

    if (sexo === 'm') {
        total_salario_homens += salario;
    } else if (sexo === 'f') {
        tota_salario_mulheres += salario;
    } else {
        console.log("Sexo inválido. Use 'm' para masculino e 'f' para feminino.");
    }

    continuar = prompt("Deseja continuar? (s/n): ");
}

console.log("Total de salário pago aos homens: R$" + total_salario_homens.toFixed(2));
console.log("Total de salário pago às mulheres: R$" + tota_salario_mulheres.toFixed(2));
