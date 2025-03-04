// Verificador de Número Negativo, Positivo ou Zero: 
// Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. 
// A função deve retornar uma string indicando o resultado.

function verificarNumero(numero){
    if (numero > 0){
        console.log(`O número ${numero} é positivo!`)
    }
    else if (numero < 0){
        console.log(`O número ${numero} é negativo!`)
    }
    else{
        console.log("O número é zero")
    }
}

verificarNumero(0)


// Desafio da Verificação de Elemento em um Array:
// Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 

function verificarElemento(lista, numero){
    if(lista.includes(numero)){
        console.log("O número está no array!")
    }
    else{
        console.log("O número não está no array!")
    }
}

verificarElemento(numeros, 12)


// 3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

const products = [ 
    { name: 'Maça', price: 2.5 }, 
    { name: 'Coca cola', price: 8 }, 
    { name: 'Guarana', price: 5 }, 
    { name: 'Chocolate', price: 20 } 
];

let resultado1 = products.find((item) => {
    return item.price === 20
})

console.log(resultado1)

// ​3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

let resultado2 = products.filter((item) => {
    return item.price < 8 
})

console.log(resultado2)