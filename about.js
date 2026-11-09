const counters = document.querySelectorAll('.counter-number');
let animated = false;

function runCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 50; 

        function updateCount() {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
    });
}

window.addEventListener('scroll', () => {
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
        const sectionPosition = counterSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && !animated) {
            runCounters();
            animated = true;
        }
    }
});

const modal = document.getElementById('quoteModal');
const closeBtn = document.getElementById('closeModal');
const quoteForm = document.getElementById('quoteForm');
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal) modal.classList.add('active');
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