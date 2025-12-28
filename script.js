// /////////////////////////menu responsive/////////////////////////////////
let burgerMenu = document.getElementById("burger-menu");
let navLinks = document.querySelector(".nav-links");

burgerMenu.onclick=()=>{
    burgerMenu.classList.toggle("rotate")
    navLinks.classList.toggle("showMenu")
}
///////////////////////////////////////////////////////////////////

<<<<<<< HEAD
if(location.pathname==='/index.html'){
    let li = document.querySelectorAll(".links-list li a");
    li[0].classList.add("active")
}
else if(location.pathname==='/aboutUs.html'){
    let li = document.querySelectorAll(".links-list li a");
    li[1].classList.add("active")
}
else if(location.pathname==='/tours.html'){
=======
if(location.href==='http://127.0.0.1:5500/index.html'){
    let li = document.querySelectorAll(".links-list li a");
    li[0].classList.add("active")
}
else if(location.href==='http://127.0.0.1:5500/aboutUs.html'){
    let li = document.querySelectorAll(".links-list li a");
    li[1].classList.add("active")
}
else if(location.href==='http://127.0.0.1:5500/tours.html'){
>>>>>>> 22b9e3844ded709c586cc3b83cfad3b97742ae55
    let li = document.querySelectorAll(".links-list li a");
    li[2].classList.add("active")
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




