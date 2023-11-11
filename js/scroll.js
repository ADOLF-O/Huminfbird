window.addEventListener("load", main);

function main(){

    const barras = document.querySelector(".barras");
    const porcentajes = document.querySelectorAll(".porcentaje")

    // const imgP1 = document.querySelector(".imgP1");
    // const imgP2 = document.querySelector(".imgP2");
    // const imgP3 = document.querySelector(".imgP3");
    // const imgP4 = document.querySelector(".imgP4");
    // const pagos = document.querySelector("#pagos");

    // const spanC = document.querySelector(".info__span");
  
    // let contadorC = 990;


    
   
    function aumentar(obj, start){
        let contador = 0;
        obj.textContent = contador;
        let intervalo = setInterval(()=>{
           obj.textContent =  contador++ + "%";
           if(contador == (parseInt(start) + 1) ){
            clearInterval(intervalo)
           };
        },20)
        
        
    }
    

// --------------Observador--------------------------------------



    const animation = (dinamic, config) =>{
        
        dinamic.forEach((element) => {

            
            if(element.isIntersecting){
                

                if(element.target.className== "barras"){
                    progressBar1.animate(.95);
                    progressBar2.animate(1.0);
                    progressBar3.animate(1.0); 
                    progressBar4.animate(.97); 
                    progressBar5.animate(.87);
                    progressBar6.animate(.97);

                    
                    porcentajes.forEach(element2 =>{
                        
                     
                        switch (element2.textContent){
                            case "95":
                                aumentar(element2,element2.textContent);
                                break
                            case "100":
                                aumentar(element2,element2.textContent);
                                break;
                            case "90":
                                aumentar(element2,element2.textContent);
                                break;
                        };

                        
                    })

                }

                

               


        //         if(element.target.className == "imgP1" || element.target.className == "imgP3" ){
        //             element.target.classList.add("scroll1");
        //         }else if(element.target.className == "imgP2" || element.target.className == "imgP4"){
        //             element.target.classList.add("scroll2");
        //         }else if(element.target.className == "info__span"){

        //                 if(contadorC === 990){

        //                     let intervalo = setInterval(() =>{
        //                         contadorC++;
        //                         spanC.textContent = "+" + contadorC ;
        //                         if(contadorC == 1050){
        //                             clearInterval(intervalo);
                                    
                                        
        //                         }
        //                     }, 20)};
        //                 }else if(element.target.id == "pagos"){
        //                     pagos.classList.add("pagos")

        //                 }
        //         // element.target.classList.add("animacionScroll")
                
        //     
    }
    })


    };
    
const observador = new IntersectionObserver(animation, {
        root:null,
        rootMargin: "0px",
        threshold: 0
    })

    // observador.observe(imgP1)
    // observador.observe(imgP2)
    // observador.observe(imgP3)
    // observador.observe(imgP4)
    // observador.observe(spanC)
    // observador.observe(pagos)

    observador.observe(barras);


// -----------barras de progreso------------
var progressBar1 = new ProgressBar.Line('#progress-bar1', {
    strokeWidth: 4,            // Grosor de la barra de progreso
    easing: 'easeInOut',       // Tipo de animación
    duration: 2500,            // Duración de la animación en milisegundos
    color: '#fff',          // Color de la barra de progreso
    trailColor: '#000',        // Color de fondo de la barra de progreso
    trailWidth: 4,             // Grosor del fondo de la barra de progreso
    svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG
  
  });
  
  
  
  
  let progressBar2 = new ProgressBar.Line('#progress-bar2', {
    strokeWidth: 4,            // Grosor de la barra de progreso
    easing: 'easeInOut',       // Tipo de animación
    duration: 2500,            // Duración de la animación en milisegundos
    color: '#fff',          // Color de la barra de progreso
    trailColor: '#000',        // Color de fondo de la barra de progreso
    trailWidth: 4,             // Grosor del fondo de la barra de progreso
    svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG
  
  });
  

  
  let progressBar3 = new ProgressBar.Line('#progress-bar3', {
    strokeWidth: 4,            // Grosor de la barra de progreso
    easing: 'easeInOut',       // Tipo de animación
    duration: 2500,            // Duración de la animación en milisegundos
    color: '#fff',          // Color de la barra de progreso
    trailColor: '#000',       // Color de fondo de la barra de progreso
    trailWidth: 4,             // Grosor del fondo de la barra de progreso
    svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG
  
  });
  
 
  
  let progressBar4 = new ProgressBar.Line('#progress-bar4', {
    strokeWidth: 4,            // Grosor de la barra de progreso
    easing: 'easeInOut',       // Tipo de animación
    duration:  2500,             // Duración de la animación en milisegundos
    color: '#fff',          // Color de la barra de progreso
    trailColor: '#000',        // Color de fondo de la barra de progreso
    trailWidth: 4,             // Grosor del fondo de la barra de progreso
    svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG
  
  });
  
  
  
  let progressBar5 = new ProgressBar.Line('#progress-bar5', {
    strokeWidth: 4,            // Grosor de la barra de progreso
    easing: 'easeInOut',       // Tipo de animación
    duration: 2500,            // Duración de la animación en milisegundos
    color: '#fff',          // Color de la barra de progreso
    trailColor: '#000',       // Color de fondo de la barra de progreso
    trailWidth: 4,             // Grosor del fondo de la barra de progreso
    svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG
  
  });
  
 
  
  let progressBar6 = new ProgressBar.Line('#progress-bar6', {
    strokeWidth: 4,            // Grosor de la barra de progreso
    easing: 'easeInOut',       // Tipo de animación
    duration:  2500,             // Duración de la animación en milisegundos
    color: '#fff',          // Color de la barra de progreso
    trailColor: '#000',        // Color de fondo de la barra de progreso
    trailWidth: 4,             // Grosor del fondo de la barra de progreso
    svgStyle: { width: '100%', height: '100%' }, // Estilo del contenedor SVG
  
  });
  













    
}







