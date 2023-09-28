//Type WritterEffect
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome!')
    .pauseFor(250000000000)
    .deleteAll()
    .start();
//Type WritterEffect


// Bootstrap navbar change color on scroll
const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY >= 56) {
navEl.classList.add('navbar-scrolled')
} else if (window.scrollY < 56) {
    navEl.classList.remove('navbar-scrolled');
}
});
// Bootstrap navbar change color on scroll


//PROJECTS 
const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
 //PROJECTS