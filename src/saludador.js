function saludar(nombre = "", fecha = new Date()) {
  const hora = fecha.getHours();
  let saludo = "Hola";

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  return `${saludo}, ${nombre}`;
}

export default saludar;