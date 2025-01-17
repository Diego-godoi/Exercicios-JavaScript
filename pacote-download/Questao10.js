// Questão 10 – Dados o vetor(array) let produtos = [ { id:1 , nome: "Camiseta", preco: 50, estoque: 10 }, { id: 2, nome: "Calça", preco: 100, estoque: 5 }, { id: 3, nome: "Sapato", preco: 200, estoque: 2 } ].
// Execute as seguintes tarefas:
//     1-Crie uma função buscarProdutoPorNome que receba o nome de um produto e retorne os detalhes do produto correspondente.
//     2-Crie uma função adicionarEstoque que receba o ID do produto e a quantidade a ser adicionada ao estoque.
//     3-Crie uma função calcularTotalEstoque que retorne o valor total em estoque da loja (preço × quantidade).

let produtos = [ { id:1 , nome: "Camiseta", preco: 50, estoque: 10 }, { id: 2, nome: "Calça", preco: 100, estoque: 5 }, { id: 3, nome: "Sapato", preco: 200, estoque: 2 } ];


function buscar(nome) {
    for(i=0;i<produtos.length;i++){
        if(produtos[i].nome === nome){
            document.write("Detalhes do produto");
            document.write("Id do produto: "+ produtos[i].id);
            document.write("Nome: "+ produtos[i].nome);
            document.write("Preco: "+ produtos[i].preco);
            document.write("Estoque: "+ produtos[i].estoque);

        }else{
            document.write("Produto nao encontrado")
        }
    }
}

function adicionar(id, quantidade){
    for(i=0;i<produtos.length;i++){
        if(produtos[i].id === id){
            produtos[i].estoque += quantidade;
        }
    }
}

function valorEstoque(){
    let somaPrecos =0;
    let somaEstoque =0;
    for(i=0;i<produtos.length;i++){
        somaPrecos += produtos[i].preco;
        somaEstoque += produtos[i].estoque;
    }
    return somaPrecos*somaEstoque;
}

let nome = prompt("Digite o nome do produto a ser buscado: ");
buscar(nome);
let id = parseInt(prompt("Digite o id do produto para adicionar ao estoque: "));
let quantidade = parseInt(prompt("Quantidade a ser adicionada: "));
adicionar(id, quantidade);
let totalValor = valorEstoque();
document.write("Valor total em estoque da loja: "+totalValor);