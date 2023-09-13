window.addEventListener("load", main);

function main(){

    // ---seleccionas elementos-----
    const menuham = document.querySelector(".menuham");
    const menuresponsive = document.querySelector(".menuresponsive");
    const enlaceCards = document.querySelector(".enlaceCards");



    // -----dinamismo---

    menuham.addEventListener("click", menuhamtoggle);
    enlaceCards.addEventListener("click", menuCuentasLog)



    // ---funciones----

    function menuhamtoggle(){

        menuresponsive.classList.toggle("inactive");
        
        
    };

    function menuCuentasLog(){
        
    };
    
};