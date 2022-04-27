<template>
  <div class="home">
    <Header/>
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from "../components/Cart.vue";
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    Cart,
    Header,
  },
};
</script>
