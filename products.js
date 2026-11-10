const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const modal = document.getElementById('quoteModal');
const closeBtn = document.getElementById('closeModal');
const quoteForm = document.getElementById('quoteForm');
const productSelect = document.getElementById('productSelect');
const ctaButtons = document.querySelectorAll('.cta-btn');
const productCards = document.querySelectorAll('.product-card-large');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        productSelect.value = '';
        modal.classList.add('active');
    });
});

productCards.forEach(card => {
    card.addEventListener('click', () => {
        const chosenProduct = card.getAttribute('data-product');
        if (chosenProduct) {
            productSelect.value = chosenProduct;
        }
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
    alert('Thank you! Your product inquiry has been received by Collagenix Industries. Our technical team will contact you shortly.');
    quoteForm.reset();
    modal.classList.remove('active');
});