//* 1. Crie um botão que mostre, dentro de um <p>, 
//*    quantas vezes ele já foi clicado (ex: "Cliques: 3").

const bt = document.querySelector("#acao")
const result = document.querySelector(".resultado")
let cont = 1
let cores = ["red", "blue", "green", "grey", "yellow", "tomato", "chocolate"]
let i = 0
bt.addEventListener("click", () => {
    
    result.innerHTML = `Total de cliques: ${cont++}`;
    i < cores.length ? result.style.backgroundColor = cores[i] : i=0;
    i++

})