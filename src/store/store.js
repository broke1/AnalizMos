import { createStore } from "vuex" 

const store = createStore({
  state: {
    menu: [
      {
        name: "Услуги",
        url: "#"
      },
      {
        name: "Почему мы?",
        url: "#"
      },
      {
        name: "Информация",
        url: "#"
      },
      {
        name: "Контакты",
        url: "#"
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
      
  }
})

export default store
