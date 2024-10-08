/*var idade = 20
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18){
        console.log('Voto opcinal')
}else if(idade >= 67){
    console.log('opcional')
}else{
    console.log('Voto obrigatório')
}*/

var idade = 67
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('Voto opcinal')
}else{
    console.log('Voto obrigatório')
}
