import saludar from "./saludador.js";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre.value;
  const generoValue = genero.value;
  const edadValue = Number.parseInt(edad.value);
  const idiomaValue = idioma.value;

  div.innerHTML = "<p>" + saludar(nombreValue, new Date(), generoValue, edadValue, idiomaValue) + "</p>";
});