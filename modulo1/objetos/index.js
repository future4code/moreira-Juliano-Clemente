//Exercícios de interpretação de código

//1.

/* a. Será impresso:
Matheus Nachtergaele 
Virginia Cavendish
canal: Globo horario: 14h */

//2.
/* a. 
nome: Juca
idade: 3
raca: SRD 

nome: Juba
idade: 3
raca: SRD

nome: Jubo
idade: 3
raca: SRD

b. A sintaxe dos três pontos auxilia em utilizar os parametros anteriores sem ter que digitar tudo novamente. */

//3.
/* a. false
   undefined
b. foi impresso esse valores no console pois primeiro pediu apenas se era backender, depois pediu a altura mas como não havia
dados para altura, deu undefined. */

//Exercícios de escrita de código
//a.
 
 const pessoa = {
nome: "Juliano",
apelidos: ["Dufelix", "Ju", "Cabeça"]

}
const outraPessoa = (nick) => {
    console.log(`Eu sou ${nick.nome}, mas pode me chamar de: ${nick.apelidos[0]}, ${nick.apelidos[1]} ou ${nick.apelidos[2]}`)
}
outraPessoa(pessoa)

//b.
 const novoApelido = {
      ... pessoa,
    apelidos: ["Magro", "olho", "cara"] 
}

outraPessoa(novoApelido)

//2.
//a.
const obj1 = {
nome: "Juliano",
idade: 38,
profissao: "Estudante"
}

const obj2 = {
nome: "Samir",
idade: 36,
profissao: "Professor"    
}
const dadosNominais = (objeto) => {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}
dadosNominais(obj1)
dadosNominais(obj2)

//3.
//a.
const carrinho = []
const frutasSacolao = [
{nome: "Carambola" , disponibilidade: true},
{nome: "Laranja" , disponibilidade: true},
{nome: "Manga" , disponibilidade: true}
]

const temFruta = (fruta) => {
    return carrinho.push(fruta)

}
temFruta(frutasSacolao)
console.log(carrinho)
 




