const pages = {
    Dashboard: 'analytics.html',
    univ: 'index.html',
    add: 'add.html',
    products: 'edit.html',
    tips: 'tips.html',
    orders: 'orders.html',
    'support' : 'chat.html'
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.nav-link.active').classList.remove('active');

        link.classList.add('active');

        const page = link.dataset.page;

        document.getElementById('contentFrame').src = pages[page];
    });
});
