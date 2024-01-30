const Playpause = document.getElementById("play-pause")
const AudioCapitulo = document.getElementById("audio-capitulo")
const Avancar = document.getElementById("proximo")
const Voltar = document.getElementById("anterior")
const NomeCapitulo = document.getElementById("capitulo")
let taTocando = 0
let CapituloAtual = 1

const Numerofaixas = 10


// Primeiro passo 
// Colocar pra tocar ou pausar
// Após o clique no botão 
function TocarFaixa() {
    AudioCapitulo.play()
    Playpause.classList.remove("bi-play-fill")
    Playpause.classList.add("bi-pause-fill")
}

function PausarFaixa() {
    AudioCapitulo.pause()
    Playpause.classList.add("bi-play-fill")
    Playpause.classList.remove("bi-pause-fill")
}

function TocarOuPausar(){

    if (taTocando === 0){
        TocarFaixa()
        taTocando = 1
        
    } else {
        PausarFaixa()
        taTocando = 0
    }
}

Playpause.addEventListener("click", TocarOuPausar)

function AvancarFaixa() {

    if(CapituloAtual === Numerofaixas) {
        CapituloAtual = 1
    } else {
        CapituloAtual = CapituloAtual + 1
    }

    AudioCapitulo.src = "./books/dom-casmurro/" + CapituloAtual + ".mp3"
    TocarFaixa()
    taTocando = 1
    NomeCapitulo.innerText = 'Capítulo' + CapituloAtual
}

Avancar.addEventListener("click", AvancarFaixa)

function VoltarFaixa() {

    if(CapituloAtual === Numerofaixas) {
        CapituloAtual = 10
    } else {
        CapituloAtual = CapituloAtual - 1
    }

    AudioCapitulo.src = "./books/dom-casmurro/" + CapituloAtual + ".mp3"
    TocarFaixa()
    taTocando = 0
    NomeCapitulo.innerText = 'Capítulo' + CapituloAtual
}

Voltar.addEventListener("click", VoltarFaixa)