//buscando e formatando a data e hora atual
const data = new Date();

const dia = String(data.getDate()).padStart(2, '0');//21

const mes  = String(data.getMonth() + 1).padStart(2, '0');//05

const ano  = data.getFullYear();

const hora = String(data.getHours()).padStart(2, '0');//12

const minuto = String(data.getMinutes()).padStart(2, '0');//15

const segundo = String(data.getSeconds()).padStart(2, '0');//18

const dataHoraAtual = (`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);

console.log(dataHoraAtual);
