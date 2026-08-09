/* =========================================
   ELEMENTOS
========================================= */

const formulario = document.getElementById("formularioAgendamento");

const campoNome = document.getElementById("nome");
const campoNascimento = document.getElementById("nascimento");
const campoTelefone = document.getElementById("telefone");
const campoEmail = document.getElementById("email");

const campoEspecialidade = document.getElementById("especialidade");
const campoProfissional = document.getElementById("profissional");

const campoConvenioArea = document.getElementById("campoConvenio");
const campoConvenio = document.getElementById("convenio");

const campoData = document.getElementById("dataPreferida");
const campoPeriodo = document.getElementById("periodo");
const campoPrivacidade = document.getElementById("privacidade");

const mensagemFormulario = document.getElementById("mensagemFormulario");


/* =========================================
   PROFISSIONAIS POR ESPECIALIDADE
========================================= */

const profissionais = {
    neurologia: [
        "Dr. Carlos Santos",
        "Dra. Helena Martins"
    ],

    neuropediatria: [
        "Dra. Ana Costa"
    ],

    psiquiatria: [
        "Dra. Beatriz Lima"
    ],

    reumatologia: [
        "Dr. João da Silva"
    ],

    "clinica-medica": [
        "Dra. Maria Oliveira"
    ],

    geriatria: [
        "Dra. Maria Oliveira"
    ],

    neurofisiologia: [
        "Dr. Eduardo Moreira"
    ],

    "medicina-dor": [
        "Dr. João da Silva"
    ]
};


/* =========================================
   ESPECIALIDADE → PROFISSIONAL
========================================= */

campoEspecialidade.addEventListener("change", () => {
    const especialidadeSelecionada = campoEspecialidade.value;

    campoProfissional.innerHTML =
        '<option value="">Selecione um profissional</option>';

    if (!especialidadeSelecionada) {
        campoProfissional.disabled = true;

        campoProfissional.innerHTML =
            '<option value="">Selecione primeiro a especialidade</option>';

        return;
    }

    const listaProfissionais = profissionais[especialidadeSelecionada];

    listaProfissionais.forEach(nome => {
        const opcao = document.createElement("option");

        opcao.value = nome;
        opcao.textContent = nome;

        campoProfissional.appendChild(opcao);
    });

    const qualquerProfissional = document.createElement("option");

    qualquerProfissional.value = "qualquer";
    qualquerProfissional.textContent = "Qualquer profissional disponível";

    campoProfissional.appendChild(qualquerProfissional);

    campoProfissional.disabled = false;
});


/* =========================================
   PARTICULAR / CONVÊNIO
========================================= */

const formasAtendimento = document.querySelectorAll(
    'input[name="formaAtendimento"]'
);

formasAtendimento.forEach(opcao => {
    opcao.addEventListener("change", () => {
        if (opcao.value === "convenio" && opcao.checked) {
            campoConvenioArea.classList.add("ativo");
            campoConvenio.required = true;
        }

        if (opcao.value === "particular" && opcao.checked) {
            campoConvenioArea.classList.remove("ativo");
            campoConvenio.required = false;
            campoConvenio.value = "";
        }
    });
});


/* =========================================
   NÃO PERMITIR DATA PASSADA
========================================= */

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
const dia = String(hoje.getDate()).padStart(2, "0");

campoData.min = `${ano}-${mes}-${dia}`;


/* =========================================
   MÁSCARA DE TELEFONE
========================================= */

campoTelefone.addEventListener("input", () => {
    let numero = campoTelefone.value.replace(/\D/g, "");

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
        numero = `(${numero}`;
    }

    campoTelefone.value = numero;
});


/* =========================================
   FUNÇÕES DE ERRO
========================================= */

function mostrarErro(campo, mensagem) {
    const grupo = campo.closest(".form_grupo");

    if (!grupo) return;

    const erro = grupo.querySelector(".form_erro");

    if (erro) {
        erro.textContent = mensagem;
    }
}

function limparErro(campo) {
    const grupo = campo.closest(".form_grupo");

    if (!grupo) return;

    const erro = grupo.querySelector(".form_erro");

    if (erro) {
        erro.textContent = "";
    }
}


/* =========================================
   VALIDAR E-MAIL
========================================= */

function emailValido(email) {
    const expressao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expressao.test(email);
}


/* =========================================
   ENVIO
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


    /* Nascimento */
    if (!campoNascimento.value) {
        mostrarErro(campoNascimento, "Informe sua data de nascimento.");
        formularioValido = false;
    } else {
        limparErro(campoNascimento);
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


    /* Especialidade */
    if (!campoEspecialidade.value) {
        mostrarErro(campoEspecialidade, "Selecione uma especialidade.");
        formularioValido = false;
    } else {
        limparErro(campoEspecialidade);
    }


    /* Profissional */
    if (!campoProfissional.value) {
        mostrarErro(campoProfissional, "Selecione um profissional.");
        formularioValido = false;
    } else {
        limparErro(campoProfissional);
    }


    /* Convênio */
    if (campoConvenio.required && !campoConvenio.value) {
        mostrarErro(campoConvenio, "Selecione seu convênio.");
        formularioValido = false;
    } else {
        limparErro(campoConvenio);
    }


    /* Data */
    if (!campoData.value) {
        mostrarErro(campoData, "Informe a data desejada.");
        formularioValido = false;
    } else {
        limparErro(campoData);
    }


    /* Período */
    if (!campoPeriodo.value) {
        mostrarErro(campoPeriodo, "Selecione um período.");
        formularioValido = false;
    } else {
        limparErro(campoPeriodo);
    }


    /* Privacidade */
    if (!campoPrivacidade.checked) {
        mensagemFormulario.textContent =
            "Você precisa concordar com o uso dos dados para continuar.";

        mensagemFormulario.className = "form_mensagem erro";
        formularioValido = false;
    }


    /* Sucesso */
    if (formularioValido) {
        mensagemFormulario.textContent =
            "Solicitação validada com sucesso. Nesta versão do projeto, o envio ao sistema da clínica ainda será implementado no backend.";

        mensagemFormulario.className = "form_mensagem sucesso";

        formulario.reset();

        campoProfissional.disabled = true;

        campoProfissional.innerHTML =
            '<option value="">Selecione primeiro a especialidade</option>';

        campoConvenioArea.classList.remove("ativo");
        campoConvenio.required = false;
    }
});