const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.querySelector('.main-content');

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    mainContent.classList.add('sidebar-open');

    if (window.innerWidth <= 767) {
        document.body.style.overflow = 'hidden';
    }
}

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    mainContent.classList.remove('sidebar-open');
    menuBtn.classList.remove('active');

    document.body.style.overflow = 'auto';
}

function toggleSidebar() {
    if (sidebar.classList.contains('open')) {
        closeSidebar();
        menuBtn.classList.remove('active');
    } else {
        openSidebar();
        menuBtn.classList.add('active');
    }
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

window.addEventListener('resize', () => {
    if (window.innerWidth > 767 && sidebar.classList.contains('open')) {
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});
