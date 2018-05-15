<template>
    <div>
        Cart
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
    name:'YourCart',
    computed: {
        ...mapGetters({
            products: 'cartProducts',
            checkoutStatus: 'checkoutStatus',
            total: 'cartTotalPrice'
        })
    },
    methods:{
        checkout(products){
            this.$store.dispatch('checkout', products)
        }
    }
}
</script>