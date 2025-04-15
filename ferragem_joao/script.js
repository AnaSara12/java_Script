//MARTELO,PREGO,ALIGATE,PARAFUSO
//19,90  10,00  23,00  a = 10

const precos={
    "parafuso":19.90,
    "martelo":23.70,
    "chave de fenda":10.99,
    "serrote":30.00,
};
//ACESSAR GUARDAR A QUANTIDADE
let qtd = document.getElementById("quantidade").value;

console.log(qtd);


//CACULAR O PREÇO TOTAL
function calcularPreco(){

    let qtd = document.getElementById("quantidade").value;
    let escolha = document.getElementById("produto").value;
    let valortxoal = qtd * precos[escolha]
    document.getElementById("resultado").innerHTML = valortxoal;
}
