const header = document.querySelector('.header');


window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // Sinon, on l'enlève pour redevenir transparent
        header.classList.remove('scrolled');
    }
});