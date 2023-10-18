window.addEventListener("load", main);

function main(){

    const imgP1 = document.querySelector(".imgP1");
    const imgP2 = document.querySelector(".imgP2");
    const imgP3 = document.querySelector(".imgP3");
    const imgP4 = document.querySelector(".imgP4");
    const pagos = document.querySelector("#pagos");

    const spanC = document.querySelector(".info__span");
  
    let contadorC = 990;


    
   
    
    

// --------------Observador--------------------------------------



    const animation = (dinamic, config) =>{
        
        dinamic.forEach((element) => {
            
            if(element.isIntersecting){

                if(element.target.className == "imgP1" || element.target.className == "imgP3" ){
                    element.target.classList.add("scroll1");
                }else if(element.target.className == "imgP2" || element.target.className == "imgP4"){
                    element.target.classList.add("scroll2");
                }else if(element.target.className == "info__span"){

                        if(contadorC === 990){

                            let intervalo = setInterval(() =>{
                                contadorC++;
                                spanC.textContent = "+" + contadorC ;
                                if(contadorC == 1050){
                                    clearInterval(intervalo);
                                    
                                        
                                }
                            }, 20)};
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
    observador.observe(spanC)
    observador.observe(pagos)


}







