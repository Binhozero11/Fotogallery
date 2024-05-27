const gallery = document.querySelector('.gallery')
const figure = document.querySelectorAll('.figureEscondido')
const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
let imgID = 1;

let imagemGaleria = `
    <figure class="item" style="--delay: 3.4s">
    <img src="https://picsum.photos/1280/720?random=9" alt="">

    <figcaption class="details">
        <h2>Multi-Screen</h2>
        <div class="tags">
            <span>tag</span>
        </div>
    </figcaption>
    </figure>
`




botaoMostrarProjetos.addEventListener('click', () => {
    if(botaoMostrarProjetos.textContent == 'Show less') {
        mostrarMenosProjetos();
        trocarTextoDoBotaoParaMostrarMais();
        return
    }
    mostrarMaisProjetos();
    trocarTextoDoBotaoParaMostrarMenos();
});

function trocarTextoDoBotaoParaMostrarMenos() {
    botaoMostrarProjetos.textContent = 'Show less'
}

function trocarTextoDoBotaoParaMostrarMais() {
    botaoMostrarProjetos.textContent = 'Show more'
}

function mostrarMaisProjetos() {
    figure.forEach(projetoInativo => {
        projetoInativo.classList.remove('desativo');
    });
};

function mostrarMenosProjetos() {
    figure.forEach(projetoInativo => {
        projetoInativo.classList.add('desativo');
    });
};
