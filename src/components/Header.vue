<template>
  <div class="header">
    <div class="logo">
      <h4 class="sweet" @click="goTo('home')" >Shopping Cart</h4>
    </div>

    <div class="d-flex cart">
      <i class="fa fa-shopping-cart cart-icon" @click="goTo('cart')"></i>

      <span class="cart-count">{{ count }}</span>

      <h5 class="login">Login</h5>
      <h5 class="register">Sign Up</h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
  methods: {
    goTo(page) {
      page === "home" ? this.$router.push("/") : this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: #ccc;
  display: flex;
  justify-content: space-between;
}
.logo {
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}
.sweet {
  color: darkcyan;
  font-weight: 600;
  margin-top: 7px;
}
.cart-count {
  font-size: 15px;
  color: rebeccapurple;
  padding: 0 5px;
  margin-left: -35px;
  background: white;
  height: 20px;
  border-radius: 50%;
  width: 20px;
}
.cart {
  width: 300px;
  justify-content: space-evenly;
  padding-top: 3px;
}
.cart-icon {
  line-height: 45px;
  font-size: 24px;
  color: darkslategrey;
  cursor: pointer;
}
.login .register {
  font-weight: 600;
  margin-top: 50px;
}
</style>