"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questao1 = void 0;
class Questao1 {
    constructor(n1, n2, n3) {
        this.numero1 = n1;
        this.numero2 = n2;
        this.numero3 = n3;
    }
    ;
    getNumero1() {
        return this.numero1;
    }
    ;
    getNumero2() {
        return this.numero2;
    }
    ;
    getNumero3() {
        return this.numero3;
    }
    ;
    setNumero1(novo1) {
        this.numero1 = novo1;
    }
    ;
    setNumero2(novo2) {
        this.numero2 = novo2;
    }
    ;
    setNumero3(novo3) {
        this.numero3 = novo3;
    }
    ;
    Dobro() {
        let dobro = this.numero1 * 2;
        return dobro;
    }
    ;
    Area() {
        let largura = this.numero2;
        let comprimento = this.numero3;
        let caculo = largura * comprimento;
        return `A largura da sala é ${largura} e o comprimento é ${comprimento}, assim a Aera é de ${caculo}`;
    }
    ;
    descontoProduto(valor, desconto) {
        let valorDesconto = valor * desconto / 100;
        let valorFinal = valor - valorDesconto;
        return `${valorFinal} valor final.`;
    }
    quemEmaior() {
        let num1 = this.numero1;
        let num2 = this.numero2;
        let num3 = this.numero3;
        if (num1 > num2 && num1 > num3) {
            return `num1 é o maior ${num1}`;
        }
        else if (num2 > num1 && num2 > num3) {
            return `num2 é o maior ${num2}`;
        }
        else {
            return `num3 é o maior ${num3}`;
        }
    }
    ;
}
exports.Questao1 = Questao1;
exports.default = Questao1;