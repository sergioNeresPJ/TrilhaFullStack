const prompt = require('prompt-sync')();

const codigoOrigem = {
    1: "Sul",
    2: "Norte",
    3: "Leste",
    4: "Oeste",
    "5-6": "Nordeste",
    "7-9": "Sudeste",
    "10-20": "Centro-Oeste",
    "25-50": "Nordeste"
};

function obterRegiao(codigo) {
    for (let key in codigoOrigem) {
        if (key.includes("-")) {
            const [inicio, fim] = key.split("-");
            if (codigo >= parseInt(inicio) && codigo <= parseInt(fim)) {
                return codigoOrigem[key];
            }
        } else {
            if (codigo === parseInt(key)) {
                return codigoOrigem[key];
            }
        }
    }
    return "Produto Importado";
}

const codigo = parseInt(prompt("Insira o codigo do produto:"));

console.log(obterRegiao(codigo));
