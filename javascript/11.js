//* FUNÇÃO ANÔNIMA
let saudacao = function() {
    console.log("Olá mundo!")
}
saudacao()

let media = function(n1, n2){
    return (n1 + n2) / 2
} 
console.log(media(10, 8))

potencia = function(numero, expoente){
    return numero ** expoente
}

let n1 = 10, n2 = 2

let resultado = potencia(n1, n2)
console.log(n1+" elevado a "+n2+" = "+resultado)