let idade = Number(prompt("Digite sua idade"));
let aposentado = (prompt("Você é aposentado? (sim/nao"));
let estudante = prompt("Você é estudante? (sim/nao)");

aposentado=aposentado.toLowerCase();
estudante=estudante.toLowerCase();

if(idade >=0 && idade <=12){
    console.log("Entrada 10 reais");
}
else if(idade >=13 && idade <=17){
    console.log("Entrada 15 reais")
}

else if(idade >=18 && idade <=59){
    console.log("Entrada 35 reais");
}

else if(idade >=60 || aposentado ==="sim"){
    console.log("Entrada gratuita");
}