document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your message. I'll get back to you soon!");
});
// ... your existing JavaScript (for navigation, slideshow, etc.) ...

// Smooth Scroll to Sections
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky Navigation
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// Professional Experience Slideshow
// ... your existing slideshow code ...


// Animate H2 Headings on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.5 }); // Observe when 50% of the element is in view
  
  const headings = document.querySelectorAll('h2');
  headings.forEach(heading => {
    observer.observe(heading);
  });
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Professional Experience Slideshow
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Show the first slide on page load
showSlide(currentSlide);



// Sticky Navigation


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Change the scroll threshold as needed
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

