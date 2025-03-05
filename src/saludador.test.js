import saludar from "./saludador.js";

describe("Saludar", () => {
  it("deberia saludar con Hola", () => {
    expect(saludar()).toEqual("Hola");
  });
  it("deberia saludar con 'Hola, Juan' si el nombre es Juan", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan");
  });
  
});


