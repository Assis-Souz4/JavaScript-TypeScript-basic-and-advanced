let varA = 'A';
let varB = 'B';
let varC = 'C';


const temp = varA;
//varA recebe valor de varB
varA = varB;
//varB recebe valor de varC
varB = varC;
//varC recebe valor de varA
varC = temp;
//maneira de resolver
console.log(varA, varB, varC);

//outra maneira de resolver
[varA, varB, varC] = [varB, varC, varA]