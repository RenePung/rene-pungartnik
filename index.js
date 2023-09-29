// ----------------------------------------------------------------- Type WritterEffect -----------------------------------------------------------------
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome!')
    .pauseFor(250000000000)
    .deleteAll()
    .start();
// ----------------------------------------------------------------- Type WritterEffect -----------------------------------------------------------------


// ----------------------------------------------------------------- Bootstrap navbar change color on scroll -----------------------------------------------------------------
const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY >= 56) {
navEl.classList.add('navbar-scrolled')
} else if (window.scrollY < 56) {
    navEl.classList.remove('navbar-scrolled');
}
});
// ----------------------------------------------------------------- Bootstrap navbar change color on scroll -----------------------------------------------------------------