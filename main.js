/* ==== show menu === */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ==== menu show === */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');  
    });
}

/* ==== menu hidden === */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* ==== Remove menu mobile === */
const navLinks = document.querySelectorAll('.nav_link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(n => n.addEventListener('click', linkAction));

/* ==== shadow header === */
const shadowHeader = () => {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY || window.pageYOffset; // Fallback for older browsers
    if (scrollPosition >= 50) {
        header.classList.add('shadow-header');
    } else {
        header.classList.remove('shadow-header');
    }
};

window.addEventListener('scroll', shadowHeader);

/* ==== swiper === */
var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 600,
});

/* ==== scroll reveal animation === */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
});

// Reveal.js configuration for animations
sr.reveal('.home');
sr.reveal('.about .section_title-1', { delay: 150, origin: 'top' });
sr.reveal('.about_me', { delay: 250, origin: 'left' });
sr.reveal('.about_info', { delay: 350, origin: 'right' });
sr.reveal('.about_button', { delay: 350, origin: 'right' });
sr.reveal('.skills .section_title-2', { delay: 300, distance: '20px', scale: 1 });
sr.reveal('.skills_container', { delay: 300, distance: '20px', scale: 1 });
sr.reveal('.projects .section_title-3', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.projects .section_subtitle', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.project_container', { delay: 300, origin: 'left' });
sr.reveal('.activities .section_title-3', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.activities .section_subtitle', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.activity_container', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.section-title, .section-subtitle', { origin: 'top', distance: '50px', duration: 1000, delay: 200, easing: 'ease-in-out' });
sr.reveal('.contact-info', { origin: 'left', distance: '50px', duration: 1000, delay: 400, easing: 'ease-in-out' });
sr.reveal('.contact-form', { origin: 'right', distance: '50px', duration: 1000, delay: 600, easing: 'ease-in-out' });

// Initialize EmailJS with your public key
(function() {
    emailjs.init("W668vLiBFpLtN75T5");  // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form using EmailJS
    emailjs.sendForm('service_pa4f49m', 'template_hse6w7m', this)
        .then(function() {
            const responseMessage = document.getElementById('response-message');
            responseMessage.textContent = "Your message has been sent successfully!";
            responseMessage.style.color = "green";
            responseMessage.style.display = "block";
            document.getElementById('contact-form').reset();
        }, function(error) {
            const responseMessage = document.getElementById('response-message');
            responseMessage.textContent = "Oops! Something went wrong. Please try again.";
            responseMessage.style.color = "red";
            responseMessage.style.display = "block";
            console.error("EmailJS error:", error); // Log the error to the console
        });
});

/* ==== dark mode === */
// Menu toggle script for small screens (assuming you have these elements in your HTML)
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggleBtn = document.getElementById('dark-mode-toggle');

    // Set initial state based on the presence of the 'dark' class
    if (body.classList.contains('dark')) {
        toggleBtn.classList.remove('fa-moon');
        toggleBtn.classList.add('fa-sun');
    } else {
        toggleBtn.classList.remove('fa-sun');
        toggleBtn.classList.add('fa-moon');
    }

    toggleBtn.onclick = function() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            toggleBtn.classList.remove('fa-moon');
            toggleBtn.classList.add('fa-sun');
        } else {
            toggleBtn.classList.remove('fa-sun');
            toggleBtn.classList.add('fa-moon');
        }
    };
});



