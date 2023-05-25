//for

// i = index
for (let i = 20; i >= 0; i--) {
  console.log(i); // 20 a 0
}

console.log("================================");

for (let i = 0; i <= 20; i++) {
  console.log(i); // 0 a 20
}

console.log("================================");

for (let i = 0; i <= 20; i += 2) {
  console.log(i); // 0 a 20 pulando 2
}

console.log("================================");

// par ou impar
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} é par`); // 0 a 20 impar
  } else {
    console.log(`${i} é impar`); // 0 a 20 par
  }
}

console.log("================================");
// indices       0   1   2   3   4   5   6
const numeros = [10, 20, 30, 40, 50, 60, 70];

for (let i = 0; i < numeros.length; i++) {
  console.log(`indice ${i} = `, numeros[i]); //mostrando os valores do array
}
