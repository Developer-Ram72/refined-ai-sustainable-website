document.addEventListener('DOMContentLoaded', () => {
    const contentFrame = document.getElementById('contentFrame');
    const navLinks = document.querySelectorAll('.nav-link');

    function loadPage(pageName) {
        const pages = {
            'orders': 'orders.html',
            'cart': 'cart.html',
            'products': 'products.html',
            'tips': 'tips.html',
            'support': 'chat.html'
        };

        if (pages[pageName]) {
            contentFrame.src = pages[pageName];
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === pageName) {
                    link.classList.add('active');
                }
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load default page
    loadPage('Dashboard');
});
