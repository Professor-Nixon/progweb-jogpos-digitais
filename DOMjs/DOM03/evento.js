document.getElementById("bt-acao").innerHTML = "Clique-me"

const botao = document.querySelector("#bt-acao"); 

// function mudarCor() {
    // document.getElementById("bt-acao").style.backgroundColor="chocolate"
    // document.querySelector("#bt-acao").style.backgroundColor="tomato"
// }

//* 1. Evento de clique
botao.addEventListener("click", () => {
    botao.style.color = "yellow"
} )

//* 2. Evento de duplo clique
botao.addEventListener("dblclick", () => {
    botao.style.color = "white"
})

//* 3. Evento Entrando na área do botão
botao.addEventListener("mouseenter", () => {
    botao.innerHTML = "Olá!"
})

//* 4. Evento Saindo da área do botão
botao.addEventListener("mouseleave", () => {
    botao.innerHTML = "Clique-me!"
})

//* 5. Evento Pressionando o botão do mouse
botao.addEventListener("mousedown", () => {
    botao.innerHTML = "Pressionando!"
    botao.style.fontSize = "20px"
})

//* 6. Evento Solta o botão do mouse que estava pressionado
botao.addEventListener("mouseup", () => {
    botao.innerHTML = "Soltou!"
    botao.style.fontSize = "25px"
})

//* 7. Evento Botão ganhando foco
botao.addEventListener("focus", () => {
    botao.innerHTML = "Ganhei foco!"
    botao.style.fontSize = "20px"
})

//* 8. Evento Botão perdendo foco
botao.addEventListener("blur", () => {
    botao.innerHTML = "Perdi foco!"
    botao.style.fontSize = "20px"
})

//* 9. Evento pressionar tecla
botao.addEventListener("keydown", (evento) => {
    botao.innerHTML = `Tecla Pressionada: ${evento.key}`
    botao.style.fontSize = "15px"
})