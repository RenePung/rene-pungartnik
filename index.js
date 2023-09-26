//Type WritterEffect
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome!')
    .pauseFor(250000000000)
    .deleteAll()
    .start();
//type WritterEffect