// Questão 07 - Crie um programa que gerencie as notas dos alunos para o professor. As notas estão  armazenadas em um array (vetor) de até 10 posições (são 10 alunos). Desta maneira o programa deve: 1 - Calcular a média das notas; 2- Determine quantos alunos tiveram nota acima da média; 3 - Exiba a menor e a maior nota.

alert("Gerenciamento de notas");

let notas = new Array(10);
let soma =0;
let media =0;
for (let i = 0; i < notas.length; i++) {
    notas[i] = parseFloat(prompt("Digite a nota do "+ (i+1)+"° aluno: "));
     soma = soma + notas[i];
}
media = soma / notas.length

let contador = 0;
for (let i = 0; i < notas.length; i++) {
    if(notas[i]>media){
        contador++;
    }
}


let menorNota = notas[0];
let maiorNota = notas[0];
for(let i = 0; i<notas.length; i++){
    if(notas[i]<menorNota){
        menorNota = notas[i];
    }
    if(notas[i]>maiorNota){
        maiorNota = notas[i];
    }
}


document.write("Media das notas: "+ media);
document.write("<br>Foram "+ contador+" alunos maior que a media das notas");
document.write("<br>Maior nota: "+ maiorNota);
document.write("<br>Menor nota: "+ menorNota);
