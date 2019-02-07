$(document).ready(function(){
    console.log('hi');
    const menu = [
        {title: 'Главная', link:'index.html'},
        {title: 'О магазине', link:'about.html'},
        {title: 'Доставка', link:'delivery.html'},
        {title: 'Гарантия', link:'warranty.html'},
    ];

    const products = [
        {title: 'Notebook', price: 2000, img: 'img/notebook.png'},
        {title: 'Mouse', price: 20, img: 'img/mouse.png'},
        {title: 'Keyboard', price: 35, img: 'img/keyboard.png'},
        {title: 'Gamepad', price: 48, img: 'img/gamepad.png'},
        {title: 'Chair', price: 500, img: 'img/chair.png'},
    ];

    const renderMenu = (title="Menu name", link="#") => {
        return `<a class="nav-link" href="${link}">${title}</a>`
    };

    const renderProduct = (title="Product name", price=0, img='') => {
        return `
        <div class="card product-item p-2">
            <div class="h-50">
            <img class="card-img-top" src="${img}">
            </div>
            <div class="card-body">
                <h3 class="card-title">${title}</h3>
                <p class="card-text">Стоимость: ${price}</p>
                <div class="btn btn-success">Купить</div>
            </div>
        </div>`
    };

    const renderNav = list => {
        const menuList = list.map(item => renderMenu(item.title, item.link)).join('');
        document.querySelector('#menu').innerHTML = menuList;
    };

    const renderPage = list => {
        const productList = list.map(item => renderProduct(item.title, item.price, item.img)).join('');
        document.querySelector('.products').innerHTML = productList;
    };

    renderNav(menu);
    renderPage(products);
})

