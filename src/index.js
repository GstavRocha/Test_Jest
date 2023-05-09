"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questao1_1 = __importDefault(require("./Atividade1/questao1"));
let teste = new questao1_1.default(6, 3, 4);
console.log(teste.Dobro());
console.log(teste.Area());
console.log(teste.quemEmaior());
console.log(teste.descontoProduto(100, 25));
