//Exercícios de interpretação de código

// 1. O primeiro resultado imprimirá 10 e o seugundo resultado será 10,5.

// 2. O resultado será 10, 10, 10.

// 3. Torcaria letp p por horaDia, valorDia

//Exercícios de escrita de código

let nome = prompt ("Qual seu nome?")
let idade = prompt ("Qual sua idade?")

console.log("Olá", nome, "você tem", idade, "anos")

// d)Esse codigo de forma indefinida foi dado por não atribuir valor a variável.
// f) As duas variáveis deram strings

//2. Opção 1

let pergunta1 = "Você gosta de programar?"
let pergunta2 = "Você gosta de passar muito tempo no computador?"
let pergunta3 = "Você tem 20 anos ? "

let resposta1 = "Sim"
let resposta2 = "Sim"
let resposta3 = "Não"

console.log(pergunta1, " - ", resposta1)
console.log(pergunta2, " - ", resposta2)
console.log(pergunta3, " - ", resposta3)
 


//Opção 2

let pergunta1 = prompt("Você gosta de programar?")
let pergunta2 = prompt("Você gosta de passar muito tempo no computador?")
let pergunta3 = prompt("Você tem 20 anos ?")


console.log( "Você gosta de programar?" ,pergunta1)
console.log("Você gosta de passar muito tempo no computador?" ,pergunta2)
console.log("Você tem 20 anos ?" ,pergunta3)

//3.
let a = 10
let b = 25

c = a
a = b
b = c

console.log ("O novo valor de a é" , a)
console.log ("O novo valor de b é" , b)
