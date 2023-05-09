"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questao1_1 = __importDefault(require("../questao1"));
let novo = new questao1_1.default(2, 3, 10);
novo.Dobro();
test(`O dobro de 2 e 3 `, () => {
    expect(novo.Dobro().toBe(6));
});
