//selecionado o container
const container = document.querySelector('.container');

//selecionando os paragrafos dentro do container 
const paragrafos = container.querySelectorAll('p');

//usando for of

for(valor of paragrafos){
  console.log(valor);//mostra os paragrafos
}