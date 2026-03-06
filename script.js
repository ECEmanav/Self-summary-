document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach((elem) => {
        observer.observe(elem);
    });

    // Navbar style change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'rgba(11, 17, 33, 0.9)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(11, 17, 33, 0.8)';
        }
    });
});