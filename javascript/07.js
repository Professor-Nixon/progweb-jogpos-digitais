let nota01 = 8.0
let nota02 = 8.0

let media = (nota01+nota02) / 2
let mediaFormatada = media.toFixed(1)

//* Condicionais

if (media < 7) {
    console.log(`Média: ${mediaFormatada} e sua situação é Reprovado.`)
}else{
    console.log(`Média: ${mediaFormatada} e sua situação é Aprovado.`)
}