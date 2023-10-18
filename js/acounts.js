// ------------Js Del menu Responsive--------------
const menuresponsive = document.querySelector(".menuresponsive");
const padre = document.querySelector(".contenedorBody");

padre.addEventListener("click",eventos);

function animacionSalida(){
  menuresponsive.classList.add("inactive");
  menuresponsive.classList.remove("deslog");
 
};


function eventos(e){
    if(e.target.className == "menuham inactive"){

      if(menuresponsive.className == "menuresponsive log"){
          menuresponsive.classList.remove("log");
          menuresponsive.classList.add("deslog");

          setTimeout(animacionSalida, 1000);
      }else{
          menuresponsive.classList.toggle("inactive");
          menuresponsive.classList.add("log");

      };
  }
}

// -----------FIN---------------


// -----------Observador-------------

const cuentas = document.querySelectorAll(".cards")
const posters = document.querySelectorAll(".poster")
const pagos = document.querySelector("#pagos");


const spanC = document.querySelector(".info__span");

let contadorC = 990;


const animation = (arr, obj) => {

  arr.forEach(element => { 

    if(element.isIntersecting){

      if(element.target.className == "cards" || element.target.className == "poster"){

        element.target.classList.add("Aentrada")

      }else if(element.target.className === "info__span"){

        if (contadorC === 990){

          let intervalo = setInterval( () =>{
            contadorC++
            spanC.textContent = "+" + contadorC;
  
            if(contadorC == 1050){
              clearInterval(intervalo);
            }
          },30)
        };
      }else if(element.target.id == "pagos"){
        pagos.classList.add("pagos")

    };



    }else{
      element.target.classList.remove("Aentrada")
    };
    
});
  
}; 




const observador = new IntersectionObserver(animation, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
})


 cuentas.forEach(element =>{
   observador.observe(element)
 })
 posters.forEach(element =>{
  observador.observe(element)
})
observador.observe(pagos)
 observador.observe(spanC)
// ------------------FIN-------------





// ----------Js De Slider-------
let isDragging = false;
let startPositionX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;
const slider = document.querySelector('.slider');
const slideWidth = slider.clientWidth / 3; // Cambiar esto según el número de imágenes
const autoSlideInterval = 3000; // Intervalo de tiempo en milisegundos para el desplazamiento automático

function startAutoSlide() {
  setInterval(() => {
    if (!isDragging) {
      currentIndex = (currentIndex + 1) % 3; // Cambiar el 3 por el número de imágenes
      currentTranslate = -currentIndex * slideWidth;
      setSliderPosition();
    }
  }, autoSlideInterval);
}

slider.addEventListener('touchstart', (e) => {
  isDragging = true;
  startPositionX = e.touches[0].clientX;
  prevTranslate = currentTranslate;
  cancelAnimationFrame(animationID);
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentPositionX = e.touches[0].clientX;
  currentTranslate = prevTranslate + currentPositionX - startPositionX;
  updateSliderPosition();
});

slider.addEventListener('touchend', () => {
  isDragging = false;
  currentIndex = Math.round(currentTranslate / -slideWidth);
  currentIndex = Math.max(0, Math.min(2, currentIndex)); // Ajusta según el número de imágenes
  currentTranslate = -currentIndex * slideWidth;
  setSliderPosition();
});

function updateSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
  animationID = requestAnimationFrame(setSliderPosition);
}

// Inicia el slider y el deslizamiento automático
setSliderPosition();
startAutoSlide();

// -------------FIN-------