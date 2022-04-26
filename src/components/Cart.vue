<template>
  <div class="box">
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{todo.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos;
    },
  },
};
</script>

<style scoped>
.box {
  margin: 75px auto;
  width: 300px;
  background: lightcoral;
  padding-top: 10px;
}
</style>