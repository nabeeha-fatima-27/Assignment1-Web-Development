const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const modal = document.getElementById('projectModal');
const closeBtn = document.getElementById('closeModal');
const projectForm = document.getElementById('projectForm');
const projectSelect = document.getElementById('projectSelect');
const actionButtons = document.querySelectorAll('.cta-btn, .banner-cta-btn');
const projectCards = document.querySelectorAll('.product-card-large');

actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        projectSelect.value = '';
        modal.classList.add('active');
    });
});

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const chosenProject = card.getAttribute('data-project');
        if (chosenProject) {
            projectSelect.value = chosenProject;
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

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your project engineering inquiry has been received by Collagenix Industries. Our specialists will reach out shortly.');
    projectForm.reset();
    modal.classList.remove('active');
});