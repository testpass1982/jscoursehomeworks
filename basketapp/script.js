'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.quantity = 0;
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
        console.log(event.target);
        let product = new Product(event.target.dataset.name, event.target.dataset.price);
        this.basketAdd(product);
    },
    basketAdd(product) {
        for (let element of this.goods) {
            if (element.name === product.name) {
                element.quantity+=1;
                this.total_sum+=element.price;
                this.total_quantity+=1;
                console.log(this.goods);
                this.updateGoodsList(element);
                return;
            }
        }
        this.goods.push(product);
        console.log(this.goods);
        this.addToGoodsList(product);
    },
    addToGoodsList(product) {
            $('#goodsList tr:last').after(
                `<tr>
                    <th scope="row">${this.goods.length}</th>
                        <td>${product.name}</td>
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td>add remove</td>
                </tr>`
            );
    },
    updateGoodsList(product) {
        console.log('update!');
    }

}

window.onload = () => basket.init();