//Input Format

//A entrada terá sempre duas variáveis:

//letra, que contém a letra que foi sorteada para essa rodada (sempre minúscula e sem acentos)
//palavras, que será sempre um array de strings contendo as palavras que cada uma das crianças escreveu (sempre minúsculas e sem acento)
//Output Format

//Imprima na tela apenas um número inteiro contendo a quantidade de crianças que PERDERAM nessa rodada.



//const letra = "m";
//const palavras = ["mamao", "maca", "melancia", "melao", "laranja"];



function solucao(letra, palavras) {
    //seu codigo aqui
    let erros = 0;
    for (let palavra of palavras) {
        const primeiraLetra = palavra[0];

        if (primeiraLetra !== letra) {
            erros++;
        }
    }
    console.log(erros);
}

function processData(input) {
    const { letra, palavras } = JSON.parse(input)[0];
    solucao(letra, palavras);
}



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

