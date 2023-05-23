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
let cadastro = (nome, idade, notas, quantidadeFaltas)=>{
    try {
        return !(idade == null || notas == null || quantidadeFaltas == null);
    }catch (error){
    console.error('O ocorreu um erro', error.message);
    return 'Erro';
    }
}
let media = (nota1, nota2) =>{
    return (nota1 + nota2)/2
}
let mediaResultado =(nota1, nota2)=>{
    if ((nota1+nota2)/ 2 >= 6.0){
        return 'Aprovado';
    }
    return 'Reprovado';
}
module.exports = {
    nomeMinimo: nomeMinimo,
    idadeMinima: idadeMinima,
    notas: notas,
    controle: controleFaltas,
    cadastro: cadastro,
    media: media,
    mediaResultado: mediaResultado
}
