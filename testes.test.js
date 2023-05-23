const testesTest1 = require("./atividade1");
const testeTest2 = require("./atividade2");

test("Resultado do dobro é igual a 4", () => {
  expect(testesTest1.dobro(2)).toBe(4);
});
test("O tamanho a Area é igual a Tamanho * Area 100", () => {
  expect(testesTest1.area(10, 10)).toBe(100);
});
test("O valor de Desconto é 10", () => {
  expect(testesTest1.desconto(20, 50)).toBe(10);
});
test("O maior número é 3", () => {
  expect(testesTest1.maior(1, 3, 2)).toBe(3);
});
test("O nome é maior que 3", () => {
  expect(testeTest2.nome("abc")).toBe(true);
});

