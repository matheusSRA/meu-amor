// Declaração das constantes e variáveis do documento:

const botaoVoltar = document.querySelector('.botaoAnterior');

const botaoAvançar = document.querySelector('.botaoPosterior');

const imagens_div = document.querySelector('.imagens');

let contador = 0;


// Criando eventos para os botões:

botaoAvançar.addEventListener('click', avancarFoto);
botaoVoltar.addEventListener('click', voltarFoto);


// Criar as funções para as mudanças de imagens:

// Funçao AVANÇAR FOTO:
function avancarFoto(){

    if(contador === 37){
        contador = 0;
    }

    contador++;

    imagens_div.style.backgroundImage = `url(img/amor${contador}.png)`
}

// Funçao VOLTAR FOTO:
function voltarFoto(){

    if(contador === 1){
        contador = 37;
    }

    contador--;
    
    imagens_div.style.backgroundImage = `url(img/amor${contador}.png)`
}

