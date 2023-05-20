//objetos

// const pessoa1 = {
//    nome: 'assis',
//    idade: 37
// };

// const pessoa2 = {
//    nome: 'juliana',
//    idade: 27
// };
// //acessando os dados do objeto
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

//exemplo de função que cria um objeto

function criaPessoa (nome, sobrenome, idade){
   return {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade
   };
}
const pessoa1 = criaPessoa('assis', 'souza', 37);
console.log(pessoa1.idade);//mostra os valores de pessoa1