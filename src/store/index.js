import { createStore } from 'vuex'

export default createStore({
  state: {
    topRated: [
      { id: 1, name: "Banana Skin", price: 20, desc: "AAAA", rate: 4.1 },
      { id: 2, name: "Shiny Star", price: 40, desc: "AAAA", rate: 5 },
      { id: 3, name: "Green Shells", price: 60, desc: "AAAA", rate: 3.2 },
      { id: 4, name: "Red Shells", price: 80, desc: "AAAA", rate: 4.5 },
      { id: 5, name: "Banana Skin", price: 20, desc: "AAAA", rate: 4.1 },
      { id: 6, name: "Shiny Star", price: 40, desc: "AAAA", rate: 5 },
      { id: 7, name: "Green Shells", price: 60, desc: "AAAA", rate: 3.2 },
      { id: 8, name: "Red Shells", price: 80, desc: "AAAA", rate: 4.5 },
    ],
    cartItemCount:0,
    cartItems:[]
  },
  getters: {

  },
  mutations: {
    addToCart(state,payload){
      let item = payload;
      item = {...item,quantity:1}
      if(state.cartItems.length>0){
        let bool =state.cartItems.some(i=>i.id===item.id)
        if(bool){
          let itemIndex = state.cartItems.findIndex(el=>el.id === item.id)
          state.cartItems[itemIndex]["quantity"] +=1;
        }else{
          state.cartItems.push(item)
        }
      }else{
        state.cartItems.push(item)
      }
      state.cartItemCount++
    }

  },
  actions: {

  },
  modules: {
  }
})
