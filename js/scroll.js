window.addEventListener("load", main);

function main(){
    const imgP1 = document.querySelector(".imgP1");
    const imgP2 = document.querySelector(".imgP2");
    const imgP3 = document.querySelector(".imgP3");

    const animation = (dinamic, config) =>{
        
        dinamic.forEach((element) => {
            
            if(element.isIntersecting){

                if(element.target.className == "imgP1" || element.target.className == "imgP3" ){
                    element.target.classList.add("scroll1");
                }else if(element.target.className == "imgP2"){
                    element.target.classList.add("scroll2");
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






}