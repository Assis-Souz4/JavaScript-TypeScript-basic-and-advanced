//função para receber os segundos
function getTimeSeconds(segundos) {
  const data = new Date(segundos * 1000); //1000 = milesegundos
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC"
  });
}

const contatdor = document.querySelector(".contatdor");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0; //variavel para guardar os segundos
let timer; //ira guardar o valor de timer quando pausar

//função para iniciar o relogio
function startTimer() {
  timer = setInterval(() => {
    segundos++;
    contatdor.innerHTML = getTimeSeconds(segundos);
  }, 1000);
}

//outra forma de usar o event sem precisar repetir varias vezes a instrução
document.addEventListener("click", (e) => {
  const el = e.target;
  console.log(el);//monstarndo o evento target

  if (el === iniciar) {
    contatdor.classList.remove("pausar");
    clearInterval(timer);
    startTimer();
    console.log("inicio");
  }
  if (el === pausar) {
    contatdor.classList.add("pausado");
    clearInterval(timer);
    console.log("pausa");
  }
  if (el === zerar) {
    contatdor.classList.remove("pausado");
    clearInterval(timer);
    contatdor.innerHTML = "00:00:00";
    segundos = 0;
    console.log("zerou");
  }
});

//a cima uma maneira de usar o evento sem precisar repetir o eventListener
// iniciar.addEventListener("click", (e) => {
//   contatdor.classList.remove('pausar');
//   clearInterval(timer);
//   startTimer();
//   console.log('inicio');
// });
// pausar.addEventListener("click", (e) => {
//   contatdor.classList.add("pausado");
//   clearInterval(timer);
//   console.log("pausa");
// });
// zerar.addEventListener("click", (e) => {
//   clearInterval(timer);
//   contatdor.innerHTML = "00:00:00";
//   segundos = 0;
//   console.log("zerou");
// });
