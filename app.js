const imagen = document.querySelector('#imagen')
const btnbn = document.querySelector('#btnbn')
const btnblur = document.querySelector('#btnblur')
const btnzoom = document.querySelector('#btnzoom')

btnbn.addEventListener('click', () => {
imagen.classList.toggle("bn")
});


btnblur.addEventListener('click', () => {
imagen.classList.toggle("blur")
});


btnzoom.addEventListener('click', () => {
imagen.classList.toggle("zoom")
});

