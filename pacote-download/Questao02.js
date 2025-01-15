// Questão 02 - Crie um programa que o usuário digite o valor de uma compra e a forma de pagamento: À
// vista no dinheiro: 10% de desconto - No cartão: 5% de desconto - Parcelado: sem desconto. Calcule e
// mostre o valor final.

alert("Calculo do valor final de uma compra")
let valor = parseFloat(prompt("Digite o valor da compra:"));
let Pagamento = prompt("Digite a forma de pagamento (à vista no cartão, no cartão ou parcelado): ");

if(formaPagamento == "à vista no dinheiro"){
    valor = valor - (valor * 10/100);
    document.write("Valor final: " + valor);
}else if(formaPagamento == "no cartão"){
    valor = valor - (valor * 5/100);
    document.write("Valor final: " + valor);
}else if(formaPagamento == "parcelado"){
    document.write("Valor final : " + valor);
}else{
    document.write("Forma de pagamento invalida");
}