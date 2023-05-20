// function saudacao(nome){
//    return `bom dia ${nome}`;
// }
// const variavel = saudacao('assis');
// console.log(variavel);

// function soma(a, b){
//    const resultado = Number(a + b);
//    return resultado;
// }
// console.log(soma(2, 10));

//funcao anonima
const raiz = function(num){
   return num ** 0.5;
};
console.log(raiz(16));

//arrow function
//const raiz = n => n ** 0.5;
const multiplicacao = (num2, num3) => {
   return num2 * num3;
}
console.log(multiplicacao(3, 5));