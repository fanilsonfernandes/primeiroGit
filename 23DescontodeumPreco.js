
let nome="antonio"
let preco=200
let desconto,promocao
 let sexo="m"

if(sexo==="f"){
    desconto=preco*0.13
   
    promocao=preco-desconto
    console.log("A promocao da cliente",nome,"e de",promocao)

}else if( sexo==="m"){
    desconto=preco*0.5
    promocao=preco-desconto
    console.log("A promocao do cliente",nome,"e de",promocao)

}

