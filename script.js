document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos, pronto nos pondremos en contacto contigo.');
});

// Controla el menú hamburguesa
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-open');
    nav.classList.toggle('menu-open');
});

