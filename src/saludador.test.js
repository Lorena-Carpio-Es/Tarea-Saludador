import saludar from "./saludador.js";

describe("Saludar", () => {
  it("deberia saludar con Hola", () => {
    expect(saludar()).toEqual("Hola");
  });

  it("deberia saludar con 'Hola, Juan' si el nombre es Juan", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan");
  });

  it("deberia saludar con 'Buenos días' si es por la mañana", () => {
    const fecha = new Date(2023, 10, 1, 9, 0); // 9:00 AM
    expect(saludar("Juan", fecha)).toEqual("Buenos días, Juan");
  });

  it("deberia saludar con 'Buenas tardes' si es por la tarde", () => {
    const fecha = new Date(2023, 10, 1, 15, 0); // 3:00 PM
    expect(saludar("Juan", fecha)).toEqual("Buenas tardes, Juan");
  });

  it("deberia saludar con 'Buenas noches' si es por la noche", () => {
    const fecha = new Date(2023, 10, 1, 21, 0); // 9:00 PM
    expect(saludar("Juan", fecha)).toEqual("Buenas noches, Juan");
  });

  it("deberia saludar con 'Buenos días, Sr. Juan' si es hombre", () => {
    const fecha = new Date(2023, 10, 1, 9, 0); // 9:00 AM
    expect(saludar("Juan", fecha, "hombre")).toEqual("Buenos días, Sr. Juan");
  });

  it("deberia saludar con 'Buenos días, Sra. Maria' si es mujer", () => {
    const fecha = new Date(2023, 10, 1, 9, 0); // 9:00 AM
    expect(saludar("Maria", fecha, "mujer")).toEqual("Buenos días, Sra. Maria");
  });

  it("deberia saludar con 'Buenos días, Sr. Juan' si es mayor de 30", () => {
    const fecha = new Date(2023, 10, 1, 9, 0); // 9:00 AM
    expect(saludar("Juan", fecha, "hombre", 35)).toEqual("Buenos días, Sr. Juan");
  });

  it("deberia saludar con 'Buenos días, Juan' si es menor de 30", () => {
    const fecha = new Date(2023, 10, 1, 9, 0); // 9:00 AM
    expect(saludar("Juan", fecha, "hombre", 25)).toEqual("Buenos días, Juan");
  });

  it("deberia saludar en español con 'Buenos días, Sr. Juan'", () => {
    const fecha = new Date(2023, 10, 1, 9, 0); // 9:00 AM
    expect(saludar("Juan", fecha, "hombre", 35, "es")).toEqual("Buenos días, Sr. Juan");
  });

  it("deberia saludar en inglés con 'Good morning, Mr. Juan'", () => {
    const fecha = new Date(2023, 10, 1, 9, 0); // 9:00 AM
    expect(saludar("Juan", fecha, "hombre", 35, "en")).toEqual("Good morning, Mr. Juan");
  });

});


