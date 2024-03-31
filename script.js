const darkModeToggle = document.getElementById('darkModeToggle');
const lightDark = document.getElementById('lightDark');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    lightDark.textContent = lightDark.textContent === 'Light' ? 'Dark' : 'Light';
});

