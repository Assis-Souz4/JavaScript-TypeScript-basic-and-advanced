//arguments permite executar função sem parametros
function myFunction(){
    console.log(arguments[4]);
}
myFunction('myArgs', 0, 1, 2, 3);


function myFunction2(a){
    console.log(a + b + c);
}
myFunction('myArgs', 0, 1, 2, 3);

//atribuição via desestruturação
//object
function myFunction3 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
myFunction3({nome: 'anna', sobrenome: 'luiza', idade: 25});


//atribuição via desestruturação
//array
function myFunction4 ([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
myFunction4(['pedro', 'souza', 37]);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 10, 20, 30, 40, 50, 60,);
conta('-', 0, 10, 20, 30, 40, 50, 60,);
conta('*', 0, 10, 20, 30, 40, 50, 60,);
conta('/', 0, 10, 20, 30, 40, 50, 60,);