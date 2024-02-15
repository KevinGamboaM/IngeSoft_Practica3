import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const sumarButton = document.querySelector("#sumar-button");
const multiplicarButton = document.querySelector("#multiplicar-button");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  if (event.submitter === sumarButton) {
    div.innerHTML = "<p>Resultado de la suma: " + sumar(firstNumber, secondNumber) + "</p>";
  } else if (event.submitter === multiplicarButton) {
    div.innerHTML = "<p>Resultado de la multiplicación: " + multiplicar(firstNumber, secondNumber) + "</p>";
  }
});





