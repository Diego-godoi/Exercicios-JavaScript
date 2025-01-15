// Questão 06 - Crie um programa que imprima todos os números de 1 a 50 divisíveis por 3 e 5 ao mesmo tempo.

alert("Todos os numeros de 1 a 50 divisiveis por 3 e 5 a mesmo tempo")
for(let numero=1; numero<=50; numero++){
    if(numero%3==0 && numero%5==0){
        document.write(numero+"<br>");
    }
}