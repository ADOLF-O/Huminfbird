window.addEventListener("load", main);


function main(){

    // ---seleccionar elementos-----
  
    const menuresponsive = document.querySelector(".menuresponsive");
    const enlaceCards = document.querySelector(".enlaceCards");
    const padre = document.querySelector(".contenedorBody");
    const cardconteinerlog = document.querySelector(".cardconteinerlog");
    const contenedorPaginas = document.querySelector(".paginasContainer");

    const textosPaginas = document.querySelectorAll(".textos");
    const h2paginas = document.querySelectorAll(".h2-paginas");
  
    const introDelMain = document.querySelector(".intro");
    const paginasContainerLog = document.querySelector(".paginasContainerLog");
    const enlacePaginas = document.querySelector(".enlacePaginas");
    const contenedorCuentas = document.querySelector(".cuentas");
   

    



    // -----dinamismo---

    // menuham.addEventListener("click", menuhamtoggle);
    // enlaceCards.addEventListener("click", menuCuentasLog)
    padre.addEventListener("click",eventos);



    // ---funciones----
    function animacionSalida(){
        menuresponsive.classList.add("inactive");
        menuresponsive.classList.remove("deslog");
       

    };
    


    function eventos(e){
        if(e.target.nodeName == "A"){
            if(e.target.className == "enlaceCards" || e.target.className ==  "enlaceCardsH"){

                padre.style.backgroundColor = "#000"
                introDelMain.style.color = "#fff"

                contenedorPaginas.classList.add("inactive");
                paginasContainerLog.classList.add("inactive");

                menuresponsive.classList.add("inactive");

                contenedorCuentas.classList.remove("inactive");
                cardconteinerlog.classList.remove("inactive");

                
                


                if(enlaceCards.textContent == "Ver Catálogo Completo"){
                    enlaceCards.textContent = "Guardar Catálogo";}


                else{
                    textosPaginas.forEach(a => {a.style.color = "#000"});
                    h2paginas.forEach(a => {a.classList.remove("degradadoPaginas")});
                    textosPaginas[0].style.margin = "2rem 0 0 0";
                    enlaceCards.textContent = "Ver Catálogo Completo"
                    padre.style.backgroundColor = "#fff";
                    introDelMain.style.color = "var(--color1)";

                    enlacePaginas.textContent = "Conocer Más"
                    cardconteinerlog.classList.add("inactive");
                    contenedorPaginas.classList.remove("inactive");};
                    


            }else if(e.target.className == "enlacePaginas" || e.target.className == "enlacePaginasH" ){

                textosPaginas.forEach(a => {a.style.color = "#fff"});
                h2paginas.forEach(a => {a.classList.add("degradadoPaginas")});
                textosPaginas[0].style.margin = "10rem 0 0 0";
                padre.style.backgroundColor = "#000"

                contenedorCuentas.classList.add("inactive");
                cardconteinerlog.classList.add("inactive")
                
                menuresponsive.classList.add("inactive");

                
                contenedorPaginas.classList.remove("inactive");
                paginasContainerLog.classList.remove("inactive");

                

                if(enlacePaginas.textContent == "Conocer Más"){
                    enlacePaginas.textContent = "Ver Menos"
                    
                }else{
                    introDelMain.style.color = "var(--color1)";
                    padre.style.backgroundColor = "#fff";
                    textosPaginas.forEach(a => {a.style.color = "#000"});
                    h2paginas.forEach(a => {a.classList.remove("degradadoPaginas")});
                    textosPaginas[0].style.margin = "2rem 0 0 0";

                    enlaceCards.textContent = "Ver Catálogo Completo"
                    contenedorCuentas.classList.remove("inactive");


                    enlacePaginas.textContent = "Conocer Más"
                    paginasContainerLog.classList.add("inactive");

                   
          

                    

                    


                };

                
            }else if(e.target.className == "Contactos" ){
                menuresponsive.classList.add("inactive");

            }
            // if anidado 
}// if principal
        
        else if(e.target.className == "menuham inactive"){

            if(menuresponsive.className == "menuresponsive log"){
                menuresponsive.classList.remove("log");
                menuresponsive.classList.add("deslog");

                setTimeout(animacionSalida, 1000);
            }else{
                menuresponsive.classList.toggle("inactive");
                menuresponsive.classList.add("log");

            };

            
           
            
            
    } ;
} ;//función eventos
};//función main
    

















// const imagen1 = document.getElementById("imagen1");
// const imagen2 = document.getElementById("imagen2");

// const cargarImg = (entra, mirador) =>  {
//   entra.forEach((propiedades) => {

//      if(propiedades.isIntersecting){
//          propiedades.target.classList.add("animacion");
        
//       }
//      //  else{
//      //    propiedades.target.classList.remove("animacion");

//      //  };

    

//   });
// };

// const observador = new IntersectionObserver(cargarImg, {
//    root: null, 
//    rootMargin: "0px",
//    threshold: 1.0
// });

// observador.observe(imagen1);
// observador.observe(imagen2);
