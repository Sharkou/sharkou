document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // console.log('ok');
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            alignToTop: false,
            behavior: 'smooth'
        });
    });
});