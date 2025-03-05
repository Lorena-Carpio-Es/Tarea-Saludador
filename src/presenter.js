import saludar from "./saludador.js"; // Importar la función saludar

const nombreInput = document.querySelector("#nombre"); // Obtener el campo de entrada del nombre
const form = document.querySelector("#saludar-form"); // Obtener el formulario
const div = document.querySelector("#resultado-div"); // Obtener el div para mostrar el resultado

// Escuchar el evento "submit" del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  const nombre = nombreInput.value; // Obtener el valor del campo de entrada
  const saludo = saludar(nombre); // Llamar a la función saludar con el nombre

  // Mostrar el resultado en el div
  div.innerHTML = "<p>" + saludo + "</p>";
});