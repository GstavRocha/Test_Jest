let dobro = (a)=> {
    return a * 2;
}
let area =(tamanho, largura)=>{
    return tamanho * largura;
}
let desconto =(valorOrginal, desconto)=>{
    valorFinal = valorOrginal * (1 - desconto/100);
    return valorFinal;
}
let maior = (numero1, numero2, numero3) =>{
    if(numero1 > numero3 && numero1 > numero3){
        return numero1;
    }else if( numero2 > numero1 && numero2 > numero3){
        return numero2;
    }else{
        return numero3;
    }
}
module.exports = {
    dobro: dobro,
    area: area,
    desconto: desconto,
    maior: maior
}
