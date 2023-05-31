const btn_cambiante = document.getElementById("btn_cambiante");
const parrafo_cambiante = document.getElementById("parrafo_cambiante");

let contadorclic = 0;

btn_cambiante.addEventListener("click", function () {
    if (contadorclic == 1) {
        parrafo_cambiante.classList.add("purple");
    }
    else if (contadorclic == 2) {
        parrafo_cambiante.classList.remove("purple");
        parrafo_cambiante.classList.add("orange")
    }
    else {
        parrafo_cambiante.classList.remove("orange");
        parrafo_cambiante.removeAttribute("class");
    }

    contadorclic++;
    if (contadorclic > 2) {
        contadorclic = 0;
    }
});
