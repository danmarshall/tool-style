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
