// Questão 08 - Crie um programa que gerencie as vendas de uma empresa. Em um array (vetor) armazene as vendas que contém o preço de custo e o preço de venda de cada item (o usuário deve digitar 10 itens):

alert("Gerenciamento de vendas de uma empresa");
let item = [];

for (let i = 0; i < 10; i++) {
    precoCusto = parseFloat(prompt("Digite o preco de custo do "+ (i+1)+"° item: "));
    precoVenda = parseFloat(prompt("Digite o preco de Venda do "+ (i+1)+"° item: "));
    item[i] = {precoCusto: precoCusto, precoVenda: precoVenda};
}