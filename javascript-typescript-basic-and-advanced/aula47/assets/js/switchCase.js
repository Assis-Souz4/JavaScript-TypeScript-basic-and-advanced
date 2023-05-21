const data = new Date("1985-06-28 00:00:00");
const diaSemana = String(data.getDay()).padStart(2, "0");
let semana;

switch (diaSemana) {
  case 0:
    semana = "Domingo";
    break;
  case 1:
    semana = "Segunda";
    break;
  case 2:
    semana = "Terça";
    break;
  case 3:
    semana = "Quarta";
    break;
  case 4:
    semana = "Quinta";
    break;
  case 5:
    semana = "Sexta";
    break;
  case 6:
    semana = "Sábado";
    break;
   }
