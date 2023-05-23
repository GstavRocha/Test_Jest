// 03. Crie uma classe Corretor, contendo as seguintes
// especificações:
// Uma empresa de vendas tem três corretores. A empresa paga ao
// corretor, uma comissão calculada de acordo com o valor de suas
// vendas. Se o valor total da venda de um corretor for maior que R$
// 5.000,00, a comissão será de 12% do valor vendido. Se o valor da
// venda do corretor estiver entre R$ 30.000,00 e R$ 50.000,00
// (incluindo extremos), a comissão será de 9,5%. Qualquer outro
// caso, a comissão será de 7%. Escreva um algoritmo que gere um
// relatório contendo nome, valor da venda e comissão de cada um
// dos corretores. O relatório deve mostrar também, o total de
// vendas da empresa.
// a) Nome, com mínimo 3 letras;
// b) A data de contratação não pode ser superior a data atual;
// c) O salário do funcionário não pode ser inferior a R$ 1.000,00;
// d) Valor vendido durante o mês. Este valor não pode ser
// inferior a zero;
// e) Crie um método que retorne a comissão do corretor
// conforme as regras da empresa.
const corretor = {
  nome: "",
  dataContratacao: "",
  salario: "",
  vendasMes: "",
};

const cadastraNome = (dado) => {
  if (dado.length <= 3) {
    throw "nome inválido";
  } else {
    corretor.nome = dado;
    return true;
  }
};

const defineContratacao = (data) => {
  let hoje = new Date();
  let dataContrato = new Date(data);
  if (dataContrato > hoje) {
    throw "data de contratação inválida";
  } else {
    corretor.dataContratacao = data;
    return true;
  }
};

const defineSalario = (salario) => {
  if (salario < 1000) {
    throw "salario inferior ao piso";
  } else {
    corretor.salario = salario.toFixed(2);
    return true;
  }
};

const defineVendas = (venda) => {
  if (venda <= 0) {
    throw "valor de vendas zero ou negativo";
  } else {
    corretor.vendasMes = venda;
    return true;
  }
};

const relatarVendas = () => {
  if (corretor.vendasMes > 50000) {
    return Math.round(corretor.vendasMes * 0.12);
  } else if (corretor.vendasMes < 50000 && corretor.vendasMes > 30000) {
    return Math.round(corretor.vendasMes * 0.095);
  } else {
    return Math.round(corretor.vendasMes * 0.07);
  }
};

module.exports = {
  corretor,
  cadastraNome,
  defineContratacao,
  defineSalario,
  defineVendas,
  relatarVendas,
};
