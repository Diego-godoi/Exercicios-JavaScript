// Questão 03 - Crie um programa que o usuário digite uma nota entre 0 e 100 e converta para conceitos: 90 a 100: A - 80 a 89: B - 70 a 79: C - 60 a 69: D - Abaixo de 60: F.
alert("Conceito de uma nota (0 a 100)")
let  nota =0;

nota = parseFloat(prompt("Digite uma nota entre 0 e 100: "));

if(nota>=90 && nota<=100){
    document.write("A");
}else if(nota>=80 && nota<=89){
    document.write("B");
}else if(nota>=70 && nota<=79){
    document.write("C");
}else if(nota>=60 && nota<=69){
    document.write("D");
}else if(nota<60 && nota>=0){
    document.write("F");
}else{
    document.write("Nota invalida");
}