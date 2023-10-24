function tocaSom(idElementoAudio){
    
    document.querySelector('#som_tecla_pom').play()
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play()
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play()
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;
const listaDeTeclas= document.querySelectorAll('.tecla');
listaDeTeclas[1].onclick = tocaSomClap;
let contador = 0;
while(contador < 9){
    const efeito = listaDeTeclas[contador].classList [1];
    const idAudio = '#som_'+efeito;
        listaDeTeclas[contador].onclick = function(){

    };
    contador = contador + 1; 
    console.log (contador);


}



