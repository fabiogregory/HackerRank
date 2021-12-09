/* Numa competição de surf, cada manobra de cada atleta é julgada por vários juízes, de modo que cada um deles dá uma nota. Para calcular a nota final da manobra, descarta-se a maior e a menor nota e calcula-se a média aritimética das restantes.

Seu papel é desenvolver a parte do software que calcula a nota final de uma manobra a partir das notas dadas por cada juíz.

Input Format

A entrada do problema será sempre um array de números chamado notas, que contém as notas dadas por cada um dos juízes.

Output Format

Você deve imprimir na tela a nota final da manobra, que é a média das notas que não foram descartadas. */


function solucao(notas) {
    //seu codigo aqui

    let maiorNota = 0;
    let menorNota = 99999999;
    let somaArray = 0;
    for (let nota of notas) {
        if (nota >= maiorNota) {
            maiorNota = nota;
        } if (nota <= menorNota) {
            menorNota = nota;
        }
        somaArray += nota;
    }
    let somaDescarte = maiorNota + menorNota;
    let somaFinal = (somaArray - somaDescarte) / (notas.length - 2);

    console.log(somaFinal);
}