const testesTest1 = require("./atividade1");
const testeTest2 = require("./atividade2");

test("Resultado do dobro do numero", () => {
  expect(testesTest1.dobro(2)).toBe(4);
  expect(testesTest1.dobro(4)).toBe(8);
  expect(testesTest1.dobro(3)).toBe(6);
  expect(testesTest1.dobro(2)).toBe(8);
  expect(testesTest1.dobro(3)).toBe(12);

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
  expect(testeTest2.nomeMinimo("abc5")).toBe(true);
});
// teste usando o oposto do resultado esperado.
test("Usando o resultado oposto",()=>{
  expect(testeTest2.mediaResultado(6,7)).not.toBe('Reprovado')
});
test("Verificar se o nome possui comprimento mínimo de 3 caracteres", () => {
  expect(testeTest2.nomeMinimo("João")).toBe(true);
  expect(testeTest2.nomeMinimo("Ana")).toBe(true);
  expect(testeTest2.nomeMinimo("Lu")).toBe(false);
  expect(testeTest2.nomeMinimo("Maria")).toBe(true);
  expect(testeTest2.nomeMinimo("Pedro")).toBe(true);
});
test("Verificar se todas as informações são fornecidas corretamente", () => {
  expect(testeTest2.cadastro("João", 25, [8, 7, 9], 2)).toBe(true);
});

test("Verificar se nome é nulo", () => {
  expect(testeTest2.cadastro(null, 30, [7, 6, 8], 1)).toBe(false);
});

test("Verificar se idade é nula", () => {
  expect(testeTest2.cadastro("Maria", null, [6, 5, 7], 3)).toBe(false);
});

test("Verificar se notas são nulas", () => {
  expect(testeTest2.cadastro("Pedro", 28, null, 0)).toBe(false);
});

test("Verificar se quantidade de faltas é nula", () => {
  expect(testeTest2.cadastro("Ana", 22, [9, 8, 9], null)).toBe(false);
});
