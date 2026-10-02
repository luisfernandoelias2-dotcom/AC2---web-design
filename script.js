// =====================================================
// SLIDER
// =====================================================

let slideAtual = 0;


const slides = document.querySelectorAll(".slide");

const indicadores = document.querySelectorAll(".indicador");



function mostrarSlide(numero) {


    // Se chegar ao último slide,
    // volta para o primeiro.

    if (numero >= slides.length) {

        slideAtual = 0;

    }


    // Se voltar antes do primeiro slide,
    // vai para o último.

    else if (numero < 0) {

        slideAtual = slides.length - 1;

    }


    else {

        slideAtual = numero;

    }



    // Remove o "ativo" de todos os slides.

    slides.forEach(function(slide) {

        slide.classList.remove("ativo");

    });



    // Remove o "ativo" de todos os indicadores.

    indicadores.forEach(function(indicador) {

        indicador.classList.remove("ativo");

    });



    // Ativa o slide atual.

    slides[slideAtual].classList.add("ativo");



    // Ativa o indicador correspondente.

    indicadores[slideAtual].classList.add("ativo");

}



// =====================================================
// PRÓXIMO SLIDE
// =====================================================

function proximoSlide() {

    mostrarSlide(slideAtual + 1);

}



// =====================================================
// SLIDE ANTERIOR
// =====================================================

function slideAnterior() {

    mostrarSlide(slideAtual - 1);

}



// =====================================================
// IR DIRETAMENTE PARA UM SLIDE
// =====================================================

function irParaSlide(numero) {

    mostrarSlide(numero);

}



// =====================================================
// PASSAGEM AUTOMÁTICA DOS SLIDES
// =====================================================

setInterval(function() {

    proximoSlide();

}, 5000);



// =====================================================
// WHATSAPP
// =====================================================


// IMPORTANTE:
// Coloque aqui o número real da Rosita Doces.
//
// Formato:
// 55 + DDD + número
//
// Exemplo:
// (15) 99999-9999
//
// Ficaria:
// 5515999999999

const numeroWhatsApp = "5515999999999";



const botaoWhatsApp =
    document.getElementById("botaoWhatsApp");


const mensagemWhatsApp =
    document.getElementById("mensagemWhatsApp");



botaoWhatsApp.addEventListener("click", function() {


    // Pega o texto digitado pelo cliente.

    const mensagem =
        mensagemWhatsApp.value.trim();



    // Verifica se o cliente escreveu alguma coisa.

    if (mensagem === "") {

        alert(
            "Digite uma mensagem antes de entrar em contato."
        );

        return;

    }



    // Prepara a mensagem para ser enviada
    // corretamente pelo link do WhatsApp.

    const mensagemCodificada =
        encodeURIComponent(mensagem);



    // Cria o link do WhatsApp.

    const linkWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;



    // Abre o WhatsApp em uma nova aba.

    window.open(linkWhatsApp, "_blank");

});



// =====================================================
// BOTÕES DOS PRODUTOS
// =====================================================

const botoesProdutos =
    document.querySelectorAll(".botao-produto");



botoesProdutos.forEach(function(botao) {


    botao.addEventListener("click", function() {


        // Descobre qual produto foi clicado.

        const produto =
            botao.getAttribute("data-produto");



        // Cria a mensagem automaticamente.

        const mensagem =
            `Olá! Gostaria de saber mais sobre o produto: ${produto}`;



        // Prepara a mensagem para o WhatsApp.

        const mensagemCodificada =
            encodeURIComponent(mensagem);



        // Cria o link.

        const linkWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;



        // Abre o WhatsApp.

        window.open(linkWhatsApp, "_blank");

    });

});