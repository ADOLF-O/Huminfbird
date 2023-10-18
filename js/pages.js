const menuresponsive = document.querySelector(".menuresponsive");
const padre = document.querySelector(".contenedorBody");

padre.addEventListener("click",eventos);

function animacionSalida(){
  menuresponsive.classList.add("inactive");
  menuresponsive.classList.remove("deslog");
 
};


function eventos(e){
    if(e.target.className == "menuham inactive"){

      if(menuresponsive.className == "menuresponsive log"){
          menuresponsive.classList.remove("log");
          menuresponsive.classList.add("deslog");

          setTimeout(animacionSalida, 1000);
      }else{
          menuresponsive.classList.toggle("inactive");
          menuresponsive.classList.add("log");

      };
  }
}























const imgP1 = document.querySelector(".imgP1");
const imgP2 = document.querySelector(".imgP2");
const imgP3 = document.querySelector(".imgP3");
const imgP4 = document.querySelector(".imgP4");
const pagos = document.querySelector("#pagos");



const animation = (dinamic, config) =>{
        
    dinamic.forEach((element) => {
        
        if(element.isIntersecting){

            if(element.target.className == "imgP1" || element.target.className == "imgP3" ){
                element.target.classList.add("scroll1");
            }else if(element.target.className == "imgP2" || element.target.className == "imgP4"){
                element.target.classList.add("scroll2");
            }else if(element.target.id == "pagos"){
                        pagos.classList.add("pagos")

                    }
            // element.target.classList.add("animacionScroll")
            
        }})};

const observador = new IntersectionObserver(animation, {
        root:null,
        rootMargin: "0px",
        threshold: 0.5
    })

    observador.observe(imgP1)
    observador.observe(imgP2)
    observador.observe(imgP3)
    observador.observe(imgP4)
    observador.observe(pagos)