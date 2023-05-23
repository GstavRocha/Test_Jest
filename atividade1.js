const dobro = (a)=> {
    return a * 2;
}
const area =(tamanho, largura)=>{
    return tamanho * largura;
}
const desconto =(valorOrginal, desconto)=>{
    valorFinal = valorOrginal * (1 - desconto/100);
    return valorFinal;
}
const maior = (numero1, numero2, numero3) =>{
    if(numero1 > numero3 && numero1 > numero3){
        return numero1;
    }else if( numero2 > numero1 && numero2 > numero3){
        return numero2;
    }else{
        return numero3;
    }
}
module.exports = {
    dobro,
    area,
    desconto,
    maior
}
