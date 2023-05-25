const main = document.querySelector('main');

const section = document.createElement('section');

main.appendChild(section);

const titulo = document.createElement('h1');

section.appendChild(titulo);

const textH1 = document.createTextNode('Texto criado utilizando o metodo createTextNode()');

titulo.appendChild(textH1);

const p = document.createElement('p');

section.appendChild(p);

const textoP = document.createTextNode('texto criado via JS');

p.appendChild(textoP);

