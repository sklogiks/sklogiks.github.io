// Mobile Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    if (nav.classList.contains('nav-active') && 
        !nav.contains(event.target) && 
        !burger.contains(event.target)) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        
        document.querySelectorAll('.nav-links li').forEach((link) => {
            link.style.animation = '';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        
        // Close mobile menu when clicking a link
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            document.querySelectorAll('.nav-links li').forEach((link) => {
                link.style.animation = '';
            });
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the mobile menu
navSlide();

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill tags on scroll
const animateSkillTags = () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });
};

// Run animations when page loads
window.addEventListener('DOMContentLoaded', () => {
    animateSkillTags();
}); 