window.addEventListener("load", main);


function main(){

    // ---seleccionar elementos-----
  
    const menuresponsive = document.querySelector(".menuresponsive");
    
    const padre = document.querySelector(".contenedorBody");

  

   

    



    // -----dinamismo---

   
    padre.addEventListener("click",eventos);



    // ---funciones----
    function animacionSalida(){
        menuresponsive.classList.add("inactive");
        menuresponsive.classList.remove("deslog");
       

    };
    


    function eventos(e){
        if(e.target.nodeName == "A"){
            if(e.target.className == "ContactosH" || e.target.className ==  "ContactosH"){
                menuresponsive.classList.remove("log");
                menuresponsive.classList.add("deslog");
                setTimeout(animacionSalida, 1000);

                    


            }else if(e.target.className == "Contactos" ){
                menuresponsive.classList.add("inactive");


            };// if anidado 

}// if principal
        
        else if(e.target.className == "menuham inactive"  ){

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
    








