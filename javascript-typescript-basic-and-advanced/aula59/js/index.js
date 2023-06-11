//continue -> pula a execução e pula para a proxima
const numeros = [1, 2, 3, 4, 5, 6];

for (let num of numeros) {
  if (num % 2 == 0) {
    continue;
  }
  console.log(`${num} IMPAR`);
}
console.log('#############');

//adendo numero aleatorio
const min = 0;
const max = 100;
let numero;

function aleatorio(){
  numero = Math.floor(Math.random() * (max - min) + min);
  return numero;
}
aleatorio(min, max);

let sort = Number(aleatorio(min, max));

while(sort !== 10){
  sort = aleatorio(min, max);
  sort++;
  console.log(`${sort}`); 
}


