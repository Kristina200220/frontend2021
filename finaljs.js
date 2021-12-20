let app = new Vue({
    el: '#myapp',
    data: {
        product: "Новорічна гірлянда",
        selectedVariant: 0,
        image: "./img/white.jpg",
        inStock: true,
        inventory: 12,
        details: [`Має 8 режимів роботи, від найповільнішого мерехтіння світлодіодних вогнів з верху донизу, до максимально швидкого. З одного боку гірлянди є "вилка" для підключення в розетку, а з іншого боку з\'єднувач, дозволяючи підключити до 10 штук в одну величезну гірлянду, яка створюватиме неймовірні світлові ефекти лише від однієї розетки.`],
        variants: [
            {
                variantId: 1,
                variantColor: '#D3D3D3',
                variantImage: "img/white.jpg"

            },
            {
                variantId: 2,
                variantColor: '#FFFF00',
                variantImage: "./img/gold.jpg"

            },
            {
                variantId: 3,
                variantColor: '#0000FF',
                variantImage: "./img/blue.jpg"

            }

        ],
        cart: 0

    },
    methods: {
        addToCart(){
        if (this.cart < this.inventory) {
           this.cart += 1
        } else {
           this.inStock = false;
        }
        },
        updateProduct(variantImage){
            this.image = variantImage;

        }
    },
    computed: {
        title(){
            return this.product;
        }
    }
})