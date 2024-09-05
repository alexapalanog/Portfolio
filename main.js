/* ==== show menu === */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/* ==== menu show === */
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');  
    })
}

/* ==== menu hidden === */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/* ==== Remove menu mobile === */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==== shadow header === */
const shadowHeader = () =>{
    const header= document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
    }
window.addEventListener('scroll', shadowHeader)
            
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
        delay: 5000, // Adjust the delay as needed
        disableOnInteraction: false,
    },
    speed: 600, // Speed of the transition in milliseconds
});

/* ==== scroll reveal animation=== */
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
})

// Reveal.js configuration for animations
// Home Section
sr.reveal('.home');

// About Section
sr.reveal('.about .section_title-1', { delay: 150, origin: 'top' });
sr.reveal('.about_me', { delay: 250, origin: 'left' });
sr.reveal('.about_info', { delay: 350, origin: 'right' });
sr.reveal('.about_button', { delay: 350, origin: 'right' });

// Skills Section
sr.reveal('.skills .section_title-2', { delay: 300, distance: '20px', scale: 1 });
sr.reveal('.skills_container', { delay: 300, distance: '20px', scale: 1 });

// Projects Section
sr.reveal('.projects .section_title-3', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.projects .section_subtitle', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.project_container', { delay: 300, origin: 'left' });

// Activities Section
sr.reveal('.activities .section_title-3', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.activities .section_subtitle', { delay: 300, distance: '20px', scale: 1, origin: 'top' });
sr.reveal('.activity_container', { delay: 300, distance: '20px', scale: 1, origin: 'top' });

// contact section
sr.reveal('.section-title, .section-subtitle', {origin: 'top',distance: '50px',duration: 1000,delay: 200, easing: 'ease-in-out'});
sr.reveal('.contact-info', {origin: 'left',distance: '50px',duration: 1000,delay: 400,easing: 'ease-in-out'});
sr.reveal('.contact-form', {origin: 'right',distance: '50px',duration: 1000,delay: 600,easing: 'ease-in-out'});

/* ==== email js === */
// Initialize EmailJS
emailjs.init("_Bn_jNhGiyfSsuQqF"); // Replace with your actual EmailJS user ID

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Send email using EmailJS
    emailjs.send("service_pa4f49m", "template_hse6w7m", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        // Show success message
        document.getElementById('response-message').textContent = "Your message has been sent successfully!";
        document.getElementById('response-message').style.color = "green";
        document.getElementById('response-message').style.display = "block";
        
        // Clear the form
        form.reset();
    }, function(error) {
        // Show error message
        document.getElementById('response-message').textContent = "Oops! Something went wrong. Please try again.";
        document.getElementById('response-message').style.color = "red";
        document.getElementById('response-message').style.display = "block";
    });
});
