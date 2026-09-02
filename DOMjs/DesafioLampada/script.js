const btn = document.querySelector("button")
const lamp = document.querySelector(".lampa")
let cores = [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray", "brown", "aqua", "cyan", "magenta", "lime", "navy",
    "teal", "olive", "maroon", "silver", "gold", "coral", "crimson", "indigo", "violet", "turquoise", "tomato", "salmon", "khaki", "plum", "beige",
    "chocolate", "lavender", "orchid", "skyblue", "royalblue", "steelblue", "darkgreen", "darkblue", "darkred", "lightblue", "lightgreen", "lightyellow",
    "lightpink", "lightgray", "darkorange", "darkviolet", "deeppink", "deepskyblue"];
let i = 0

btn.addEventListener("click", () => {

    btn.innerHTML == "Ligar" ? btn.innerHTML = "Desligar" : btn.innerHTML = "Ligar"

    setInterval(() => {
        if (btn.innerHTML == "Desligar") {
            lamp.style.backgroundColor = cores[i];
            lamp.style.opacity = "80%";
            lamp.style.boxShadow = `5px 5px 100px ${cores[i]}`

            i == cores.length ? i = 0 : i++;

        } else {
            clearInterval(setInterval)
            lamp.style.backgroundColor = "rgba(169, 169, 169, 0.1)"
            lamp.style.boxShadow = "0 0 30px black"

        }
    }, 500); //meio segundo
})

