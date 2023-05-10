export let dobro = (numero: number): number =>{
    return numero * 2;
}
export let area = (comprimento: number, largura: number): number =>{
    return comprimento * largura;
}
export let desconto = (valorIncial: number, perCentoDesconto: number): number =>{
    const valorDeconto: number = (valorIncial * perCentoDesconto) / 100;
    return valorIncial - valorDeconto;
}
export let qualMaior = (valor1: number, valor2: number, valor3: number): number =>{
    if(valor1 > valor2 && valor1 > valor3){
        return valor1;
    }else if(valor2 > valor1 && valor2>valor3){
        return valor2;

    }else{
        return valor3;
    }
}

