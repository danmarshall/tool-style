export {}; // Make this a module

function initAccordions() {
  const accordions = document.querySelectorAll('[data-accordion]');
  
  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header') as HTMLButtonElement;
    const content = accordion.querySelector('[data-accordion-content]') as HTMLElement;
    
    if (header && content) {
      header.addEventListener('click', () => {
        const isOpen = header.getAttribute('aria-expanded') === 'true';
        header.setAttribute('aria-expanded', (!isOpen).toString());
        content.style.display = isOpen ? 'none' : 'block';
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccordions);
} else {
  initAccordions();
}
