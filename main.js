$(document).ready(function () {
    console.log('hi from main.js');

    class GoodsList {
        constructor() {
            this.goods = []
            this.totalSum = 0;
            this.totalQuantinty = 0;
        }

        countTotalSum() {
            let total = 0;
            this.goods.forEach(function (item) {
                total += item.price;
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
        constructor() {
            this.basketId = 0;
            this.goodsList = new GoodsList();
        }
    }

    class BasketItem {
        constructor(itemName = '', itemPrice = 0) {
            this.itemId = `${itemName}_id`;
            this.itemName = itemName;
            this.itemPrice = parseInt(itemPrice);
            this.quantity = 0;
        }
    }

    const renderMenu = (title = "Menu name", link = "#") => {
        return `<a class="nav-link" href="${link}">${title}</a>`
    };

    const renderProduct = (title = "Product name", price = 0, img = '') => {
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

    $('.buy-button').click(function () {
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

    $('#sendFormButton').click(() => {
        let nameText = $('#NameInput').val();
        let phoneText = $('#PhoneInput').val();
        let emailText = $('#EmailInput').val();
        correctNameText = /[A-Za-zА-ЯЁа-яё]/g;
        correctPhoneText = /^[\+][0-9]{1}[(][0-9]{3}[)][0-9]{3}[\-]{1}[0-9]{3}/;
        correctEmailText = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        $('#warning').html('');
        if (!correctNameText.test(nameText)) {
            $('#NameInput').addClass('is-invalid');
            $('#warning').append('<p class="nameWarning">- Имя должно \
            содержать только буквы латинского или \
            кириллического алфавита<p>');
        } else {
            $('#NameInput').removeClass('is-invalid');
        }

        if (!correctPhoneText.test(phoneText)) {
            $('#PhoneInput').addClass('is-invalid');
            $('#warning').append('<p class="phoneWarning">- Телефон должен быть формата \
            +0(000)000-0000</p>');
        } else {
            $('#PhoneInput').removeClass('is-invalid');
        }

        if (!correctEmailText.test(emailText)) {
            $('#EmailInput').addClass('is-invalid');
            $('#warning').append('<p class="emailWarning">- Email введен некорректно</p>');
        } else {
            $('#EmailInput').removeClass('is-invalid');
        }

    });

})