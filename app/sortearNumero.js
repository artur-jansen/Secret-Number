const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

const numeroAleatorio = document.querySelector('.box')

function gerarNumeroAleatorio() {

    return parseInt(Math.random() * maiorValor + 1)

}

console.log('Numero Secreto:',numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
