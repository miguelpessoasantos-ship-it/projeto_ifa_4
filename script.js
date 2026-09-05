/* =====================================================
   VISSION
   SCRIPT DA PÁGINA INICIAL
===================================================== */


/* =====================================================
   BANCO DE PESQUISA
===================================================== */

const bancoPesquisa = [

    {
        titulo: "Como enxergamos?",
        descricao: "Descubra como a luz entra nos olhos e como o cérebro interpreta as imagens.",
        palavras: [
            "visão",
            "visao",
            "ver",
            "enxergar",
            "olho",
            "luz",
            "córnea",
            "cornea",
            "retina"
        ],
        pagina: "visao.html"
    },

    {
        titulo: "Anatomia do olho",
        descricao: "Conheça as principais partes do olho e suas funções.",
        palavras: [
            "anatomia",
            "olho",
            "córnea",
            "cornea",
            "íris",
            "iris",
            "pupila",
            "retina",
            "cristalino"
        ],
        pagina: "anatomia.html"
    },

    {
        titulo: "Doenças e problemas de visão",
        descricao: "Conheça alguns problemas que podem afetar a visão.",
        palavras: [
            "doenças",
            "doenca",
            "doenças de visão",
            "miopia",
            "astigmatismo",
            "glaucoma",
            "catarata"
        ],
        pagina: "doencas.html"
    },

    {
        titulo: "Percepção das cores",
        descricao: "Entenda como nossos olhos e cérebro percebem as cores.",
        palavras: [
            "cores",
            "cor",
            "cones",
            "arco-íris",
            "arco iris",
            "colorido"
        ],
        pagina: "cores.html"
    }

];


/* =====================================================
   BANCO DE CURIOSIDADES
===================================================== */

const curiosidades = [

    {
        titulo: "Como enxergamos?",
        texto: "Descubra como a luz percorre o olho até chegar ao cérebro.",
        imagem: "imagens/images(1).jpeg",
        pagina: "visao.html"
    },

    {
        titulo: "Percepção das cores",
        texto: "Entenda como os cones presentes na retina participam da percepção das cores.",
        imagem: "imagens/images(2).jpeg",
        pagina: "cores.html"
    },

    {
        titulo: "O cérebro e a visão",
        texto: "Saiba como o cérebro interpreta as informações recebidas pelos olhos.",
        imagem: "imagens/images(3).jpeg",
        pagina: "visao.html"
    },

    {
        titulo: "Anatomia do olho",
        texto: "Conheça as principais estruturas que fazem parte do olho humano.",
        imagem: "imagens/images(4).jpeg",
        pagina: "anatomia.html"
    },

    {
        titulo: "A retina",
        texto: "A retina possui células especiais responsáveis por detectar a luz.",
        imagem: "imagens/images(5).jpeg",
        pagina: "anatomia.html"
    },

    {
        titulo: "Problemas de visão",
        texto: "Conheça alguns problemas que podem afetar a qualidade da visão.",
        imagem: "imagens/images(6).jpeg",
        pagina: "doencas.html"
    }

];


/* =====================================================
   ELEMENTOS DO HTML
===================================================== */

const pesquisa = document.querySelector("#pesquisa");
const btnPesquisa = document.querySelector("#btnPesquisa");
const resultadosPesquisa = document.querySelector("#resultadosPesquisa");

const cardsCuriosidades = document.querySelector("#cardsCuriosidades");
const btnTrocarCuriosidades = document.querySelector("#btnTrocarCuriosidades");

const modoEscuro = document.querySelector("#modoEscuro");
const topo = document.querySelector("#topo");


/* =====================================================
   NORMALIZAR TEXTO
   Remove acentos e transforma em minúsculas.
   
   Exemplo:
   "VISÃO" → "visao"
   "Córnea" → "cornea"
===================================================== */

function normalizarTexto(texto) {

    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* =====================================================
   PESQUISA
===================================================== */

function pesquisar() {

    if (!pesquisa || !resultadosPesquisa) {
        return;
    }

    const termo = normalizarTexto(pesquisa.value);

    resultadosPesquisa.innerHTML = "";


    /* Se a pesquisa estiver vazia */

    if (termo === "") {

        resultadosPesquisa.classList.remove("ativo");

        return;
    }


    /* Procurar no banco */

    const resultados = bancoPesquisa.filter(function(item) {

        const textoCompleto = normalizarTexto(
            item.titulo +
            " " +
            item.descricao +
            " " +
            item.palavras.join(" ")
        );

        return textoCompleto.includes(termo);

    });


    /* =================================================
       NENHUM RESULTADO
    ================================================= */

    if (resultados.length === 0) {

        const mensagem = document.createElement("div");

        mensagem.className = "semResultado";


        const icone = document.createElement("i");

        icone.className = "fa-solid fa-circle-info";


        const texto = document.createElement("p");

        texto.textContent = "Nenhum resultado encontrado.";


        const dica = document.createElement("small");

        dica.textContent =
            "Tente pesquisar por: visão, anatomia, doenças ou cores.";


        mensagem.appendChild(icone);
        mensagem.appendChild(texto);
        mensagem.appendChild(dica);

        resultadosPesquisa.appendChild(mensagem);

        resultadosPesquisa.classList.add("ativo");

        return;
    }


    /* =================================================
       MOSTRAR RESULTADOS
    ================================================= */

    resultados.forEach(function(resultado) {

        const elemento = document.createElement("a");

        elemento.className = "resultadoPesquisa";

        elemento.href = resultado.pagina;


        const texto = document.createElement("div");

        texto.className = "resultadoTexto";


        const titulo = document.createElement("h3");

        titulo.textContent = resultado.titulo;


        const descricao = document.createElement("p");

        descricao.textContent = resultado.descricao;


        const seta = document.createElement("span");

        seta.className = "resultadoSeta";

        seta.textContent = "→";


        texto.appendChild(titulo);
        texto.appendChild(descricao);

        elemento.appendChild(texto);
        elemento.appendChild(seta);

        resultadosPesquisa.appendChild(elemento);

    });


    resultadosPesquisa.classList.add("ativo");

}


/* =====================================================
   BOTÃO DA LUPA
===================================================== */

if (btnPesquisa) {

    btnPesquisa.addEventListener("click", pesquisar);

}


/* =====================================================
   ENTER NA PESQUISA
===================================================== */

if (pesquisa) {

    pesquisa.addEventListener("keydown", function(evento) {

        if (evento.key === "Enter") {

            pesquisar();

        }

    });


    /* =================================================
       PESQUISA ENQUANTO DIGITA
    ================================================= */

    pesquisa.addEventListener("input", function() {

        if (pesquisa.value.trim() === "") {

            resultadosPesquisa.innerHTML = "";

            resultadosPesquisa.classList.remove("ativo");

            return;
        }

        pesquisar();

    });

}


/* =====================================================
   FECHAR RESULTADOS AO CLICAR FORA
===================================================== */

document.addEventListener("click", function(evento) {

    const clicouNaPesquisa =
        evento.target.closest(".pesquisa");

    if (!clicouNaPesquisa && resultadosPesquisa) {

        resultadosPesquisa.classList.remove("ativo");

    }

});


/* =====================================================
   CURIOSIDADES
===================================================== */

let indiceCuriosidades = 0;


function mostrarCuriosidades() {

    if (!cardsCuriosidades) {
        return;
    }

    cardsCuriosidades.innerHTML = "";


    /* Criar 3 cards */

    for (let i = 0; i < 3; i++) {

        const indice =
            (indiceCuriosidades + i) % curiosidades.length;

        const curiosidade =
            curiosidades[indice];


        const card =
            document.createElement("article");

        card.className = "card";


        /* Imagem */

        const imagem =
            document.createElement("img");

        imagem.src = curiosidade.imagem;

        imagem.alt = curiosidade.titulo;

        imagem.className = "imagemCard";


        /* Se a imagem não existir */

        imagem.onerror = function() {

            this.style.display = "none";

        };


        /* Conteúdo */

        const conteudo =
            document.createElement("div");

        conteudo.className = "cardConteudo";


        const titulo =
            document.createElement("h3");

        titulo.textContent =
            curiosidade.titulo;


        const texto =
            document.createElement("p");

        texto.textContent =
            curiosidade.texto;


        const link =
            document.createElement("a");

        link.href =
            curiosidade.pagina;

        link.className =
            "saibaMais";

        link.textContent =
            "Saiba mais →";


        conteudo.appendChild(titulo);
        conteudo.appendChild(texto);
        conteudo.appendChild(link);


        card.appendChild(imagem);
        card.appendChild(conteudo);


        cardsCuriosidades.appendChild(card);

    }

}


/* Mostrar curiosidades ao abrir */

mostrarCuriosidades();


/* =====================================================
   BOTÃO "GERAR NOVAS CURIOSIDADES"
===================================================== */

if (btnTrocarCuriosidades) {

    btnTrocarCuriosidades.addEventListener("click", function() {

        indiceCuriosidades += 3;


        if (indiceCuriosidades >= curiosidades.length) {

            indiceCuriosidades = 0;

        }


        mostrarCuriosidades();

    });

}


/* =====================================================
   MODO ESCURO
===================================================== */

if (modoEscuro) {


    /* Verificar modo salvo */

    if (
        localStorage.getItem("modoEscuro") === "true"
    ) {

        document.body.classList.add("dark");

    }


    function atualizarIconeTema() {

        const icone =
            modoEscuro.querySelector("i");

        if (!icone) {
            return;
        }


        const escuro =
            document.body.classList.contains("dark");


        if (escuro) {

            icone.classList.remove("fa-moon");

            icone.classList.add("fa-sun");

            modoEscuro.setAttribute(
                "aria-label",
                "Desativar modo escuro"
            );

        } else {

            icone.classList.remove("fa-sun");

            icone.classList.add("fa-moon");

            modoEscuro.setAttribute(
                "aria-label",
                "Ativar modo escuro"
            );

        }

    }


    atualizarIconeTema();


    modoEscuro.addEventListener("click", function() {

        document.body.classList.toggle("dark");


        const escuro =
            document.body.classList.contains("dark");


        localStorage.setItem(
            "modoEscuro",
            escuro
        );


        atualizarIconeTema();

    });

}


/* =====================================================
   VOLTAR AO TOPO
===================================================== */

if (topo) {


    window.addEventListener("scroll", function() {

        if (window.scrollY > 400) {

            topo.style.display = "grid";

        } else {

            topo.style.display = "none";

        }

    });


    topo.addEventListener("click", function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}