//Exercícios de interpretação de código
//1. 0, 1, 2, 3, 4 o valor impresso seria 10, pois ele adiciona um numero e aumenta com o anterior.

//2.
//a. [19, 21, 23, 25, 27]
//b.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
  
//     console.log(lista.indexOf(0))
                     
//     }

//3.
// *
// **
// ***
// ****

//Exercícios de escrita de código
//1.
/* const quantidadeDeAnimais = Number(prompt("Quantos bichos de estimação você tem?"))

if (quantidadeDeAnimais === 0) {
    console.log("Que pena! Você pode adotar um pet!")

   }else {
       let array = []
       for (let i = 0; i < quantidadeDeAnimais; i++) {
    
            const nomeDosBichinhos = prompt("Digite o nome do(s) seu(s) animais!")         
            array.push(nomeDosBichinhos)
         }
         console.log(array)
   } */
   
//2.
const arrayOriginal = [1, 2, 3, 4, 5]
for (let array of arrayOriginal) {
    console.log(array)
}
for (let array of arrayOriginal) {
    console.log(array / 10)
}
const arrayPar = []
for (let array of arrayOriginal) {
    if ((array % 2) === 0){
        arrayPar.push(array) 

    } 

}
console.log(arrayPar)

const arrayString = []
/* for (let array of arrayOriginal) {
            arrayString.push(`O elemento do índex ${arrayOriginal.indexOf(array)} é: ${array}`)
}
console.log(arrayString) */

for(let i = 0; i < arrayOriginal.length; i++)  {
    arrayString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}
console.log(arrayString)
