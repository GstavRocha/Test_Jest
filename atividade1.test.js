const atividade1Test = require('./atividade1')

test('Resultado do dobro é igual a 4',()=>{
    expect(atividade1Test.dobro(2)).toBe(4)
});
test('O tamanho a Area é igual a Tamanho * Area 100',()=>{
    expect(atividade1Test.area(10,10)).toBe(100);
});
test('O valor de Desconto é 10',()=>{
    expect(atividade1Test.desconto(20,50)).toBe(10);
});
test('O maior número é 3',()=>{
    expect(atividade1Test.maior(1,3,2)).toBe(3)
})

