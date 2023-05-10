"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualMaior = exports.desconto = exports.area = exports.dobro = void 0;
let dobro = (numero) => {
    return numero * 2;
};
exports.dobro = dobro;
let area = (comprimento, largura) => {
    return comprimento * largura;
};
exports.area = area;
let desconto = (valorIncial, perCentoDesconto) => {
    const valorDeconto = (valorIncial * perCentoDesconto) / 100;
    return valorIncial - valorDeconto;
};
exports.desconto = desconto;
let qualMaior = (valor1, valor2, valor3) => {
    if (valor1 > valor2 && valor1 > valor3) {
        return valor1;
    }
    else if (valor2 > valor1 && valor2 > valor3) {
        return valor2;
    }
    else {
        return valor3;
    }
};
exports.qualMaior = qualMaior;
