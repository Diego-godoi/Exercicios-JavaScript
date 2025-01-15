// Questão 05 - Implemente uma calculadora que permite ao usuário realizar uma operação (+, -, *, /) entre dois números (o usuário deve digitar dois números). Após exibir o resultado, pergunte se o usuário deseja realizar outra operação (deve ser executado enquanto o usuário desejar).

do{
    alert("Calculadora das 4 operacoes basicas")
    let operacao = prompt("Escolha qual operacao deseja (+,-,*,/): ");
    let num1 = parseFloat(prompt("Digite o primeiro numero: "));
    let num2 = parseFloat(prompt("Digite o segundo numero: "));

    if (operacao=="+"){
        document.write("Resultado da soma: "+ (num1+num2));
    }else if (operacao=="-") {
        document.write("Resultado da subtracao: "+ (num1-num2));
    } else if(operacao=="*"){
        document.write("Resultado da multiplicacao: "+ (num1*num2));
    }else if(operacao=="/"){
        if(num2 = 0){
            document.write("Divisao com zero nao existe");
        }else{
            document.write("Resultado da divisao: "+ (num1/num2));
        }
    }else{
        document.write("Operacao invalida");
    }

    var op = prompt("Deseja sair do programa (sim/nao): ");
}while(op!=="sim")