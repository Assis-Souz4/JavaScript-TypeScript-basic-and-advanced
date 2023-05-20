  const frm = document.querySelector("form");
  const respH3 = document.querySelector("h3");

  frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = Number(frm.inPeso.value);
    const altura = Number(frm.inAltura.value);
    const imc = Number(peso / Math.pow(2, altura)).toFixed(2);

    //evita envio de valor invalido
    if (!peso || !altura) {
      respH3.innerHTML = `<p style="color: red;">Valor invalido, somente numeros!!</p>`;
      return;
    }

    if (imc < 18.5) {
      respH3.innerHTML = `<p style="color: red;">Seu IMC é ${imc} Abaixo do peso</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      respH3.innerHTML = `<p style="color: blue;">Seu IMC é ${imc} Normal</p>`;
    } else if (imc >= 25.0 && imc <= 29.9) {
      respH3.innerHTML = `<p style="color: orange;">Seu IMC é ${imc} Sobrepeso</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
      respH3.innerHTML = `
      <p style="color: red;">Seu IMC é ${imc} Obesidade grau I </p>`;
    } else if (imc >= 35 && imc <= 39.9) {
      respH3.innerHTML = `
     <p style="color: red;">Seu IMC é ${imc} Obesidade grau II </p>`;
    } else {
      respH3.innerHTML = `<p style="color: red;">Seu IMC é ${imc} Obesidade grau III </p>`;
    }
  });

const limparResp = () => {
  limpar.innerHTML = ` `;
  console.log(4);
};
