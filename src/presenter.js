import saludar from "./saludador.js"; // Importar la función saludar

const form = document.querySelector("#saludar-form"); // Obtener el formulario
const div = document.querySelector("#resultado-div"); // Obtener el div para mostrar el resultado

// Escuchar el evento "submit" del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Llamar a la función saludar y mostrar el resultado en el div
  div.innerHTML = "<p>" + saludar() + "</p>";
});