<template>
  <div class="wrapper">
    <Header />
    <div class="col" id="main">
      <div class="row row-cols-3 mt-5">
        <div v-for="items in topRated" :key="items.id" class="card col">
          <div class="card-body">
            <h5 class="card-title text-center">{{ items.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
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
