function saludar(nombre = "", fecha = new Date(), genero = "", edad = 0) {
  const hora = fecha.getHours();
  let saludo = "Hola";
  let tratamiento = "";

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  if (edad > 30) {
    if (genero === "hombre") {
      tratamiento = "Sr.";
    } else if (genero === "mujer") {
      tratamiento = "Sra.";
    }
  }

  return `${saludo}, ${tratamiento} ${nombre}`;
}

export default saludar;