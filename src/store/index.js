import { createStore } from 'vuex'

export default createStore({
  state: {
    // products: [
    //   { name: "Banana Skin", price: 20 },
    //   { name: "Shiny Star", price: 40 },
    //   { name: "Green Shells", price: 60 },
    //   { name: "Red Shells", price: 80 }, 
    // ],
    // count: [],
    todos: [
      { id: 1, name: 'shopping at 7', done: true },
      { id: 2, name: 'learn vuex', done: true },
      { id: 3, name: 'gaming', done: false },
    ],
    count: 0
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
