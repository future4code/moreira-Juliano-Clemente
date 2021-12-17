/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Boas vindas ao jogo de Blackjack!")
    const jogar = confirm("Quer iniciar uma nova rodada?"); 
       if(jogar){
          console.log("Vamos Jogar!")
    
       }else{
          console.log("O jogo acabou.")
       }
    
       const cartaUsuario = comprarCarta();            
       console.log(`Usuário - cartas: ${cartaUsuario.texto} - pontuação ${cartaUsuario.valor}` )
         

       const cartaComputador = comprarCarta();
       console.log(`Computador - cartas: ${cartaComputador.texto} - pontuação ${cartaComputador.valor}`)
      
const comparacao = (numero1, numero2) => {
if(numero1 > numero2) {
console.log(`O usuário ganhou!`)
}else if(numero1 < numero2) {
   console.log(`O computador ganhou`)
}else if(numero1 === numero2) {
   console.log(`Empate!`)
}
}
console.log(comparacao(cartaUsuario.valor, cartaComputador.valor))
