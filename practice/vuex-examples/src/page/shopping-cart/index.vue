<template>
    <div>
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <ProductList />
        <hr />
        <YourCart />
    </div>
</template>

<script>
import ProductList from './ProductList.vue'
import YourCart from './YourCart.vue'

export default{
    name: 'ShoppingCart',
    component: {ProductList, YourCart}
}
</script>