let app = new Vue({
    el: '#app',
    data: {
        name: 'GeekShop',
        customer: '',
        promoProducts: ['Новые конкурсы', 'Новые поступления', 'Новые скидки'],
        bskt: '',
        goods: '',
        search: '',
        products: products
    },
    methods: {
        clickHandler() {
            console.log('click');
            console.log('basket', this.basket);
        },
        filteredGoods() {
            return this.products.filter(
                item => {
                    return item.title.toLowerCase().includes(
                        this.search.toLowerCase())
                    })
        },
    },
});
