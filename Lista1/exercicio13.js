const prompt = require('prompt-sync')();

for(i=0;i<5;i++){
    const n = parseInt(prompt("Insira o numero:"));
    for(j=1;j<=10;j++) console.log(`${j} x ${n} = ${n*j}`);
}