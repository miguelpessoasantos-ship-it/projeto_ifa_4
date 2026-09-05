/* =====================================================
VISSION
SCRIPT DA PÁGINA INICIAL
===================================================== */

/* =====================================================
BANCO DE PESQUISA

VOCÊ PODE ADICIONAR NOVOS ASSUNTOS AQUI.

Exemplo:

{
titulo: "Retina",
descricao: "Informações sobre a retina.",
palavras: ["retina", "olho", "luz"],
pagina: "retina.html"
}

===================================================== */

const bancoPesquisa = [

```
{
    titulo: "Como enxergamos?",
    descricao:
        "Descubra como a luz entra nos olhos e como o cérebro interpreta as imagens.",
    palavras: [
        "visão",
        "ver",
        "enxergar",
        "olho",
        "luz",
        "córnea",
        "retina"
    ],
    pagina: "visao.html"
},


{
    titulo: "Anatomia do olho",
    descricao:
        "Conheça as principais partes do olho e suas funções.",
    palavras: [
        "anatomia",
        "olho",
        "córnea",
        "íris",
        "pupila",
        "retina",
        "cristalino"
    ],
    pagina: "anatomia.html"
},


{
    titulo: "Doenças e problemas de visão",
    descricao:
        "Conheça alguns problemas que podem afetar a visão.",
    palavras: [
        "doenças",
        "doença",
        "miopia",
        "astigmatismo",
        "glaucoma",
        "catarata"
    ],
    pagina: "doencas.html"
},


{
    titulo: "Percepção das cores",
    descricao:
        "Entenda como nossos olhos e cérebro percebem as cores.",
    palavras: [
        "cores",
        "cor",
        "cones",
        "arco-íris",
        "colorido"
    ],
    pagina: "cores.html"
}
```

];

/* =====================================================
BANCO DE CURIOSIDADES

AQUI VOCÊ PODE ALTERAR:

* título
* texto
* imagem
* página de destino

===================================================== */

const curiosidades = [

```
{
    titulo: "Como enxergamos?",
    texto:
        "Descubra como a luz percorre o olho até chegar ao cérebro.",
    imagem:
        "imagens/images(1).jpeg",
    pagina:
        "visao.html"
},


{
    titulo: "Percepção das cores",
    texto:
        "Entenda como os cones presentes na retina participam da percepção das cores.",
    imagem:
        "imagens/images(2).jpeg",
    pagina:
        "cores.html"
},


{
    titulo: "O cérebro e a visão",
    texto:
        "Saiba como o cérebro interpreta as informações recebidas pelos olhos.",
    imagem:
        "imagens/images(3).jpeg",
    pagina:
        "visao.html"
},


{
    titulo: "Anatomia do olho",
    texto:
        "Conheça as principais estruturas que fazem parte do olho humano.",
    imagem:
        "imagens/images(4).jpeg",
    pagina:
        "anatomia.html"
},


{
    titulo: "A retina",
    texto:
        "A retina possui células especiais responsáveis por detectar a luz.",
    imagem:
        "imagens/images(5).jpeg",
    pagina:
        "anatomia.html"
},


{
    titulo: "Problemas de visão",
    texto:
        "Conheça alguns problemas que podem afetar a qualidade da visão.",
    imagem:
        "imagens/images(6).jpeg",
    pagina:
        "doencas.html"
}
```

];

/* =====================================================
ELEMENTOS HTML
===================================================== */

const pesquisa =
document.querySelector("#pesquisa");

const btnPesquisa =
document.querySelector("#btnPesquisa");

const resultadosPesquisa =
document.querySelector("#resultadosPesquisa");

const cardsCuriosidades =
document.querySelector("#cardsCuriosidades");

const btnTrocarCuriosidades =
document.querySelector("#btnTrocarCuriosidades");

const modoEscuro =
document.querySelector("#modoEscuro");

const topo =
document.querySelector("#topo");

/* =====================================================
PESQUISA
===================================================== */

function pesquisar() {

```
const termo =
    pesquisa.value.trim().toLowerCase();


resultadosPesquisa.innerHTML = "";


/* Se não digitou nada */

if (termo === "") {

    resultadosPesquisa.classList.remove("ativo");

    return;

}


/* Procura no banco de pesquisa */

const resultados =
    bancoPesquisa.filter(item => {

        const textoCompleto =

            item.titulo.toLowerCase()
            + " "
            + item.descricao.toLowerCase()
            + " "
            + item.palavras
                .join(" ")
                .toLowerCase();


        return textoCompleto.includes(termo);

    });



/* Se não encontrou */

if (resultados.length === 0) {

    resultadosPesquisa.innerHTML = `

        <div class="semResultado">

            <i class="fa-solid fa-circle-info"></i>

            <p>
                Nenhum resultado encontrado.
            </p>

            <small>
                Tente pesquisar por:
                visão, anatomia, doenças ou cores.
            </small>

        </div>

    `;

    resultadosPesquisa.classList.add("ativo");

    return;

}



/* Criar cada resultado */

resultados.forEach(resultado => {

    const elemento =
        document.createElement("a");


    elemento.classList.add("resultado");


    elemento.href =
        resultado.pagina;


    elemento.innerHTML = `

        <div class="resultadoTexto">

            <h3>
                ${resultado.titulo}
            </h3>

            <p>
                ${resultado.descricao}
            </p>

        </div>


        <span class="resultadoSeta">
            →
        </span>

    `;


    resultadosPesquisa.appendChild(elemento);

});


resultadosPesquisa.classList.add("ativo");
```

}

/* =====================================================
BOTÃO DA PESQUISA
===================================================== */

btnPesquisa.addEventListener(
"click",
pesquisar
);

/* =====================================================
ENTER NA PESQUISA
===================================================== */

pesquisa.addEventListener(
"keydown",
evento => {

```
    if (evento.key === "Enter") {

        pesquisar();

    }

}
```

);

/* =====================================================
PESQUISA AUTOMÁTICA ENQUANTO DIGITA
===================================================== */

pesquisa.addEventListener(
"input",
() => {

```
    if (
        pesquisa.value.trim() !== ""
    ) {

        pesquisar();

    } else {

        resultadosPesquisa.innerHTML = "";

        resultadosPesquisa.classList.remove(
            "ativo"
        );

    }

}
```

);

/* =====================================================
FECHAR RESULTADOS AO CLICAR FORA
===================================================== */

document.addEventListener(
"click",
evento => {

```
    const clicouNaPesquisa =
        evento.target.closest(
            ".pesquisa"
        );


    if (!clicouNaPesquisa) {

        resultadosPesquisa.classList.remove(
            "ativo"
        );

    }

}
```

);

/* =====================================================
CURIOSIDADES
===================================================== */

/*
Começamos mostrando os três primeiros cards.
*/

let indiceCuriosidades = 0;

function mostrarCuriosidades() {

```
cardsCuriosidades.innerHTML = "";


/*
   Criamos três cards.
*/

for (
    let i = 0;
    i < 3;
    i++
) {

    const indice =

        (
            indiceCuriosidades + i
        )
        %
        curiosidades.length;


    const curiosidade =
        curiosidades[indice];


    const card =
        document.createElement("article");


    card.classList.add("card");


    card.innerHTML = `

        <img

            src="${curiosidade.imagem}"

            alt="${curiosidade.titulo}"

            class="imagemCard"

            onerror="this.style.display='none'"

        >


        <div class="cardConteudo">

            <h3>
                ${curiosidade.titulo}
            </h3>


            <p>
                ${curiosidade.texto}
            </p>


            <a
                href="${curiosidade.pagina}"
                class="saibaMais">

                Saiba mais →

            </a>

        </div>

    `;


    cardsCuriosidades.appendChild(
        card
    );

}
```

}

/* Mostrar os cards ao abrir o site */

mostrarCuriosidades();

/* =====================================================
GERAR NOVAS CURIOSIDADES
===================================================== */

btnTrocarCuriosidades.addEventListener(
"click",
() => {

```
    indiceCuriosidades += 3;


    /*
       Quando chegar ao final,
       volta para o primeiro card.
    */

    if (
        indiceCuriosidades >=
        curiosidades.length
    ) {

        indiceCuriosidades = 0;

    }


    mostrarCuriosidades();

}
```

);

/* =====================================================
MODO ESCURO
===================================================== */

modoEscuro.addEventListener(
"click",
() => {

```
    document.body.classList.toggle(
        "dark"
    );


    const icone =
        modoEscuro.querySelector("i");


    const escuro =
        document.body.classList.contains(
            "dark"
        );


    icone.classList.toggle(
        "fa-moon",
        !escuro
    );


    icone.classList.toggle(
        "fa-sun",
        escuro
    );


    modoEscuro.setAttribute(
        "aria-label",
        escuro
            ? "Desativar modo escuro"
            : "Ativar modo escuro"
    );

}
```

);

/* =====================================================
VOLTAR AO TOPO
===================================================== */

window.addEventListener(
"scroll",
() => {

```
    if (
        window.scrollY > 400
    ) {

        topo.style.display = "grid";

    } else {

        topo.style.display = "none";

    }

}
```

);

topo.addEventListener(
"click",
() => {

```
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
```

);
