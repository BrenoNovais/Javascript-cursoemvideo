var idade = 66
if (idade < 18) {
    console.log('Menor de idade')
    if (idade >= 16 && idade < 18) {
        console.log('Voto Opcional')
    }else{
        console.log('Não Vota')
    }
}else{
    console.log('Maior de idade')
    if (idade < 65) {
        console.log('Voto Obrigatório')
    }else {
        console.log('Voto Opcional')
    }
}