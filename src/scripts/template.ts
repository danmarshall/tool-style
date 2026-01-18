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

// Animate details elements
document.querySelectorAll('details').forEach(details => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('div');
    
    if (summary && content) {
        summary.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Alt+click: close all others
            if (e.altKey) {
                document.querySelectorAll('details').forEach(other => {
                    if (other !== details && other.open) {
                        const otherContent = other.querySelector('div');
                        if (otherContent) {
                            const startHeight = otherContent.scrollHeight;
                            const animate = otherContent.animate([
                                { height: startHeight + 'px', opacity: 1 },
                                { height: '0px', opacity: 0 }
                            ], { duration: 250, easing: 'ease-in-out' });
                            
                            animate.onfinish = () => {
                                other.removeAttribute('open');
                                otherContent.style.height = '';
                            };
                        }
                    }
                });
            }
            
            if (details.open) {
                const startHeight = content.scrollHeight;
                content.style.height = startHeight + 'px';
                
                requestAnimationFrame(() => {
                    const animate = content.animate([
                        { height: startHeight + 'px', opacity: 1 },
                        { height: '0px', opacity: 0 }
                    ], { duration: 250, easing: 'ease-in-out' });
                    
                    animate.onfinish = () => {
                        details.removeAttribute('open');
                        content.style.height = '';
                    };
                });
            } else {
                details.setAttribute('open', '');
                const endHeight = content.scrollHeight;
                
                content.animate([
                    { height: '0px', opacity: 0 },
                    { height: endHeight + 'px', opacity: 1 }
                ], { duration: 250, easing: 'ease-in-out' });
            }
        });
    }
});
