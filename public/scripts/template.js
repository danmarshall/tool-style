// Initialize Lucide icons
lucide.createIcons();

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update icon
    const icon = themeToggle.querySelector('[data-lucide]');
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
});

// Tools menu toggle
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
