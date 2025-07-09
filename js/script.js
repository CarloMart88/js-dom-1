
// LIVE CODING: cliccando sul pulsante, cambio il colore del testo presente nell'elemento con id title-change-color
// definizione delle variabili e recupero degli elementi del dom che mi servono
const button = document.querySelector('.btn.btn-success');
const image = document.querySelector('.card-img-top')

// creo l'evento
button.addEventListener('click' , function()
){
// logica
if(button.innerText == `Accendi`){
  button.innerText = `Spegni`
  image.src = "./assets/img/yellow_lamp.png";

}




}



