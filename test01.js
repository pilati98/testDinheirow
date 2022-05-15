// Crie um vetor Q de 20 posições (somente números). Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor;

const qArray = [5, 40, 74, 78, 2, 98, 8, 43, 13, 88, 82, 26, 46, 84, 36, 25, 77, 69, 56, 1]



console.log('Maior elemento do vetor \n')
const max = Math.max(...qArray) 

console.log(max)
console.log('\n')
console.log('Posição que o maior número ocupa: \n')
console.log(qArray.indexOf(max))