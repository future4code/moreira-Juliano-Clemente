// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b) {
      return a - b;
  })

}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
 let par = []
 for (i = 0; i < array.length; i++) {
     if(array[i] % 2 === 0) {
        par.push(array[i]); 
     }
 }
 return par
 }
 
  

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let parAoQuadrado = []
    for (i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0 ) {
           par.push(array[i] ** 2 ); 
        }
    }
    return parAoQuadrado
}    

  
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let = 0
    let maiorNumero = -Infinity
      for(let i = 0; i < array.length; i++) {
        if(array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let numeroMajor
let numeroMenor
let diferenca
let maiorDiv

if( num1 > num2 ) {
    numeroMajor = num1
    numeroMenor = num2
}else {
    numeroMajor = num2
    numeroMenor = num1
}
maiorDiv = numeroMajor % numeroMenor === 0 
diferenca = numeroMajor - numeroMenor

return {maiorNumero: numeroMajor , maiorDivisivelPorMenor: maiorDiv, diferenca: diferenca}

}





// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let N = []
    let i = 0
    for (let i = 0; i < array.length; i++)
    if(array[i] % 2 === 0) {
        N.push(array[i] = i)
    }
    return N
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}