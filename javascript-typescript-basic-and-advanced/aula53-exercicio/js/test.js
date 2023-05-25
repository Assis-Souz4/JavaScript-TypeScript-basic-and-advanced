//criando elementos no HTML via JavaScript

//array de objetos
const elementos = [
  { tag: "p", texto: "criando tag p." },
  { tag: "div", texto: "criando tag div." },
  { tag: "section", texto: "criando tag section." },
  { tag: "footer", texto: "criando tag footer." },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
   const {tag, texto} = elementos[i];
   const criaElemento = document.createElement(tag);
   //COLOCANDO O TEXTO DENTRO DA TAG CRIADA
   criaElemento.innerText = texto;
   div.appendChild(criaElemento);
}
container.appendChild(div);