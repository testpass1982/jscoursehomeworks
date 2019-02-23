const app = new Vue({
    el: '#app',
    data: {
        name: 'GeekShop',
        customer: '',
        promoProducts: ['Новые конкурсы', 'Новые поступления', 'Новые скидки'],
        // goods = products
        // filteredGoods: [],
        // searchLine: ''
    },
    methods: {
        clickHandler() {
            console.log('click');
        },
        vueClickHandler() {
            console.log('vue click');
        },
    },
    mounted() {
        this.goods = products;
    //     this.filteredGoods = filteredGoods;
    //     this.goods.forEach(item => {
    //         console.log(item);
    //     }
    //     );
    }
});
