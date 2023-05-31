let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let select = document.getElementById("select");
let calcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

const realizarCalculo = () => {
    switch (select.value) {
    case "suma":
        resultado.innerText = parseInt(numero1.value) + parseInt(numero2.value);
        break;
    case "resta":
        resultado.innerText = parseInt(numero1.value) - parseInt(numero2.value);
        break;
    case "multiplicacion":
        resultado.innerText = parseInt(numero1.value) * parseInt(numero2.value);
        break;
    case "division":
        resultado.innerText = parseInt(numero1.value) / parseInt(numero2.value);
        break;

    default:
        resultado.innerText = "";
        break;
    }
};