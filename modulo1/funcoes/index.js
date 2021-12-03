//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//1.
// a. 10  e 50
// b. não aconteceria nada, nada seria impresso

// 2.
// a. Essa função escreve tudo em minusculo e retorna true ou false se existe ou não a palavra "cenoura" na frase.
// b. 
// i. true
// ii. true
// iii. true

//EXERCICIOS DE ESCRITA
//1.
//a) 
const nome = "Juliano Lelis"
const idade = 38
const cidade = "Itaperuna"
const estuda = "Estudante"

const dadosPessoais = () => {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estuda}`)
    
}
dadosPessoais() 

//b.
const dadosPessoais1 = (nome, idade, cidade, profissão) => {
    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}` ) 
}
console.log(dadosPessoais1("Juliano", 38, "Itaperuna", "Desenvolvedor em treinamento"))

//2.
//a.
const somaa = (numero1, numero2) => {
    return numero1 + numero2 
}
console.log(somaa(100, 33)) 
//b.
const comparacao = (numero1, numero2) => {
    return numero1 >= numero2
}
console.log(comparacao(35, 10))
//c.
const numPar =(numero) =>{
    return numero % 2 === 0
}
console.log(numPar(28))

//d.
const frase = (texto) => {
    texto = texto.toUpperCase()
        return texto 
}
const frasePronta = frase("Eu quero ser pleno")
console.log(frasePronta.length , frasePronta) 

//3.

const numero1 = Number(prompt("Insira dois números, Diga o primeiro!")) 
const numero2 = Number(prompt("Insira o segundo número"))
console.log(`Números inseridos: ${numero1} , ${numero2}`)
 
const soma = (numero1, numero2) => { 
  return (numero1 + numero2)
}
const resSoma = soma(numero1, numero2)
console.log(`Soma: ${resSoma}`)

const subtração = (numero1, numero2) => {
    return (numero1 - numero2)
}
const resSub = subtração(numero1, numero2)
console.log(`Subtração: ${resSub}`)

const multiplicação = (numero1, numero2) => {
    return (numero1 * numero2)
}
const resMult = multiplicação(numero1, numero2)
console.log(`Multiplicação: ${resMult}`)


const divisão = (numero1, numero2) => {
    return (numero1 / numero2)
}
const resDiv = divisão(numero1, numero2)
console.log(`Divisão: ${resDiv}`)