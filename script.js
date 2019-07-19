let idade = Number(prompt("Digite sua idade"));

if (idade >= 25 && idade <= 60) {
    let salario = Number(prompt("Digite seu salário"));
    if (salario >= 2000) {
        let emprestimo = Number(prompt("Digite o valor desejado para empréstimo"));
        if (emprestimo < 10 * salario) {
            console.log("Emprestimo Aprovado");

        } else {
            console.log("Empréstimo negado por exeder valor");
        }

    } else {
        console.log("Operação reprovada por salário");

    }
} else {
    console.log("Recusado porque não tem idade pra isso")
}










