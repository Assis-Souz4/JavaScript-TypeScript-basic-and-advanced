//               01234567   
let umaString = "um texto";
let outraString = "mostrando o tamanho da string com length";

//mostrando o caracter da posição 6
// console.log(umaString[5]);
console.log(umaString.charAt(6));
//monstrar o indice que começa a palavra texto
console.log(umaString.indexOf('texto'));
//monstrando o tamanho da string
console.log(outraString.length);
//mostrando a string da posição start a end
console.log(umaString.slice(3, 8));
//usando um numero negativo para mostrar a posição, irá começar da posicão 30
console.log(outraString.slice(-10))
//dividindo uma string pelo espaço
console.log(outraString.split(' '));
//tudo em maiusculo
console.log(outraString.toUpperCase());
//tudo minusculo
console.log(outraString.toLowerCase());
