let ano_deNascimento=2003
let ano_Actual=2022
let idade, passaram,faltam


idade=ano_Actual-ano_deNascimento
console.log("Mostre a idade",idade)
if(idade<=18){
faltam=18-idade
console.log("Faltam quantos anos",faltam)

}else if(idade>18){
    passaram=idade-18
    console.log("Passaram quantos anos",passaram)
    }

