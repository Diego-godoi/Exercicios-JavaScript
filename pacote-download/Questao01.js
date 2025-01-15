/*Questão 01 - Crie um programa que o usuário digite uma idade e seja classifique em:Criança (0 a 12 anos)
- Adolescente (13 a 17 anos) - Adulto (18 a 64 anos) - Idoso (65 anos ou mais).*/

alert("Classificacao da pessoa conforme a idade")
let idade = parseInt(prompt("Digite uma idade: "));

if(idade>=0 && idade<=12){
    document.write("Criança");
}else if(idade>=13 && idade<=17){
    document.write("Adolescente");
}else if(idade>=18 && idade<=64){
    document.write("Adulto");
}else if(idade>=65){
    document.write("Idoso");
}else{
    document.write("Idade invalida");
}