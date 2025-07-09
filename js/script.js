
const button = document.querySelector('.btn.btn-success');
const image = document.querySelector('.card-img-top')

// creo l'evento
button.addEventListener('click' , function()
{
// logica
if(button.innerText == `Accendi`){
  button.innerText = `Spegni`
  image.src = "./assets/img/yellow_lamp.png";

} else {
  button.innerText = `Accendi`
  image.src = "./assets/img/white_lamp.png";
}




}

)

