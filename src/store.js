import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todos: [],
    profiles: [],
    chats: [],
    firebaseData: [],
  },
  mutations: {
    //step 4 here we are do changes with the store
    setTodos(state, data) {
      state.todos = data;
    },
    setChatting(state, items) {
      state.chats = items;
    },
    newData(state, newItem) {
      state.todos.products.push(newItem);
      // state.todos=[...state.todos, ...newItem]
    },
    SET_CHAT_DETAILS(state, chatDetails) {
      // alert("alert from store  : " +chatDetails)
      state.profiles = chatDetails;

      // console.log('this is the profiles:  '+ chatDetails )
    },
    addNewMesseges(state, newMessage) {
      state.chats.push(newMessage);
    },
    firebasedata(state, newChatsFirebase) {
      state.firebaseData = newChatsFirebase;
    },
  },
  actions: {
    // second step to fetch data and store it in the variable
    async fetchTodos() {
      await fetch("https://dummyjson.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var todos = data;
          // console.log(data);

          // third step here we are commiting
          this.commit("setTodos", todos);
        });
    },
    chattings({ commit }, items) {
      commit("setChatting", items);
    },
    addTodos() {
      const arrays2 = ["hello"];
      this.commit("newData", arrays2);
    },
    chatListDetails({ commit }, chatDetails) {
      // Commit the mutation to update the state with chat details
      commit("SET_CHAT_DETAILS", chatDetails);
    },
    newChats({ commit }, newMessage) {
      commit("addNewMesseges", newMessage);
    },

    FirebaseData({ commit }, newChatsFirebase) {
      commit("firebasedata", newChatsFirebase);
    },
  },
  getters: {
    counting: (state) => {
      return state.todos.products ? state.todos.products.length : 0;
    },
    getChatListDetails: (state) => state.profiles,
    getChats: (state) => state.chats,

    getFirebaseDataFromStore: (state) => state.firebaseData,
  },

  // getters:{
  //     counting: (state) => {
  //         return state.todos.products.length;
  //     },

  // },
});
