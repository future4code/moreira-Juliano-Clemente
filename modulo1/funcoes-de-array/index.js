//Exercícios de interpretação de código
//1. Será impresso cada item do array com seu respectivo indice e tama o 
// [nome: "Amanda Rangel", apelido: "Mandi",
// nome: "Laís Petra", apelido: "Laura",
// nome: "Letícia Chijo", apelido: "Chijo"]
//2. [Amanda Rangel, Laís Petra, Letícia Chijo]
//3.[nome: "Amanda Rangel", apelido: "Mandi",
//   nome: "Laís Petra", apelido: "Laura"]


//Exercícios de escrita de código

//1. 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomeDosCaes = pets.map ((item) => {
     return item.nome
 })
const racaDosCaes = pets.filter((item) => {
    return item.raca === "Salsicha"
})
const descontoTosa = pets.filter((item) => {
    return item.raca === "Poodle"

})
const filtroDesconto = descontoTosa.map((item) =>{
       return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    
})
 console.log(nomeDosCaes)
 console.log(racaDosCaes)
 console.log(filtroDesconto)
//  for(i = 0; i > descontoTosa; i++) { 
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}!`)
// }

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a.
 const nomeProdutos = produtos.map((item) => {
     return item.nome
 })
//b.
 const produtosDesconto = produtos.map((item) => {
 //const precoMenosCinco = item.preco * 0.95 
    return item.nome + ' ' + item.preco * 0.95
})  
 
//c. 
const produtoBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

//d.
const produtoEspecifico = produtos.filter((item) =>{ 
    return  item.nome.includes("Ypê") 
}) 

//e.
const ypeFrase = produtoEspecifico.map ((item, indice) => { 
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(nomeProdutos)
console.log(produtosDesconto)
console.log(produtoBebidas)
console.log(produtoEspecifico)
console.log(ypeFrase)

//Desafio
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a.
 const ordemAlfabetica = pokemons.map((item) => { 
     return item.nome
 })

 console.log(ordemAlfabetica.sort())

 //b.
 const tipoPokemon = pokemons.map((item) => {
    return item.tipo
 })
const tipoSemRepetir = [...new Set(tipoPokemon)]

  console.log(tipoSemRepetir)
  