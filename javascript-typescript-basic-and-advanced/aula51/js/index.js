//ex 01
const pessoa = {
  nome: "Ana",
  idade: 25,
  endereco: {
    rua: "Rua ABC",
    numero: 123,
  },
};
//Atribuição via desestruturação (Objetos)

//buscando o valor da variavel do objeto nome e idade e atribuido a const nome e idade
const { nome, idade } = pessoa;
console.log(nome, idade);

//ex 02
const pessoa2 = {
  nome2: "Luiz",
  //   idade2: 30,
  endereco2: {
    rua2: "Rua Um",
    numero2: 500,
  },
};
const { nome2, idade2 = "não informou a idade" } = pessoa2;
//podemos setar um valor padrão quando não existir a chave referente
console.log(nome2, idade2);

//ex 03

const pessoa3 = {
  nome3: "Ana",
  idade3: 40,
  endereco3: {
    rua3: "Rua Dois",
    numero3: 100,
  },
};

//alterando o nome3 da variavel nome para novoNome3
const { nome3: novoNome3, idade3 } = pessoa3;
console.log(novoNome3, idade3);

//ex 04

const pessoa4 = {
  nome4: "lucas",
  idade4: 15,
  endereco4: {
    rua4: "Rua Nova",
    numero4: 10,
  },
};

//extraindo o valor das variaveis rua4 e numero4
//modificando o nome da variavel rua4 para r4

const {
  endereco4: { rua4: r4, numero4 },
  endereco4,
} = pessoa4;
console.log(r4, numero4, endereco4);

//ex 05

// utilizando o rest(...)
const pessoa5 = {
  nome5: "Maria",
  idade5: 23,
  endereco5: {
    rua5: "Rua Ipu",
    numero5: 175,
  },
};
const { nome5,...resto } = pessoa5;
console.log(resto);