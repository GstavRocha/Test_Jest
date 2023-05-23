// Uma outra forma de realizar os testes com jest é criando
// um arquivo omônimo ao módulo testado com extensão .test.js
// arquvios .test. são identificados automáticamente pelo comando 'run test'

const Corretor = require("./Corretor");

it("Verifica se o nome está correto", () => {
  // Cria uma função simulada semelhante a jest.fn, mas também rastreia chamadas para object[methodName]
  // Nota: Por padrão, jest.spyOn também chama o método espiado.
  // Este é um comportamento diferente da maioria das outras bibliotecas de teste
  const cadNomeMock = jest.spyOn(Corretor, "cadastraNome");

  // verifico se o nome joão retornará true
  expect(cadNomeMock("João")).toBe(true);

  // depois testo se uma exceção é gerada com um nome inválido
  expect(() => cadNomeMock("X")).toThrow("nome inválido");
});

it("Verifica se a data de contratacao é válida", () => {
  const contratoMock = jest.spyOn(Corretor, "defineContratacao");

  // verifico se hoje é uma data válida
  expect(contratoMock("23/05/2023")).toBe(true);

  // depois testo se uma exceção é gerada com uma data inválida
  expect(() => contratoMock("10/05/2050")).toThrow("data de contratação inválida");
});

it("Verifica se o salario definido é válido", () => {
  const salarioMock = jest.spyOn(Corretor, "defineSalario");

  // verifico se hoje um valor válido
  expect(salarioMock(5000)).toBe(true);

  // depois testo se uma exceção é gerada com uma exceção
  expect(() => salarioMock(800)).toThrow("salario inferior ao piso");
});

it("Verifica se o cadastro de vendas é válido", () => {
  const vendasMock = jest.spyOn(Corretor, "defineVendas");

  // verifico se um valor válido
  expect(vendasMock(5000)).toBe(true);

  // depois testo se uma exceção é gerada com uma exceção
  expect(() => vendasMock(0)).toThrow("valor de vendas zero ou negativo");
});

it("Verifica se o relatorio de vendas funciona", () => {
  const relatarMock = jest.spyOn(Corretor, "relatarVendas");

  const cadNomeMock = jest.spyOn(Corretor, "cadastraNome");
  const contratoMock = jest.spyOn(Corretor, "defineContratacao");
  const salarioMock = jest.spyOn(Corretor, "defineSalario");
  const vendasMock = jest.spyOn(Corretor, "defineVendas");

  cadNomeMock('José')
  contratoMock('22/05/2023')
  salarioMock(10000)
  
  vendasMock(600000)
  // verifico se um valor válido 12%
  expect(relatarMock()).toBe(72000);

  vendasMock(32000)
  // verifico se um valor válido 9,5%
  expect(relatarMock()).toBe(3040);

  vendasMock(10000)
  // verifico se um valor válido 7%
  expect(relatarMock()).toBe(700);
});