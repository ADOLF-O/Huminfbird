window.addEventListener("load", main);


function main(){

    // ---seleccionar elementos-----
    // const menuham = document.querySelector(".menuham");
    const menuresponsive = document.querySelector(".menuresponsive");
    const enlaceCards = document.querySelector(".enlaceCards");
    const padre = document.querySelector(".contenedorBody");
    const cardconteinerlog = document.querySelector(".cardconteinerlog");
    const contenedorPaginas = document.querySelector(".paginasContainer");
    // const contenedorRopa = document.querySelector(".ropa");
    const introDelMain = document.querySelector(".intro");
    const paginasContainerLog = document.querySelector(".paginasContainerLog");
    const enlacePaginas = document.querySelector(".enlacePaginas");
    const contenedorCuentas = document.querySelector(".cuentas");
   

    



    // -----dinamismo---

    // menuham.addEventListener("click", menuhamtoggle);
    // enlaceCards.addEventListener("click", menuCuentasLog)
    padre.addEventListener("click",eventos);



    // ---funciones----

    // function menuhamtoggle(){

    //     menuresponsive.classList.toggle("inactive");
        
        
    // };

    // function menuCuentasLog(){
        
    // };

    function eventos(e){
        if(e.target.nodeName == "A"){
            if(e.target.className == "enlaceCards" || e.target.className ==  "enlaceCardsH"){

                padre.style.backgroundColor = "#000"
                menuresponsive.classList.add("inactive");

                contenedorCuentas.classList.remove("inactive");
                introDelMain.style.color = "#fff"
                cardconteinerlog.classList.remove("inactive");

                contenedorPaginas.classList.add("inactive");
                paginasContainerLog.classList.add("inactive");
                enlacePaginas.textContent = "Conocer Mas"

                // contenedorRopa.classList.add("inactive");

                

                if(enlaceCards.textContent == "Ver Catálogo Completo"){
                    enlaceCards.textContent = "Guardar Catálogo";
                    

                }else{
                    enlaceCards.textContent = "Ver Catálogo Completo"
                    padre.style.backgroundColor = "#fff";

                    introDelMain.style.color = "var(--color2)";
                    
                    cardconteinerlog.classList.add("inactive");

                    contenedorPaginas.classList.remove("inactive");
                    // contenedorRopa.classList.remove("inactive");

                };
                    


            }else if(e.target.className == "enlacePaginas"){
        
                paginasContainerLog.classList.remove("inactive");

                contenedorCuentas.classList.add("inactive");
                

                if(enlacePaginas.textContent == "Conocer Mas"){
                    enlacePaginas.textContent = "Ver Menos"
                    
                }else{
                    enlacePaginas.textContent = "Conocer Mas"

                    paginasContainerLog.classList.add("inactive");

                    contenedorCuentas.classList.remove("inactive");
                    // contenedorRopa.classList.remove("inactive");
                };

                
            }// if anidado 
}// if principal
        
        else if(e.target.className == "menuham inactive"){
            menuresponsive.classList.toggle("inactive");
            menuresponsive.classList.add("log");
            
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
