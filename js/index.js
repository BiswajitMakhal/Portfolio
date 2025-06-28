document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('sideNav');
    const icon = document.getElementById('navbar-toggler-icon');
    const collapseEl = document.querySelector(toggler.getAttribute('data-bs-target'));

    toggler.addEventListener('click', () => {
        // Toggle active class on icon
        icon.classList.toggle('active');

        // Sync aria-expanded attribute for accessibility
        const isOpen = icon.classList.contains('active');
        toggler.setAttribute('aria-expanded', isOpen);

        // Remove active if collapse closes (e.g. clicking outside or resizing)
        collapseEl.addEventListener('hidden.bs.collapse', () => {
            icon.classList.remove('active');
            toggler.setAttribute('aria-expanded', false);
        }, { once: true });
    });
});
