let nomeMinimo =(nome)=>{
    return nome.length >= 3;

}
let idadeMinima = (idade) =>{
    return idade >= 18;
}
let notas=(nota1, nota2)=>{
    return nota1 > 0 && nota1 < 100 && nota2 > 0 && nota2 < 100
}
let controleFaltas =(faltas)=>{
    return faltas>= 0;
}
module.exports = {
    nomeMinimo: nomeMinimo,
    idadeMinima: idadeMinima,
    notas: notas,
    controle: controleFaltas
}
