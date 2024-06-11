// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
//     repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

function validarHorario(horario) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return regex.test(horario);
}

const horarios = [];


for (let i = 0; i < 5; i++) {
  let horario;
  do {
    horario = prompt(`Digite o horário ${i + 1} no formato HH:MM:SS: `);
    if (!validarHorario(horario)) {
      console.log("Horário inválido. Digite novamente.");
    }
  } while (!validarHorario(horario));
  horarios.push(horario);
}


console.log("Horários válidos:");
for (const horario of horarios) {
  console.log(horario);
}

    