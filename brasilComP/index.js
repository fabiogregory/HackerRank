//Input Format

//A entrada será sempre composta por três variáveis:

//palavras: que será sempre um array de strings, contendo palavras que servem como base para a sua busca. As palavras sao sempre com todas as letras minusculas e sem acentos
//primeiraLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a primeira letra das palavras
//segundaLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a segunda letra das palavras
//Output Format

//Você deve imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a primeiraLetra fornecida na entrada e a segunda letra a segundaLetra fornecida na entrada. Imprima uma palavra em cada linha.

//Caso não nenhuma palavra do array de palavras atenda aos requisitos, imprima na tela NENHUMA.


function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui


    let encontrada = false;
    for (let palavra of palavras) {
        const letra1 = palavra[0];
        const letra2 = palavra[1];

        if (primeiraLetra === letra1 && segundaLetra === letra2) {
            console.log(palavra)
            encontrada = true;

        }
    }
    if (!encontrada) {
        console.log("NENHUMA");
    }
}