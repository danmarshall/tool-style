// Initialize Lucide icons
lucide.createIcons();

const toggle = document.getElementById('toolsToggle');
const list = document.getElementById('toolsList');

toggle.addEventListener('click', () => {
    list.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !list.contains(e.target)) {
        list.classList.remove('open');
    }
});

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-header button');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.closest('.accordion-section');
        const content = document.getElementById(button.getAttribute('aria-controls'));
        const icon = button.querySelector('[data-lucide]');
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        
        // Toggle open state
        section.classList.toggle('open');
        button.setAttribute('aria-expanded', !isOpen);
        
        // Manage inert to remove from tab order when collapsed
        if (!isOpen) {
            content.removeAttribute('inert');
            icon.style.transform = 'rotate(180deg)';
        } else {
            content.setAttribute('inert', '');
            icon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Set initial inert state if collapsed
    const content = document.getElementById(button.getAttribute('aria-controls'));
    if (button.getAttribute('aria-expanded') === 'false') {
        content.setAttribute('inert', '');
    }
});
