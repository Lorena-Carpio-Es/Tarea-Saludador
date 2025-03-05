function saludar(nombre = "", fecha = new Date(), genero = "", edad = 0, idioma = "es") {
  const hora = fecha.getHours();
  let saludo = "";
  let tratamiento = "";

  if (idioma === "es") {
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
  } else if (idioma === "en") {
    if (hora >= 6 && hora < 12) {
      saludo = "Good morning";
    } else if (hora >= 12 && hora < 19) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good evening";
    }

    if (edad > 30) {
      if (genero === "hombre") {
        tratamiento = "Mr.";
      } else if (genero === "mujer") {
        tratamiento = "Mrs.";
      }
    }
  }

  return `${saludo}, ${tratamiento} ${nombre}`;
}

export default saludar;