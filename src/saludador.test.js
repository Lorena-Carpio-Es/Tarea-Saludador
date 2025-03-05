import saludar from "./salulador.js";

describe("Saludar", () => {
  it("deberia saludar con Hola", () => {
    expect(saludar()).toEqual("Hola");
  });
});


