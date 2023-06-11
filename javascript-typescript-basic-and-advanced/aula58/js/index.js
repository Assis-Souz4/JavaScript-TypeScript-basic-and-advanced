//adendo ....função de numero aleatorio
const min = 0;
const max = 50;

function numAleatorio(min, max){
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
}
let aleatorio = numAleatorio(min, max);
// console.log(aleatorio);

//criando uma condição com o while (quando o numero for 10 sai do laço)
while(aleatorio !== 10){
  aleatorio = numAleatorio(min, max);
  console.log(aleatorio);
}
