
// hamburger

let hamburger = document.querySelector(".hamburger")
    
    hamburger.addEventListener("click", function() {
        document.querySelector("body").classList.toggle("active");
    })



    
// Sidebar menu

let menu = document.querySelectorAll(".menu")
menu.forEach((n)=> {
   n.addEventListener("click", function(){
      n.classList.toggle("active")
   })
})



// Navbar
let navbar = document.querySelector(".container2")
let sticky = navbar.offsetTop;

function position() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("fix-my-nav")
    }else {
        navbar.classList.remove("fix-my-nav")
    }
}
window.onscroll = function() {
    position();
}