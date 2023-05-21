//object date

const data = new Date();
console.log(data.toString());//retorna hora e data atual 

//  timestamp = carimbo de data e hora 

// data incvalida retorna nan

// O valueOf()método retorna o valor primitivo de um Dateobjeto.

const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date('02 Feb 1996 03:04:05 GMT');
console.log(date2.valueOf());
// Expected output: 823230245000

const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');
console.log(moonLanding.getTime());//getTime retorna o valor em millisec de uma determinada data

const data3 = new Date(1985, 06, 28);
console.log(data3.toDateString());//Sun Jul 28 1985
console.log(data3.getDate());//retorna o dia
console.log(data3.getDay());//rtorna o dia da semana 0 = domingo
console.log(data3.getFullYear());//retorna o ano
console.log(data3.getHours());//retorna a  hora default = 0
console.log(data3.getMonth());//retorna o mes 6 = julho
console.log(data3.getTime());//retorna o valor numérico correspondente ao horário da data especificada

const str1 = '5';
console.log(str1.padStart(2, '0'));//metodo padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.


