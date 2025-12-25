// /////////////////////////menu responsive/////////////////////////////////
let burgerMenu = document.getElementById("burger-menu");
let navLinks = document.querySelector(".nav-links");

burgerMenu.onclick=()=>{
    burgerMenu.classList.toggle("rotate")
    navLinks.classList.toggle("showMenu")
}
///////////////////////////////////////////////////////////////////


// home-arrow
let arr = document.querySelector(".up-home-arrow");
window.addEventListener("scroll", () => {
    if(scrollY >250){
        arr.style.display="block";
    }
    else{
        arr.style.display="none";
    }
})

function return_home(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"}
    );
}
// end of home-arrow 




