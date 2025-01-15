// Questão 04 - Crie um programa que o usuário digite várias notas e calcule a média. O programa deve continuar pedindo notas até que o usuário insira um número negativo.
alert("Media de notas")
let soma =0;
let contador = 0;
do{
    var nota = parseFloat(prompt("Digite uma nota (para sair digite um numero negativo): "));
    if(nota>=0){
        soma += nota;
        contador++;
    }
}while(nota>=0);

if(contador>0){
    const media = soma/contador;
    document.write("Média: " + media);
}else{
    document.write("Não foi possível calcular a média");
}