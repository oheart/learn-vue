<template>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
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