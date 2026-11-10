const modal = document.getElementById('quoteModal');
const closeBtn = document.getElementById('closeModal');
const quoteForm = document.getElementById('quoteForm');
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal) {
            modal.classList.add('active');
        }
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your inquiry has been received by Collagenix Industries. Our technical team will contact you shortly.');
        quoteForm.reset();
        modal.classList.remove('active');
    });
}