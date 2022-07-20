

let preco=1000
let distancia="200km"
let cobrando
if(distancia=="km"){
    cobrando=preco*0.50
    console.log("O passageiro precorreu",cobrando)
}else if(distancia=="200km"){
    cobrando=preco*0.45
    console.log("0 passageiro precorreu a longa distancia",cobrando)
}
