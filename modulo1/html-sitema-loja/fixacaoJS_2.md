```function calculaPrecoTotal(quantidade) {
      let preco 
     if(quantidade < 12){
     preco = 1.30
   }else if(quantidade >= 12){
     preco = 1.00
   }
  
  let precoFinal = quantidade * preco
  return quantidade * preco
  
  } ```