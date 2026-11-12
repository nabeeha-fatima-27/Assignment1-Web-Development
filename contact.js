document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.styled-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill out all required fields before submitting.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const submitBtn = this.querySelector('.submit-form-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${name}! Your inquiry regarding "${subject}" has been successfully received by Collagenix Industries. Our team will contact you at ${email} shortly.`);
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 800);
        });
    }

    const modal = document.getElementById('projectModal');
    const ctaBtn = document.querySelector('.cta-btn');
    const closeBtn = document.getElementById('closeModal');
    const projectForm = document.getElementById('projectForm');

    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) modal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your industrial infrastructure inquiry has been submitted successfully.');
            this.reset();
            if (modal) modal.style.display = 'none';
        });
    }
});