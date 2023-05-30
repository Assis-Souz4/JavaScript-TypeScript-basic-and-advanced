//selecionando todos os valores de estilo do body
const bodyStyle = getComputedStyle(document.body);
//armazenando em uma variavel o bg do body
const bgBody = bodyStyle.backgroundColor;
console.log(bgBody);
//selecionando os paragrafos
const paragrafos = document.querySelectorAll('p');

const container = document.querySelector('.container');
const titulo = document.createElement('h1');
const textoTitulo = document.createTextNode('Criado via Js');
titulo.appendChild(textoTitulo);
container.appendChild(titulo);

for(let bgParagrafo of paragrafos){
  bgParagrafo.style.backgroundColor = bgBody;
  bgParagrafo.style.color = "red";
  titulo.style.color = "blue";
  titulo.style.backgroundColor = 'pink';
}




// //selecionado o container
// const container = document.querySelector('.container');

// //selecionando os paragrafos dentro do container 
// const paragrafos = container.querySelectorAll('p');

// //usando for of

// for(valor of paragrafos){
//   console.log(valor);//mostra os paragrafos
// }