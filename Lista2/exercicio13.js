// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//     da sequência de Fibonacci.

const fibonacci = [1, 1];


for (let i = 2; i < 15; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log(fibonacci);
