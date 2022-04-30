<template>
  <div class="wrapper">
    <div class="col" id="main">
      <div class="row row-cols-3 mt-5">
        <div v-for="items in topRated" :key="items.id" class="card col">
          <div class="card-body">
            <h5 class="card-title text-center">{{ items.name }}</h5>
          </div>
          <div class="text-center mb-3">
            <button
              @click="foodDetails(items)"
              type="button"
              class="btn btn-success"
            >
              Detials
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FoodDetailsVue from "../components/FoodDetails.vue";
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
  },
  methods: {
    foodDetails(item) {
      // this.$router.push({ name: food-details, params: item });
      this.$router.push("/food-details");
    },
  },
};
</script>
<style scoped>
.card {
  border: 2px solid #009900;
  background-color: #d9ffb3;
  color: #003300;
}
.card-2 {
  border: 2px solid blue;
  background-color: #d9ffb3;
  color: cornflowerblue;
}
</style>
