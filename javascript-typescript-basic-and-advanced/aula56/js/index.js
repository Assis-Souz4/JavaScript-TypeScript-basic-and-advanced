////////////////////
//for classico
const nome = 'juliana';

for(let i = 0; i < nome.length; i++){
  console.log(nome[i]); // juliana
}

console.log('###############');

//for in obtem o index juntamente com o valor (objetos,array,strings)
const nome2 = 'juliana';
for(let i in nome2){
  console.log(`index = ${i}, valor = ${nome[i]}`);//mostra o indice e o valor   
}

console.log('###############');

//for of retorna somente o valor 
const nome3 = 'juliana santos';
for(let valor of nome3){
  console.log(valor);
}

console.log('###############');

//iterando em strings
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"



//Iterando sobre um Map
let iterable2 = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable2) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

console.log('###############');

const numeros = [10, 20, 30];
for(let num of numeros){
  console.log(num);
}