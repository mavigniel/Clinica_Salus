/* =========================================
   MISSÃO / VISÃO / VALORES
========================================= */

const abasIdentidade = document.querySelectorAll(".identidade_aba");
const conteudosIdentidade = document.querySelectorAll(".identidade_conteudo");

abasIdentidade.forEach(aba => {

    aba.addEventListener("click", () => {

        const conteudoSelecionado = aba.dataset.conteudo;

        // Remove estado ativo
        abasIdentidade.forEach(item => {

            item.classList.remove("ativo");
            item.setAttribute("aria-selected", "false");

        });

        conteudosIdentidade.forEach(conteudo => {

            conteudo.classList.remove("ativo");

        });


        // Ativa o botão clicado
        aba.classList.add("ativo");
        aba.setAttribute("aria-selected", "true");


        // Exibe o conteúdo correspondente
        document
            .getElementById(conteudoSelecionado)
            .classList.add("ativo");

    });

});


/* =========================================
   HISTÓRIA
========================================= */

const marcosHistoria = document.querySelectorAll(".historia_marco");
const paineisHistoria = document.querySelectorAll(".historia_painel");

marcosHistoria.forEach(marco => {

    marco.addEventListener("click", () => {

        const historiaSelecionada = marco.dataset.historia;


        marcosHistoria.forEach(item => {

            item.classList.remove("ativo");

        });


        paineisHistoria.forEach(painel => {

            painel.classList.remove("ativo");

        });


        marco.classList.add("ativo");


        document
            .getElementById(historiaSelecionada)
            .classList.add("ativo");

    });

});


/* =========================================
   CARROSSEL DE DEPOIMENTOS
========================================= */

const carrossel = document.querySelector(".depoimentos_carrossel");
const trilho = document.querySelector(".depoimentos_trilho");

const depoimentos = document.querySelectorAll(".depoimento_card");

const botaoAnterior = document.querySelector(".depoimento_anterior");
const botaoProximo = document.querySelector(".depoimento_proximo");

const indicadoresContainer = document.querySelector(
    ".depoimentos_indicadores"
);


let indiceAtual = 0;

let intervaloAutomatico;

const tempoAutomatico = 5000;


/* =========================================
   QUANTIDADE VISÍVEL
========================================= */

function quantidadeVisivel(){

    if(window.innerWidth <= 700){

        return 1;

    }

    if(window.innerWidth <= 900){

        return 2;

    }

    return 3;

}


/* =========================================
   MOVER CARROSSEL
========================================= */

function atualizarCarrossel(){

    const quantidade = quantidadeVisivel();

    const larguraCard =
        depoimentos[0].getBoundingClientRect().width;

    const estiloTrilho =
        window.getComputedStyle(trilho);

    const gap =
        parseFloat(estiloTrilho.gap) || 0;


    const maximoIndice =
        Math.max(0, depoimentos.length - quantidade);


    if(indiceAtual > maximoIndice){

        indiceAtual = 0;

    }


    const deslocamento =
        indiceAtual * (larguraCard + gap);


    trilho.style.transform =
        `translateX(-${deslocamento}px)`;


    atualizarIndicadores();

}


/* =========================================
   PRÓXIMO
========================================= */

function proximoDepoimento(){

    const quantidade = quantidadeVisivel();

    const maximoIndice =
        Math.max(0, depoimentos.length - quantidade);


    indiceAtual++;


    if(indiceAtual > maximoIndice){

        indiceAtual = 0;

    }


    atualizarCarrossel();

}


/* =========================================
   ANTERIOR
========================================= */

function depoimentoAnterior(){

    const quantidade = quantidadeVisivel();

    const maximoIndice =
        Math.max(0, depoimentos.length - quantidade);


    indiceAtual--;


    if(indiceAtual < 0){

        indiceAtual = maximoIndice;

    }


    atualizarCarrossel();

}


/* =========================================
   INDICADORES
========================================= */

function criarIndicadores(){

    indicadoresContainer.innerHTML = "";

    const quantidade = quantidadeVisivel();

    const numeroIndicadores =
        Math.max(1, depoimentos.length - quantidade + 1);


    for(let i = 0; i < numeroIndicadores; i++){

        const indicador =
            document.createElement("button");


        indicador.setAttribute(
            "aria-label",
            `Ir para depoimento ${i + 1}`
        );


        indicador.addEventListener("click", () => {

            indiceAtual = i;

            atualizarCarrossel();

            reiniciarAutomatico();

        });


        indicadoresContainer.appendChild(indicador);

    }


    atualizarIndicadores();

}


function atualizarIndicadores(){

    const indicadores =
        indicadoresContainer.querySelectorAll("button");


    indicadores.forEach((indicador, indice) => {

        indicador.classList.toggle(
            "ativo",
            indice === indiceAtual
        );

    });

}


/* =========================================
   AUTOPLAY
========================================= */

function iniciarAutomatico(){

    intervaloAutomatico = setInterval(

        proximoDepoimento,

        tempoAutomatico

    );

}


function pararAutomatico(){

    clearInterval(intervaloAutomatico);

}


function reiniciarAutomatico(){

    pararAutomatico();

    iniciarAutomatico();

}


/* =========================================
   BOTÕES
========================================= */

botaoProximo.addEventListener("click", () => {

    proximoDepoimento();

    reiniciarAutomatico();

});


botaoAnterior.addEventListener("click", () => {

    depoimentoAnterior();

    reiniciarAutomatico();

});


/* =========================================
   PAUSAR AO PASSAR O MOUSE
========================================= */

carrossel.addEventListener(
    "mouseenter",
    pararAutomatico
);


carrossel.addEventListener(
    "mouseleave",
    iniciarAutomatico
);


/* =========================================
   RESPONSIVIDADE
========================================= */

window.addEventListener("resize", () => {

    indiceAtual = 0;

    criarIndicadores();

    atualizarCarrossel();

});


/* =========================================
   INICIALIZAÇÃO
========================================= */

criarIndicadores();

atualizarCarrossel();

iniciarAutomatico();