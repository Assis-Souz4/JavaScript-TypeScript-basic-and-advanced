const num = Number(prompt('digite um numero'));
const numeroTitulo = document.getElementById('numero__titulo');
const texto = document.getElementById('meu__texto');

numeroTitulo.innerHTML = num;
texto.innerHTML += '';
texto.innerHTML += `<p>numero é ${num} + 2 = ${num + 2}</p>`;
texto.innerHTML += `<p>a raiz quadrada é: ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>é NaN ?: ${isNaN(num)}</p>`;
texto.innerHTML += `<p>arredondar para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>arredondar para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${num.toFixed(2)}</p>`;
texto.innerHTML += `<p>o numero é inteiro? ${Number.isInteger(num)}</p>`;
