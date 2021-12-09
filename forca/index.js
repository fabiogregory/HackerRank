/* Você está desenvolvendo um jogo da forca para a sua empresa. No jogo da forca, o usuário tem que descobrir qual é a palavra que está "escondida" escolhendo letras que ele acredita que está contida nessa palavra.

Seu papel como desenvolvedor(a) é fazer a parte do código que, ao receber a letra palpite do usuário e a palavra escondida, retornará a quantidade de acertos obtidos pelo usuário nesse palpite.

Input Format

A entrada será sempre duas strings: o palpite feito pelo jogador e a palavra a ser descoberta. O palpite será sempre apenas um caractere minúsculo e sem acento. A palavra será sempre composta apenas por caracteres minúsculos e sem acento.

Output Format

A saída sempre será a quantidade de acertos do palpite. */


function solucao(palpite, palavra) {
    // seu codigo aqui

    let acertos = 0;
    for (item of palavra) {
        if (item === palpite) {
            acertos++;
        }
    }
    console.log(acertos);

}
