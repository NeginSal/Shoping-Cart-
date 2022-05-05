<template>
  <div class="d-flex cart-outer-div">
    <div class="card-body">
      <div  class="container mb-5">
        <h4 class="my-4 my-cart">My Cart</h4>
        <div class="d-flex my-3" style="justify-content: space-between">
          <h4 class="fw-600">Summary</h4>
          <h4 class="fw-600" style="margin-right: 49%">Cart</h4>
        </div>
        <div class="d-flex">
          <Summary v-bind:totalPrice="totalPrice" />
          <div class="row" style="width:50%">
            <div style="max-width: 70%" class="col-md-12">
              <ul>
                <li
                  v-for="items in cartItems"
                  :key="items.id"
                  style="list-style: none"
                >
                  <div class="cart-items">
                    <h6 class="mt-15">{{ items.name }}</h6>
                    <div class="d-flex mt-10">
                      <button @click="addItem(items)" class="add" type="button">
                        +
                      </button>
                      <span class="cart-quantity">{{ items.quantity }}</span>
                      <button
                        @click="removeItem(items)"
                        class="remove"
                        type="button"
                      >
                        -
                      </button>
                    </div>
                    <div class="my-3 line w-60"></div>
                    <h6 class="mt-15">{{ items.price }}</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-end"
          style="width: 80%; margin-top: 2%"
        >
          <button @click="checkout" class="btn btn-primary" type="button">
            CheckOut
          </button>
        </div>
      </div>

      <EmptyCard />
    </div>
  </div>
</template>

<script>
import EmptyCart from "./EmptyCard.vue";
import Summary from "./Summary.vue";

export default {
  components: {
    EmptyCart,
    Summary,
  },
  methods: {
    addItem(items) {
      this.$store.dispatch("addToCart", items);
    },
    removeItem(items) {
      this.$store.dispatch("removeItem", items);
    },
    checkout() {
      this.$router.push("/");
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
};
</script>

<style scoped>
.card-outer-div {
  flex-direction: column;
  height: 100vh;
}
.card-body {
  background: #efefef;
  flex: 1;
  overflow-y: auto;
}
.card-quantity {
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: #fff;
  margin: 0 5px;
  text-align: center;
}
.card-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #efefef;
}
.my-cart {
  color: orangered;
  font-weight: 600;
}
.input[type="text"] {
  width: 100%;
  font-size: 14px;
  font-weight: 500px;
  vertical-align: middle;
  text-align: center;
}
.fw-600 {
  font-weight: 600;
}
.line {
  height: 1px;
  border-bottom: 1px solid #000;
}
.w-120 {
  width: 120%;
}
.w-60 {
  width: 60%;
}
.add .remove {
  width: 28px;
  height: 28px;
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
}
</style>