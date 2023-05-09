import Questao1 from "../questao1";
let novo = new Questao1(2,3,10)
novo.Dobro();

test(`O dobro de 2 e 3 `,()=>{
    expect(novo.Dobro().toBe(6))
})
