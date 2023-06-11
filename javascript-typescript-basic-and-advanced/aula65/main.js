//mostrar a hora

//ex01
function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  });
}

const hora = setInterval(function () {
  console.log(mostrarHora());
}, 1000);

//parar a hora
setTimeout(function () {
  clearInterval(hora)
}, 9000);

//usando setTimeout para exibir uma msg com temporizador
setTimeout(function () {
  console.log('Fim da exibição da hora !');
}, 10000);