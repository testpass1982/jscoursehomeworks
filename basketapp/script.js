'use strict';

/**
* Мини-приложение "Корзина"
* @constructor Class representing a product
* @param {number} product.id Идентификатор продукта
* @param {string} name Название продукта
* @param {string} price Стоимость продукта
* @param {string} quantity Количество продуктов в одной единице товара
*/

class Product {
    constructor(product_id, name, price) {
        this.id = product_id;
        this.name = name;
        this.price = price;
        this.quantity = 1;
    }
}

const basket = {
    goods: new Array(),
    total_sum: 0,
    total_quantity: 0,
    init() {
        console.log('basket start',
        'goods:', this.goods,
        'total sum: ', this.total_sum,
        'total goods: ', this.total_quantity
        );
        document.addEventListener('click', event => this.basketClickHandler(event));
    },
    basketClickHandler(event) {
        if (!event.target.classList.contains('btn')) {
            return;
        }
        if (event.target.classList.contains('remove_btn')) {
            this.basketRemove(event.target.dataset.product_id);
            return;
        }
        let product = new Product(event.target.dataset.product_id,
                                  event.target.dataset.name,
                                  parseInt(event.target.dataset.price));
        this.total_quantity+=product.quantity;
        this.total_sum+=product.price;
        this.basketAdd(product);
    },
    basketAdd(product) {
        for (let element of this.goods) {
            if (element.name === product.name) {
                element.quantity+=product.quantity;
                this.updateHTMLGoodsList(element);
                return;
            }
        }
        this.goods.push(product);
        this.addToHTMLGoodsList(product);
        this.updateHTMLGoodsList(product);
    },
    basketRemove(id) {
        for (let element of this.goods) {
            if (element.id === id) {
                element.quantity-=1;
                this.total_quantity-=1;
                this.total_sum-=element.price;
                this.updateHTMLGoodsList(element);
                return;
            }
        }
    },
    addToHTMLGoodsList(product) {
            $('#goodsList tr:last').after(
                `<tr>
                    <th scope="row">${this.goods.length}</th>
                        <td>${product.name}</td>
                        <td id=${product.id}_quantity_id>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td><a href="#" class="btn btn-success remove_btn" data-product_id=${product.id}>remove</a></td>
                </tr>`
            );
    },
    updateHTMLGoodsList(product) {
        console.log('update!');
        console.log(this.goods);
        console.log('total quantity:', this.total_quantity);
        console.log('total sum:', this.total_sum);
        $(`#${product.id}_quantity_id`).html(product.quantity);
        $('#basket_total_quantity').html(this.total_quantity);
        $('#basket_total_sum').html(this.total_sum);
    }
}

window.onload = () => basket.init();