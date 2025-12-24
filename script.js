let burgerMenu = document.getElementById("burger-menu");
let navLinks = document.querySelector(".nav-links");

burgerMenu.onclick=()=>{
    burgerMenu.classList.toggle("rotate")
    navLinks.classList.toggle("showMenu")
}

// console.log(navLinks,burgerMenu)
