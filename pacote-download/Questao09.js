// Questão 09 - Crie um programa de votação (sistema de votação) os votos (nome do candidato votado) serão armazenados em um vetor(array) de String que deve receber no máximo 10 votos. O seu programa deve: 1- Conte quantos votos cada candidato recebeu. 2- Determine o vencedor da votação. 3- Se houver empate, exiba os candidatos empatados.

alert("Sistema de votacao");

let candidatos = ["Candidato A", "Candidato B", "Candidato C"];
let votos = new Array(10); 
let contadorA = 0;
let contadorB = 0;
let contadorC = 0;


for (let i = 0; i < votos.length; i++) {
    let voto = prompt("Digite o nome do candidato (Candidato A, Candidato B, Candidato C) para a votacao: ");


    if (voto === "Candidato A") {
        votos[i] = "Candidato A";
        contadorA++;
    } else if (voto === "Candidato B") {
        votos[i] = "Candidato B";
        contadorB++;
    } else if (voto === "Candidato C") {
        votos[i] = "Candidato C";
        contadorC++;
    } else {
        alert("Voto inválido. Tente novamente.");
        i--; 
    }
}

document.write("Votos registrados");
document.write("Candidato A: "+contadorA+" votos")
document.write("Candidato B: "+contadorB+" votos")
document.write("Candidato C: "+contadorC+" votos")

if (contadorA > contadorB && contadorA > contadorC) {
    document.write("O vencedor é: Candidato A");
} else if (contadorB > contadorA && contadorB > contadorC) {
    document.write("O vencedor é: Candidato B");
} else if (contadorC > contadorA && contadorC > contadorB) {
    document.write("O vencedor é: Candidato C");
} else {
    let empate = "Houve um empate entre os candidatos: ";
    if (contadorA === contadorB && contadorA > contadorC) {
        empate += "Candidato A e Candidato B";
    } else if (contadorA === contadorC && contadorA > contadorB) {
        empate += "Candidato A e Candidato C";
    } else if (contadorB === contadorC && contadorB > contadorA) {
        empate += "Candidato B e Candidato C";
    } else if (contadorA === contadorB && contadorB === contadorC) {
        empate += "Candidato A, Candidato B e Candidato C";
    }
    document.write(empate);
}
