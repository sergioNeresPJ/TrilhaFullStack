
const verificaPrimo = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};

let i = 0;
let numero = 101; 

console.log("Os 50 primeiros números primos maiores que 100 são:");

while (i < 50) {
    if (verificaPrimo(numero)) {
        console.log(numero);
        i++;
    }
    numero++;
}
