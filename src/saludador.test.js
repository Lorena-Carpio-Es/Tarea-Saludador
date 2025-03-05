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

});


