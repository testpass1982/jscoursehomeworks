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

    class GoodsList {
        constructor() {
            this.goods = []
            this.totalSum = 0;
            this.totalQuantinty = 0;
        }

        countTotalSum() {
            let total = 0;
            this.goods.forEach(function(item){
                total+=item.price;
            });
            this.totalSum = total;
            return this.totalSum;
        }

        addProduct(product) {
            this.goods.push(product);
            this.totalSum += product.itemPrice;
        }

        removeProduct(product) {
            let index = this.goods.indexOf(product)
            if (index > -1) {
                this.goods.splice(index, 1)
            }
        }

    }
    class Basket {
        constructor () {
            this.basketId = 0;
            this.goodsList = new GoodsList();
        }
    }

    class BasketItem {
        constructor (itemName='', itemPrice=0) {
            this.itemId = `${itemName}_id`;
            this.itemName = itemName;
            this.itemPrice = parseInt(itemPrice);
            this.quantity = 0;
        }
    }

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
                <div class="btn btn-success buy-button"
                data-price='${price}', data-title='${title}'>Купить</div>
            </div>
        </div>`
    };

    const renderNav = list => {
        const menuList = list.map(item => renderMenu(item.title, item.link)).join('');
        $('#menu').html(menuList);
    };

    const renderPage = list => {
        const productList = list.map(item => renderProduct(item.title, item.price, item.img)).join('');
        document.querySelector('.products').innerHTML = productList;
    };

    let basket = new Basket();

    renderNav(menu);
    renderPage(products);

    $('.buy-button').click(function(){
        let title = this.dataset.title;
        let price = this.dataset.price;
        let basketItem = new BasketItem(title, price);
        basket.goodsList.addProduct(basketItem);
        console.log('Корзина:', basket.goodsList)
        console.log('Товаров на сумму:', basket.goodsList.totalSum)
        $('#basketTotal').html(
            `${basket.goodsList.totalSum}`
        );
    });

})

