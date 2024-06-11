// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
//     no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
//     salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
//     tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
//     Matrícula:
//     Nome:
//     Salário bruto:
//     Dedução INSS:
//     Salário líquido:
//     (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
//     INSS).
const prompt = require('prompt-sync')();


function calcularDescontoINSS(salarioBruto) {
  return salarioBruto * 0.12; 
}

const funcionarios = [];

for (let i = 0; i < 80; i++) {
  console.log(`Funcionário ${i + 1}:`);
  const matricula = prompt("Matrícula: ");
  const nome = prompt("Nome: ");
  const salarioBruto = parseFloat(prompt("Salário bruto: "));


  const descontoINSS = calcularDescontoINSS(salarioBruto);
  

  const salarioLiquido = salarioBruto - descontoINSS;

  funcionarios.push({ 
    matricula: matricula,
    nome: nome,
    salarioBruto: salarioBruto,
    descontoINSS: descontoINSS,
    salarioLiquido: salarioLiquido
  });
}

for (const funcionario of funcionarios) {
  console.log("Contracheque:");
  console.log(`Matrícula: ${funcionario.matricula}`);
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${funcionario.descontoINSS.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
  console.log();
}
