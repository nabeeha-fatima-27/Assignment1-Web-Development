const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const modal = document.getElementById('quoteModal');
const closeBtn = document.getElementById('closeModal');
const quoteForm = document.getElementById('quoteForm');

const quoteButtons = document.querySelectorAll('.cta-btn, .btn-secondary');

quoteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been received by Collagenix Industries. Our technical team will contact you shortly.');
    quoteForm.reset();
    modal.classList.remove('active');
});