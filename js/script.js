/*new SimpleSlide({     --ATRIBUTOS DA FUNÇAO--
    slide: 'principal', --nome do atributo data-slide="nome-escolhido"--
    nav: true,  --se deve ou não mostrar a navegação--
    auto: true, --se o slide deve passar automaticamente--
    time: 5000, --tempo de transição dos slides--
    pauseOnHover: true, --pausa a transição automática--
  });*/
  

if(window.SimpleSlide) { //Verifica se o arquivo de JS tá sendo chamado na página, se tiver faz os seguintes comandos

    new SimpleSlide ({
        slide: "quote",
        time: 5500, //5s
    });

    new SimpleSlide ({
        slide: "portfolio",
        time: 7000, //5s
        nav: true,
    });
    
}


if(window.SimpleAnime) {

    new SimpleAnime({
        
    });

}