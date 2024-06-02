function toggleOverlay() {
    document.getElementById('navbar-overlay').classList.toggle('hidden');
}

document.getElementById('menu-toggle').addEventListener('click', function() {
    toggleOverlay();
});

document.querySelectorAll('#navbar-overlay a').forEach(link => {
    link.addEventListener('click', function() {
        toggleOverlay();
    });
});
