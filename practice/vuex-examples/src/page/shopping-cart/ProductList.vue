<template>
    <ul>
        <li v-for="product in products" v-bind:key="product.id">
          {{product.title}}
            <br/>
            <button>
                Add to cart
            </button>
        </li>
    </ul>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name:'ProductList',
        computed: mapGetters({
            products: 'allProducts'
        }),
        methods: mapActions([
            'addProductToCart'
        ]),
        created(){
            this.$store.dispatch('getAllProducts')
        }
    }
</script>
