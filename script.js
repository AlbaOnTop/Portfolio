async function loadPage(page) {
    const path = `pages/${page}.html`;
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error('Pagina non trovata');
        const html = await response.text();
        document.getElementById('content').innerHTML = html;
    } catch (err) {
        document.getElementById('content').innerHTML = "<h1>404 - Pagina non trovata</h1>";
    }
}

function updateActiveNavLink(currentPage) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        const section = link.getAttribute('href').replace('#', '');
        if (section === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function handleRouting() {
    const page = location.hash.replace('#', '') || 'home';
    loadPage(page);
    updateActiveNavLink(page);
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);
