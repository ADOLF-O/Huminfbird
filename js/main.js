window.addEventListener("load", main);

function main(){

    // ---seleccionar elementos-----
    // const menuham = document.querySelector(".menuham");
    const menuresponsive = document.querySelector(".menuresponsive");
    const enlaceCards = document.querySelector(".enlaceCards");
    const padre = document.querySelector(".contenedorBody");
    const cardconteinerlog = document.querySelector(".cardconteinerlog");
   

    



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
            if(e.target.className == "enlaceCards"){
                cardconteinerlog.classList.toggle("inactive");
                if(enlaceCards.textContent == "Ver Catálogo Completo"){
                    enlaceCards.textContent = "Guardar Catálogo"

                }else if(enlaceCards.textContent == "Guardar Catálogo"){
                    enlaceCards.textContent = "Ver Catálogo Completo"};};// if anidado del if principal 

            }// if principal
        else if(e.target.nodeName == "IMG"){
            menuresponsive.classList.toggle("inactive");
            } ;
} ;//función eventos
} ;//función main
    
