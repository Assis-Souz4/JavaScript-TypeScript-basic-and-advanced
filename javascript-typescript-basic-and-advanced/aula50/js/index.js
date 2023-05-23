//Atribuição via desestruturação (Arrays)
// let a = 'a';
// let b = 'b';
// let c = 'c';

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);
const numeros = [10, 20, 30, 40, 50, 60, 70, 80,]//array
const [um, dois, tres, ...restoDoArray] = numeros;//cada declaração de constante ira receber o valor de numeros na ordem utilizando o operador rest (...) armazeno o restante do array em uma variavel
//const [um, , tres, , cinco ...restoDoArray] = numeros; utilizando virgula pula valores
console.log(um, dois, tres);
console.log(restoDoArray);

//acessando o indece de um array dentro de um array
                               
//                              0          1         2 
// 1 2 3                    0  1  2    0  1  2    0  1  2
const acessandoIndices = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(acessandoIndices[2][1]); //8
//ou
//posso atribuir a cada array uma variavel e assim obter o valor do indice desejado
const [list1, list2, list3] = acessandoIndices;
console.log(list3[2]); //9

