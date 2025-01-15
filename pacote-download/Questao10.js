// Questão 10 – Dados o vetor(array) let produtos = [ { id:1 , nome: "Camiseta", preco: 50, estoque: 10 }, { id: 2, nome: "Calça", preco: 100, estoque: 5 }, { id: 3, nome: "Sapato", preco: 200, estoque: 2 } ].
// Execute as seguintes tarefas:
//     1-Crie uma função buscarProdutoPorNome que receba o nome de um produto e retorne os detalhes do produto correspondente.
//     2-Crie uma função adicionarEstoque que receba o ID do produto e a quantidade a ser adicionada ao estoque.
//     3-Crie uma função calcularTotalEstoque que retorne o valor total em estoque da loja (preço × quantidade).

let produtos = [ { id:1 , nome: "Camiseta", preco: 50, estoque: 10 }, { id: 2, nome: "Calça", preco: 100, estoque: 5 }, { id: 3, nome: "Sapato", preco: 200, estoque: 2 } ];


function buscarProdutoPorNome(nome) {
    for(i=0;i<produtos.length;i++){
        if(produtos.nome == nome){
            document.write("Detalhes do produto");
            document.write("Id do produto: "+ produtos.id);
            document.write("Nome: "+ produtos.nome);
            document.write("Preco: "+ produtos.preco);
            document.write("Estoque: "+ produtos.estoque);

        }else{
            document.write("Produto nao encontrado")
        }
    }
}

function adicionarEstoque(id, quantidade){
    for(i=0;i<produtos.length;i++){
        if(produtos.id == id){
            produtos[i].estoque += quantidade;
        }
    }
}

function calcularTotalEstoque(){
    for(i=0;i<produtos.length;i++){
        somaPrecos += produtos[i].preco;
        somaEstoque += produtos[i].estoque;
    }
    document.write("Valor total em estoque da loja: "+ (somaPrecos*somaEstoque));
}