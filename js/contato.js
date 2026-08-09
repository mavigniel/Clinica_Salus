/* =========================================
   ELEMENTOS DO FORMULÁRIO
========================================= */

const formulario = document.getElementById("formularioContato");

const campoNome = document.getElementById("nome");
const campoTelefone = document.getElementById("telefone");
const campoEmail = document.getElementById("email");
const campoAssunto = document.getElementById("assunto");
const campoMensagem = document.getElementById("mensagem");
const campoPrivacidade = document.getElementById("privacidade");

const mensagemFormulario = document.getElementById("formMensagem");


/* =========================================
   MÁSCARA DE TELEFONE
========================================= */

campoTelefone.addEventListener("input", () => {
    let numero = campoTelefone.value;

    // Remove tudo que não seja número
    numero = numero.replace(/\D/g, "");

    // Limita a 11 dígitos
    numero = numero.substring(0, 11);

    if (numero.length > 10) {
        numero = numero.replace(
            /(\d{2})(\d{5})(\d{4})/,
            "($1) $2-$3"
        );
    } else if (numero.length > 6) {
        numero = numero.replace(
            /(\d{2})(\d{4})(\d+)/,
            "($1) $2-$3"
        );
    } else if (numero.length > 2) {
        numero = numero.replace(
            /(\d{2})(\d+)/,
            "($1) $2"
        );
    } else if (numero.length > 0) {
        numero = numero.replace(
            /(\d*)/,
            "($1"
        );
    }

    campoTelefone.value = numero;
});


/* =========================================
   FUNÇÕES DE ERRO
========================================= */

function mostrarErro(campo, mensagem) {
    const grupo = campo.closest(".form_grupo");
    const erro = grupo.querySelector(".form_erro");

    erro.textContent = mensagem;
}

function limparErro(campo) {
    const grupo = campo.closest(".form_grupo");
    const erro = grupo.querySelector(".form_erro");

    erro.textContent = "";
}


/* =========================================
   VALIDAÇÃO DE E-MAIL
========================================= */

function emailValido(email) {
    const expressaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expressaoEmail.test(email);
}


/* =========================================
   ENVIO DO FORMULÁRIO
========================================= */

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    let formularioValido = true;

    /* Nome */
    if (campoNome.value.trim().length < 3) {
        mostrarErro(campoNome, "Informe seu nome completo.");
        formularioValido = false;
    } else {
        limparErro(campoNome);
    }

    /* Telefone */
    const telefoneNumeros = campoTelefone.value.replace(/\D/g, "");

    if (telefoneNumeros.length < 10) {
        mostrarErro(campoTelefone, "Informe um telefone válido.");
        formularioValido = false;
    } else {
        limparErro(campoTelefone);
    }

    /* E-mail */
    if (!emailValido(campoEmail.value)) {
        mostrarErro(campoEmail, "Informe um e-mail válido.");
        formularioValido = false;
    } else {
        limparErro(campoEmail);
    }

    /* Assunto */
    if (campoAssunto.value === "") {
        mostrarErro(campoAssunto, "Selecione um assunto.");
        formularioValido = false;
    } else {
        limparErro(campoAssunto);
    }

    /* Mensagem */
    if (campoMensagem.value.trim().length < 10) {
        mostrarErro(
            campoMensagem,
            "Escreva uma mensagem com pelo menos 10 caracteres."
        );

        formularioValido = false;
    } else {
        limparErro(campoMensagem);
    }

    /* Privacidade */
    if (!campoPrivacidade.checked) {
        mensagemFormulario.textContent =
            "Você precisa aceitar o uso dos dados para continuar.";

        mensagemFormulario.className = "form_mensagem erro";
        formularioValido = false;
    }

    /* Resultado */
    if (formularioValido) {
        mensagemFormulario.textContent =
            "Formulário validado com sucesso. O envio ao servidor será implementado na etapa de backend.";

        mensagemFormulario.className = "form_mensagem sucesso";

        formulario.reset();
    }
});