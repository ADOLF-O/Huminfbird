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

   
    padre.addEventListener("click",eventos);



    // ---funciones----
    function animacionSalida(){
        menuresponsive.classList.add("inactive");
        menuresponsive.classList.remove("deslog");
       

    };
    


    function eventos(e){
        if(e.target.nodeName == "A"){
            if(e.target.className == "enlaceCards" || e.target.className ==  "enlaceCardsH"){


                    


            }else if(e.target.className == "Contactos" ){
                menuresponsive.classList.add("inactive");


            };// if anidado 

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
    








