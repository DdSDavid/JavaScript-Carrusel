var swiper = new Swiper(".mySwiper", {
    
    slederPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    breakpoints : {
        991: {
            slidesPerView:3
        }
    },
    on: {
        init: function () {
            actualizarFechaHora(); // Llamamos a la función cuando se inicie el carrusel
        },
        slideChange: function () {
            actualizarFechaHora(); // Llamamos a la función cada vez que se cambie la diapositiva
            setInterval(actualizarFechaHora, 1000);// Actualizar cada segundo
        }
    }
});

function actualizarFechaHora() {
    var fechaElemento = document.getElementById("fecha");
    var horaElemento = document.getElementById("hora");
    
    var fecha = new Date();
    var opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    fechaElemento.textContent = fecha.toLocaleDateString('es-ES', opcionesFecha);
    horaElemento.textContent = fecha.toLocaleTimeString('es-ES', opcionesHora);
}
