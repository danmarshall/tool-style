export {}; // Make this a module to avoid global scope conflicts

// Initialize Lucide icons
const checkLucide = () => {
    if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
    } else {
        setTimeout(checkLucide, 50);
    }
};
checkLucide();

// Tools menu toggle
const toggle = document.getElementById('toolsToggle');
const list = document.getElementById('toolsList');

if (toggle && list) {
    toggle.addEventListener('click', () => {
        list.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target as Node) && !list.contains(e.target as Node)) {
            list.classList.remove('open');
        }
    });
}
