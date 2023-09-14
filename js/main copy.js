window.addEventListener("load", main);

function main(){

    // ---seleccionar elementos-----
    // const menuham = document.querySelector(".menuham");
    const menuresponsive = document.querySelector(".menuresponsive");
    const enlaceCards = document.querySelector(".enlaceCards");
    const padre = document.querySelector(".contenedorBody");
    const cardconteinerlog = document.querySelector(".cardconteinerlog");
    const contenedorPaginas = document.querySelector(".paginasContainer");
    const contenedorRopa = document.querySelector(".ropa");
   

    



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
            if(e.target.className == "enlaceCards" || "a"){

                cardconteinerlog.classList.toggle("inactive");
                contenedorPaginas.classList.toggle("inactive");
                contenedorRopa.classList.toggle("inactive");
                menuresponsive.classList.add("inactive");
                
                

                if(enlaceCards.textContent == "Ver Catálogo Completo"){
                    enlaceCards.textContent = "Guardar Catálogo";
                    

                }else{
                    
                    enlaceCards.textContent = "Ver Catálogo Completo"};};// if anidado del if principal 
}// if principal
        
        else if(e.target.className == "menuham inactive"){
            menuresponsive.classList.toggle("inactive");
    } ;
} ;//función eventos
};//función main
    
