const perguntas = document.querySelectorAll(".faq_item");

perguntas.forEach(item => {

    const botao = item.querySelector(".faq_pergunta");

    botao.addEventListener("click", () => {

        const aberto = item.classList.contains("ativo");

        // Fecha todos
        perguntas.forEach(faq => {

            faq.classList.remove("ativo");

        });

        // Se não estava aberto, abre
        if(!aberto){

            item.classList.add("ativo");

        }

    });

});