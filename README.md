 testes com jest
 Os testes foram realizados seguindo as orientações da documentação.
O jest funciona melhor com JavaScript, com type ele apenas compila. Como fala da documentação:

No entanto, existem algumas ressalvas ao usar TypeScript com Babel. 
Como o suporte a TypeScript no Babel é puramente transpilação,
o Jest não verificará o tipo de seus testes conforme eles são executados. 
Se você quiser, pode usar ts-jest em vez disso ou apenas executar o compilador TypeScript tsc separadamente (ou como parte do processo de compilação).

Link: https://jestjs.io/docs/getting-started#using-typescript
