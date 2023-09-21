window.addEventListener("load", main);

function main(){

    const imgP1 = document.querySelector(".imgP1");
    const imgP2 = document.querySelector(".imgP2");
    const imgP3 = document.querySelector(".imgP3");
    const imgP4 = document.querySelector(".imgP4");

    const spanC = document.querySelector(".info__span");

    const imgs = [
                    "../humingbird/pagina/sliderP1.png",
                    "../humingbird/pagina/sliderP2.png",
                    "../humingbird/pagina/sliderP3.png",
                    "../humingbird/pagina/sliderP4.png",
                    
    ]
  
    let contadorC = 950;


    
   
    
    

// --------------Observador--------------------------------------



    const animation = (dinamic, config) =>{
        
        dinamic.forEach((element) => {
            
            if(element.isIntersecting){

                if(element.target.className == "imgP1" || element.target.className == "imgP3" ){
                    element.target.classList.add("scroll1");
                }else if(element.target.className == "imgP2" || element.target.className == "imgP4"){
                    element.target.classList.add("scroll2");
                }else if(element.target.className == "info__span"){

                        if(contadorC === 950){

                            let intervalo = setInterval(() =>{
                                contadorC++;
                                spanC.textContent = "+" + contadorC ;
                                if(contadorC == 1000){
                                    clearInterval(intervalo);
                                        
                                }
                            }, 30)};

                        

            

                    
                    
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

// --------------Slider---------------------------------------
    




// -------------contador------------





}







