
const curiosidades = [

    "Satélites conseguem monitorar grandes extensões de florestas, permitindo identificar mudanças na vegetação ao longo do tempo.",

    "A inteligência artificial pode analisar imagens de satélite e identificar padrões que indicam possíveis áreas de desmatamento.",

    "O NDVI é um índice utilizado para analisar a saúde da vegetação por meio de imagens de satélite.",

    "Existem satélites com sensores de radar que conseguem coletar informações mesmo quando há nuvens cobrindo a região.",

    "Redes Neurais Convolucionais (CNNs) podem ser treinadas para reconhecer características de áreas desmatadas em imagens.",

    "A IA pode comparar imagens de uma mesma região em diferentes períodos para identificar alterações na cobertura vegetal.",

    "O INPE utiliza imagens de satélite no monitoramento da Amazônia por meio de sistemas como o DETER.",

    "A PrevisIA, iniciativa do Imazon, utiliza inteligência artificial para identificar áreas com maior risco de desmatamento na Amazônia.",

    "Os modelos de inteligência artificial podem combinar informações sobre estradas, relevo e desmatamento anterior para analisar riscos ambientais.",

    "A detecção automatizada pode ajudar órgãos ambientais a direcionar melhor suas ações de fiscalização."

];




const botao = document.getElementById("botao-curiosidade");
const texto = document.getElementById("texto-curiosidade");



let ultimaCuriosidade = -1;



function sortearCuriosidade() {

    let indiceAleatorio;

    
    do {

        indiceAleatorio = Math.floor(
            Math.random() * curiosidades.length
        );

    } while (
        indiceAleatorio === ultimaCuriosidade &&
        curiosidades.length > 1
    );


    
    ultimaCuriosidade = indiceAleatorio;


   
    texto.style.opacity = "0";


    setTimeout(() => {

        
        texto.textContent = curiosidades[indiceAleatorio];

      
        texto.style.opacity = "1";

    }, 200);

}




if (botao && texto) {

    botao.addEventListener("click", sortearCuriosidade);

} else {

    console.warn(
        "Card de curiosidades não encontrado nesta página."
    );

}