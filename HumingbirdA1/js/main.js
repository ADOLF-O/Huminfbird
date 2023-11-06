window.addEventListener("load", main);








function main(){
    
// --------particulas---------
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 120, // Número de partículas
          },
          "color": {
            "value": ["#e702b1", "#07b9ff"], // Color de las partículas
          },
          "shape": {
            "type": "circle", // Forma de las partículas (puede ser "circle", "edge", "triangle", etc.)
          },
          "size": {
            "value": .7, // Tamaño de las partículas
          },
          "move": {
            "speed": 2.5, // Mayor velocidad
            "direction": "none", // Puedes cambiar la dirección
          },

          "line_linked": {
            "enable": false, // Desactiva las líneas entre las partículas
            
          },
        },

        "interactivity": {
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse", // Comportamiento al pasar el mouse sobre las partículas
            },
            "onclick": {
                "enable": false, // Desactiva la reacción al hacer clic en las partículas
              },
          },
        },
        
      });



// -----------barras de progreso------------
var progressBar1 = new ProgressBar.Line('#progress-bar1', {
  strokeWidth: 4,            // Grosor de la barra de progreso
  easing: 'easeInOut',       // Tipo de animación
  duration: 5000,            // Duración de la animación en milisegundos
  color: '#fff',          // Color de la barra de progreso
  trailColor: '#000',        // Color de fondo de la barra de progreso
  trailWidth: 4,             // Grosor del fondo de la barra de progreso
  svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG

});

progressBar1.animate(.95); // Inicia la barra de progreso al 100%


let progressBar2 = new ProgressBar.Line('#progress-bar2', {
  strokeWidth: 4,            // Grosor de la barra de progreso
  easing: 'easeInOut',       // Tipo de animación
  duration: 5000,            // Duración de la animación en milisegundos
  color: '#fff',          // Color de la barra de progreso
  trailColor: '#000',        // Color de fondo de la barra de progreso
  trailWidth: 4,             // Grosor del fondo de la barra de progreso
  svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG

});

progressBar2.animate(1.0); // Inicia la barra de progreso al 100%

let progressBar3 = new ProgressBar.Line('#progress-bar3', {
  strokeWidth: 4,            // Grosor de la barra de progreso
  easing: 'easeInOut',       // Tipo de animación
  duration: 5000,            // Duración de la animación en milisegundos
  color: '#fff',          // Color de la barra de progreso
  trailColor: '#000',       // Color de fondo de la barra de progreso
  trailWidth: 4,             // Grosor del fondo de la barra de progreso
  svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG

});

progressBar3.animate(1.0); // Inicia la barra de progreso al 100%

let progressBar4 = new ProgressBar.Line('#progress-bar4', {
  strokeWidth: 4,            // Grosor de la barra de progreso
  easing: 'easeInOut',       // Tipo de animación
  duration: 5000,            // Duración de la animación en milisegundos
  color: '#fff',          // Color de la barra de progreso
  trailColor: '#000',        // Color de fondo de la barra de progreso
  trailWidth: 4,             // Grosor del fondo de la barra de progreso
  svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG

});

progressBar4.animate(.97); // Inicia la barra de progreso al 100%

let progressBar5 = new ProgressBar.Line('#progress-bar5', {
  strokeWidth: 4,            // Grosor de la barra de progreso
  easing: 'easeInOut',       // Tipo de animación
  duration: 5000,            // Duración de la animación en milisegundos
  color: '#fff',          // Color de la barra de progreso
  trailColor: '#000',       // Color de fondo de la barra de progreso
  trailWidth: 4,             // Grosor del fondo de la barra de progreso
  svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG

});

progressBar5.animate(.87); // Inicia la barra de progreso al 100%

let progressBar6 = new ProgressBar.Line('#progress-bar6', {
  strokeWidth: 4,            // Grosor de la barra de progreso
  easing: 'easeInOut',       // Tipo de animación
  duration: 5000,            // Duración de la animación en milisegundos
  color: '#fff',          // Color de la barra de progreso
  trailColor: '#000',        // Color de fondo de la barra de progreso
  trailWidth: 4,             // Grosor del fondo de la barra de progreso
  svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG

});

progressBar6.animate(.97); // Inicia la barra de progreso al 100%



};




    








