let numero = 8
let divisor = 2

let resto = numero % divisor

if (resto == 1){
    console.log(`${numero} é impar`)
}else 
    if (resto == 0){
        console.log(`${numero} é par`)
    }else{
        console.log("Número invalido.")
    }

    