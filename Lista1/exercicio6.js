const prompt = require('prompt-sync')();

const a = parseInt(prompt("Insira o valor da aresta A: "));
const b = parseInt(prompt("Insira o valor da aresta B: "));
const c = parseInt(prompt("Insira o valor da aresta C: "));

function verificaTriangulo(a, b, c) {
    return ((a < b + c) && (b < a + c) && (c < a + b));
}

function verificaTipoTriangulo(a, b, c) {
    if (verificaTriangulo(a, b, c)) {
        if (a === b && b === c) return "Equilátero";
        else if (a === b || a === c || b === c) return "Isósceles";
        else return "Escaleno";
    } else {
        throw new Error("Valores informados não correspondem às medidas de um triângulo.");
    }
}

try {
    console.log(`O triângulo é do tipo ${verificaTipoTriangulo(a, b, c)}`);
} catch (err) {
    console.log(err.message);
}
