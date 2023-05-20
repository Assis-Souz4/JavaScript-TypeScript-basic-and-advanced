//ecrevendo no body com javascript
// document.body.innerHTML += 'estou escrevendo usando o js <br>'
// document.body.innerHTML += 'quebrei a linha usando br'

// Seu nome é?:
// Seu nome tem ______ letras
// A segunda letra do seu nome é: ______
// Qual o primeiro índice da letra LETRA no seu nome? ______
// Qual o último índice da letra LETRA no seu nome? ______
// As últimas 3 letras do seu nome são: ______
// As palavras do seu nome são: ______
// Seu nome com letras maiúsculas: ______
// Seu nome com letras minúsculas: ______

const nome = prompt('digite seu nome');
document.body.innerHTML += `seu nome é: <strong>${nome}</strong><br>`;
document.body.innerHTML += `seu nome tem ${nome.length} letras<br>`;
document.body.innerHTML += `a sengunda letra do seu nome é: ${nome[1]}<br>`;
document.body.innerHTML += `o primeiro indice da letra inicial do meu nome é : ${nome.indexOf('a')}<br>`;
document.body.innerHTML += `o ultimo indice da letra final do meu nome é : ${nome.lastIndexOf('s')}<br>`;
document.body.innerHTML += `as ultimas 3 letras do meu nome é : ${nome.slice(-3)}<br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br>`;