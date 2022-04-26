<template>
  <div class="box">
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{todo.name}}</li>
    </ul>
    <div style="padding: 25px">
      <h4>Count : {{count}}</h4>
      <button type="button" class="btn btn-primary" @click="increment">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos;
    },
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    increment(){
      this.$store.commit("increment")
    }
  }
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