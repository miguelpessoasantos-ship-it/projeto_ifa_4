/* ========================================
   PERGUNTAS
======================================== */

const perguntas = [

    {
        pergunta: "Qual parte do olho controla a quantidade de luz que entra?",
        alternativas: [
            "Retina",
            "Íris",
            "Nervo óptico",
            "Cristalino"
        ],
        correta: 1
    },

    {
        pergunta: "Qual parte do olho recebe a luz e transforma as informações em sinais nervosos?",
        alternativas: [
            "Córnea",
            "Pupila",
            "Retina",
            "Íris"
        ],
        correta: 2
    },

    {
        pergunta: "Qual problema de visão dificulta enxergar objetos distantes?",
        alternativas: [
            "Miopia",
            "Hipermetropia",
            "Catarata",
            "Daltonismo"
        ],
        correta: 0
    },

    {
        pergunta: "Qual problema pode causar dificuldade para enxergar objetos próximos?",
        alternativas: [
            "Miopia",
            "Hipermetropia",
            "Glaucoma",
            "Daltonismo"
        ],
        correta: 1
    },

    {
        pergunta: "Qual estrutura ajuda a focalizar a luz dentro do olho?",
        alternativas: [
            "Cristalino",
            "Retina",
            "Nervo óptico",
            "Íris"
        ],
        correta: 0
    },

    {
        pergunta: "Qual doença pode causar danos ao nervo óptico?",
        alternativas: [
            "Miopia",
            "Astigmatismo",
            "Glaucoma",
            "Hipermetropia"
        ],
        correta: 2
    },

    {
        pergunta: "O que é o daltonismo?",
        alternativas: [
            "Uma dificuldade para diferenciar algumas cores",
            "Uma doença que deixa o olho maior",
            "Uma dificuldade para piscar",
            "Uma doença que afeta somente a retina"
        ],
        correta: 0
    },

    {
        pergunta: "Qual estrutura protege a parte frontal do olho?",
        alternativas: [
            "Retina",
            "Córnea",
            "Íris",
            "Nervo óptico"
        ],
        correta: 1
    },

    {
        pergunta: "Qual parte leva as informações visuais dos olhos até o cérebro?",
        alternativas: [
            "Cristalino",
            "Pupila",
            "Nervo óptico",
            "Córnea"
        ],
        correta: 2
    },

    {
        pergunta: "Qual atitude ajuda a cuidar da saúde dos olhos?",
        alternativas: [
            "Nunca fazer exames de visão",
            "Ficar muitas horas sem descansar os olhos",
            "Usar proteção adequada contra raios UV",
            "Evitar qualquer iluminação"
        ],
        correta: 2
    }

];


/* ========================================
   ELEMENTOS
======================================== */

const inicioQuiz = document.getElementById("inicioQuiz");

const areaQuiz = document.getElementById("areaQuiz");

const resultado = document.getElementById("resultado");

const btnComecar = document.getElementById("btnComecar");

const btnProxima = document.getElementById("btnProxima");

const btnReiniciar = document.getElementById("btnReiniciar");

const perguntaElemento = document.getElementById("pergunta");

const alternativasElemento =
    document.getElementById("alternativas");

const numeroPergunta =
    document.getElementById("numeroPergunta");

const pontuacaoElemento =
    document.getElementById("pontuacao");

const progresso =
    document.getElementById("progresso");

const pontuacaoFinal =
    document.getElementById("pontuacaoFinal");

const mensagemResultado =
    document.getElementById("mensagemResultado");


/* ========================================
   VARIÁVEIS
======================================== */

let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


/* ========================================
   COMEÇAR
======================================== */

btnComecar.addEventListener("click", () => {

    perguntaAtual = 0;

    pontos = 0;

    inicioQuiz.classList.add("escondido");

    resultado.classList.add("escondido");

    areaQuiz.classList.remove("escondido");

    mostrarPergunta();

});


/* ========================================
   MOSTRAR PERGUNTA
======================================== */

function mostrarPergunta() {

    respondeu = false;

    const perguntaAtualDados =
        perguntas[perguntaAtual];


    perguntaElemento.textContent =
        perguntaAtualDados.pergunta;


    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    pontuacaoElemento.textContent =
        `Pontos: ${pontos}`;


    /* PROGRESSO */

    const porcentagem =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    progresso.style.width =
        porcentagem + "%";


    /* LIMPA ALTERNATIVAS */

    alternativasElemento.innerHTML = "";


    /* CRIA ALTERNATIVAS */

    perguntaAtualDados.alternativas.forEach(
        (alternativa, indice) => {

            const botao =
                document.createElement("button");

            botao.classList.add("alternativa");

            botao.textContent = alternativa;


            botao.addEventListener("click", () => {

                escolherResposta(
                    botao,
                    indice
                );

            });


            alternativasElemento.appendChild(botao);

        }
    );


    btnProxima.disabled = true;

    btnProxima.textContent =
        "Próxima pergunta →";
}


/* ========================================
   ESCOLHER RESPOSTA
======================================== */

function escolherResposta(
    botaoSelecionado,
    indiceSelecionado
) {

    if (respondeu) {
        return;
    }

    respondeu = true;


    const perguntaAtualDados =
        perguntas[perguntaAtual];


    const botoes =
        document.querySelectorAll(".alternativa");


    /* DESATIVA OS BOTÕES */

    botoes.forEach(botao => {

        botao.disabled = true;

    });


    /* RESPOSTA CERTA */

    if (
        indiceSelecionado ===
        perguntaAtualDados.correta
    ) {

        botaoSelecionado.classList.add("correta");

        pontos++;

    }

    /* RESPOSTA ERRADA */

    else {

        botaoSelecionado.classList.add("errada");

        botoes[
            perguntaAtualDados.correta
        ].classList.add("correta");

    }


    pontuacaoElemento.textContent =
        `Pontos: ${pontos}`;


    btnProxima.disabled = false;


    /* ÚLTIMA PERGUNTA */

    if (
        perguntaAtual ===
        perguntas.length - 1
    ) {

        btnProxima.textContent =
            "Ver resultado 🏆";

    }

}


/* ========================================
   PRÓXIMA PERGUNTA
======================================== */

btnProxima.addEventListener("click", () => {

    if (!respondeu) {
        return;
    }


    perguntaAtual++;


    if (
        perguntaAtual <
        perguntas.length
    ) {

        mostrarPergunta();

    }

    else {

        mostrarResultado();

    }

});


/* ========================================
   RESULTADO
======================================== */

function mostrarResultado() {

    areaQuiz.classList.add("escondido");

    resultado.classList.remove("escondido");


    pontuacaoFinal.textContent =
        `${pontos} / ${perguntas.length}`;


    if (pontos === 10) {

        mensagemResultado.textContent =
            "🏆 Perfeito! Você acertou todas as perguntas!";

    }

    else if (pontos >= 8) {

        mensagemResultado.textContent =
            "🌟 Excelente! Você conhece muito sobre visão.";

    }

    else if (pontos >= 5) {

        mensagemResultado.textContent =
            "👍 Muito bom! Você já sabe bastante sobre o assunto.";

    }

    else {

        mensagemResultado.textContent =
            "📚 Continue aprendendo! Explore o VISSION e tente novamente.";

    }

}


/* ========================================
   REINICIAR
======================================== */

btnReiniciar.addEventListener("click", () => {

    perguntaAtual = 0;

    pontos = 0;

    resultado.classList.add("escondido");

    areaQuiz.classList.remove("escondido");

    mostrarPergunta();

});