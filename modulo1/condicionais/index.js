//Exercícios de interpretação de código
//1.
/* a. O código esta vendo se o número é par e divisivel por 2, Se ele for par ou divisível
ele imprime "Passou no teste", se ele não for ele imprime "Não passou no teste" */
//b. Ele imprime números pares e consequentemente divisíveis por 2.
//c. Ele imprime números ímpares.

//2.
//a. O código serve para acessar os preços das frutas cadastradas.
//b. O preço da fruta, Maçã, é, R$ 2,25
//c. O preço da fruta  Pêra  é  R$  5

//3.
//a. A primeira linha esta pedindo do Usuario que digite um número.
//b. Esse número passou no teste. Se fosse -10 não imprimiria nada.
//c. Existe um erro no console pois esta pedindo para imprimir a mensagem dentro 
// de outro escopo.


//Exercícios de escrita de código

//1.
const idade = Number(prompt("Qual sua idade?"))

function idadeParaDirigir(idade) {
if (idade >= 18) {
    console.log("Você pode dirigir!")
}else {
    console.log("Você não pode dirigir!")
}
}

//2.
const horarioDeEstudo = prompt("Qual turno você estuda? Digite M matutino V vespertino e N noturno!")

function periodoEstudo (estudo) {
    if (estudo === "M") {
        console.log("Bom dia!")
    } else if (estudo === "V") {
        console.log("Boa tarde!")
    }else {
        console.log("Boa Noite!")
    }
}
periodoEstudo(horarioDeEstudo)

//3.
let horarioDeEstudo = prompt("Qual turno você estuda? Digite M matutino V vespertino e N noturno!")

switch (horarioDeEstudo) {
    case "M" :
        console.log("Bom dia!")
        break
    case "V" :
        console.log("Boa tarde!")
        break
    case "N" :
        console.log("Boa Noite!")
        break
    default:
        console.log("Digite M para matutino, V para vespertino e N para noturno!")
    }

    //4.
    let generoFilme = prompt("Qual gênero de filme você quer assisir?")
    let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

    function verFilme (generoFilme, valorIngresso) {
        if (generoFilme === "fantasia" && valorIngresso <= 15) {
            console.log("Bom Filme!")
        }else {
            console.log("Escolha outro filme :(")
        }
    }
    verFilme(generoFilme, valorIngresso)

    //Desafio
    //1.
    let generoFilme = prompt("Qual gênero de filme você quer assisir?")
    let valorIngresso = Number(prompt("Qual o valor do ingresso?"))
    let lancheComprar = prompt("Qual lanche você irá comprar?")
    function verFilme (generoFilme, valorIngresso) {
        if (generoFilme === "fantasia" && valorIngresso <= 15) {
            console.log(`Bom Filme! e Aproveite seu ${lancheComprar}`) 
        }else {
            console.log("Escolha outro filme :(")
        }
    }
    verFilme(generoFilme, valorIngresso)

    //2.
    let nome = prompt("Digite seu nome!")
    let tipoJogo = prompt("Digite **IN** jogo Internacional ou **DO** doméstico!") 
    let etapaJogo = prompt("Digite se SF semi-final, DT terceiro-lugar ou FI final!")
    let categoria = prompt("Qual categoria 1, 2, 3 ou 4")
    let quantidadeDeIngressos = prompt("Quantos ingressos?")

    function dadosIngressos (nome, tipoJogo, etapaJogo, categoria, quantidadeDeIngressos){
        if (tipoJogo === "IN" )
    }