// acrescenta e remove elementos de um array não é dificil
// vamos considerar o seguinte array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// se quisermos acrescentar mais um elemento, é só referenciar a 
// última posição livre e atribuir um valor
numbers[numbers.length] = 10;

// acrescentando elementos no final do array com o metodo push
numbers.push(11);
numbers.push(12, 13);

console.log(numbers);

// se quiser converter em uma string é só concatenar com uma vírgula
// para apresentar na console
console.log(numbers.join(', '));

// --------------------------------------

// devemos deixar a primeira posição livre, deslocando
// todos os elementos para a direita.
const insertFirstPosition = (value) => {
    for (let i = numbers.length; i >= 0; i--) {
        numbers[i] = numbers[i - 1];
    }
    numbers[0] = value
};

// chamando a função
insertFirstPosition(-1);

// se quiser converter em uma string é só concatenar com uma vírgula
// para apresnetar na console
console.log(numbers.join(', '));

// vamos considerar o seguinte array 
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//inserindo no início com o método unshift
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-4, -3);

//para apresentar na console
console.log(numbers.join(', '));

// --------------------------------------------
//vamos considerar o seguinte array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// para remover um valor do inicio do array, podemos: 
for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}

// deslocamos sobrescrevendo os elementos para a esquerda
// entretanto o array numbers continua com tamanho (length) 10
//significa que a ultima posição esta com valor undefined
console.log(numbers);

let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 

//copiando todos os valores para outro array
// diferentes de undefined do array original
Array.prototype.reIndex = (myArray) => {
    const newArray = [];
    for (var i =0; i <myArray.length; i++) {
        if (myArray[i] !== undefined) {
            //console.log(numbers[i]);
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}




