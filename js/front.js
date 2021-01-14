
    const socDiv = document.querySelector("#social")
    let slid = false;
    const socialSlide = function() {
        console.log("reee")
        if(slid === false){
            socDiv.setAttribute("class", "slide");
            socDiv.onanimationend = () => {
                socDiv.style.left = "0";
                socDiv.removeAttribute("class");
            }
            slid = true;
        } else {
            socDiv.setAttribute("class", "unSlide");;
            socDiv.onanimationend = () => {
                socDiv.style.left = "-52px";
                socDiv.removeAttribute("class");
            }
            slid = false;
        }

    }
    const scrollSlide = () => {
        if(socDiv.style.left === "0px" && socDiv.className !== "unSlide") {
            socialSlide();
        }
    }



    document.addEventListener('DOMContentLoaded', ()=>{
        socDiv.addEventListener("click", socialSlide);
        window.addEventListener("scroll", scrollSlide);
    })