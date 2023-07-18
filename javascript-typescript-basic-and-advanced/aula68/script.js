//function hoisting- permite chamar a função antes de declarar
falaOi();
function falaOi () {
    console.log('oi');
}

console.log('--------------------------------');

//function expression
const myFunction = function () {
    console.log(123456);
}
myFunction();

console.log('--------------------------------');

//arrow function

const myArrow = () => {
    console.log('example of arrow function');
};
myArrow();

//dentro de um objeto

const pessoa = {
    nome: 'nome',
    idade: 'idade',
    endereco() {
        console.log('rua 10, casa 35');
    }
}
pessoa.endereco();