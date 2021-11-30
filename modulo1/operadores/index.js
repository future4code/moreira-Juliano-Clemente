//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 1.  
a. false
b. false
c. true
d. boolean
 */

/* 2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) */

/* O problema é que antes do "prompt" não foi colocado "Number".
e está aparecendo um número ao lado do outro.


3. o correto seria
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

//EXERCICIO DE ESCRITA DE CÓDIGO
// 1.

const idade = Number(prompt ("Qual a sua idade"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))
    console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idade > idadeAmigo)
    console.log(idade - idadeAmigo)

//2.

const numeroPar = Number(prompt ("Insira um número par!"))
console.log(numeroPar % 2)

/* 
c. Notei que sempre dá o resto 0 (zero).
d. Quando inserido número impar o resto da 1 (um).
 */

//3.
const idadeAtual = Number(prompt("Quantos anos você tem?"))
const idadeMeses = idadeAtual * 12
const idadeDias = idadeMeses * 365
const idadeHoras = idadeDias * 24
    console.log("Você tem,", idadeMeses, "meses", idadeDias, "dias e" , idadeHoras, "horas")


//4.

const numero1 = Number(prompt("Insira um número!"))
const numero2 = Number(prompt("Insira outro número!"))
const dv1 = Number(numero1 % numero2) 
const dv2 = Number(numero2 % numero1)
    console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
    console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
    console.log("O primeiro número é divisível pelo segundo?", dv1 === 0)
    console.log("O segundo número é divisível pelo 3segundo?", dv2 === 0)