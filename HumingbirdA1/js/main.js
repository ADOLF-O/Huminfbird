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







};




    








