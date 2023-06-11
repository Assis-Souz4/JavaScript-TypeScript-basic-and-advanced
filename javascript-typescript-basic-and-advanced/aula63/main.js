//try = tentar
try {
  console.log(erro);
} catch (error) {
  console.log("variavel não existe");
}
console.log("--------------------------------");

//exemplo de tratamento e captura de erro;

//throw = lançar

function soma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a e b tem que ser numeros");
  }
  return a + b;
}

try {
  soma(10, 55);
  soma("a", 55);
} catch (err) {
  console.log(err);
}
