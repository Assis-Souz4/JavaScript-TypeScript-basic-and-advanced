//criando elementos no HTML via JavaScript

//array de objetos
const elementos = [
  { tag: "p", texto: "criando tag p." },
  { tag: "div", texto: "criando tag div." },
  { tag: "section", texto: "criando tag section." },
  { tag: "footer", texto: "criando tag footer." },
];

//selecionando o elemento container
const container = document.querySelector(".container");

//criando uma div para conter os  elemento
const div = document.createElement("div");

//criando for para percorrer os elementos do array
for (let i = 0; i < elementos.length; i++) {
  const {tag, texto} = elementos[i];
  const criaElemento = document.createElement(tag);
  criaElemento.innerText = texto;
  div.appendChild(criaElemento);
}
container.appendChild(div);

