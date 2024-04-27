const prompt = require('prompt-sync')();

const nota1 = parseInt(prompt("Insira a primeira nota: "));
const nota2 = parseInt(prompt("Insira a segunda nota: "));

const notas = [nota1, nota2];

const confereAprovacao = (notas) => {
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    const media = total / notas.length;
    return media > 6;
}

if (confereAprovacao(notas)) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Você foi REPROVADO! Estude mais");
}