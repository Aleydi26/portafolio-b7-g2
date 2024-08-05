let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500) // milisegundos 2.5 segundos
    .typeString('Aleydi López')
    .pauseFor(300)
    .deleteAll()
    .typeString('Diseñadora Grafica y Desarrolladora FONTEND JR')
    .pauseFor(1000)
    .start();