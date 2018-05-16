<template>
    <div>
        <h2>Your Cart</h2>
        <p v-show="!products.length">
          Please add some products to cart.
        </p>
        <ul>
            <li v-for="product in products" v-bind:key="product.id">
              {{product.title}} - {{product.price}} x {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total | currency}}</p>
        <p>
          <button 
            :disabled="!products.length"
            @click="checkout(products)">Checkout</button>
        </p>
        <p v-show="checkoutStatus">
          Checkout {{ checkoutStatus }}.
        </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "YourCart",
  computed: {
    ...mapGetters({
      products: "cartProducts",
      checkoutStatus: "checkoutStatus",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("checkout", products);
    }
  }
};
</script>
