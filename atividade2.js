const nomeMinimo =(nome)=>{
    return nome.length >= 3;

}
const idadeMinima = (idade) =>{
    return idade >= 18;
}
const notas=(nota1, nota2)=>{
    return nota1 > 0 && nota1 < 100 && nota2 > 0 && nota2 < 100
}
const controleFaltas =(faltas)=>{
    return faltas>= 0;
}
const cadastro = (nome, idade, notas, quantidadeFaltas)=>{
    try {
        return !(idade == null || notas == null || quantidadeFaltas == null);
    }catch (error){
    console.error('O ocorreu um erro', error.message);
    return 'Erro';
    }
}
const media = (nota1, nota2) =>{
    return (nota1 + nota2)/2
}
const mediaResultado =(nota1, nota2)=>{
    if ((nota1+nota2)/ 2 >= 6.0){
        return 'Aprovado';
    }
    return 'Reprovado';
}
module.exports = {
    nomeMinimo,
    idadeMinima,
    notas,
    controleFaltas,
    cadastro,
    media,
    mediaResultado
}
