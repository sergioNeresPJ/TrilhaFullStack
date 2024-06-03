/* Crie um jogo de JoKenPo */
const prompt = require('prompt-sync')();

const usuario = parseInt(prompt("Digite (1-pedra, 2-papel, 3-tesoura):"));

const computador = Math.floor(Math.random() * 3) + 1;


let resultado;
switch(usuario){
    case 1:
        if (computador === 1) {
            resultado = "Empate!";
        } else if (computador === 2) {
            resultado = "Computador vence!";
        } else {
            resultado = "Usuário vence!";
        }
        break;
    case 2:
        if (computador === 1) {
            resultado = "Usuário vence!";
        } else if (computador === 2) {
            resultado = "Empate!";
        } else {
            resultado = "Computador vence!";
        }
        break;
    case 3:
        if (computador === 1) {
            resultado = "Computador vence!";
        } else if (computador === 2) {
            resultado = "Usuário vence!";
        } else {
            resultado = "Empate!";
        }
        break;
    default:
        console.log("Informe um valor válido.");
        return;
}
console.log(resultado);
