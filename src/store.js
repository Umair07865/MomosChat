import Vue from "vue";

import Vuex from "vuex";

import { onSnapshot, collection } from "firebase/firestore";
// Example import for Firebase in Vue.js
// import { ref, get , database } from 'firebase/database';

import { db } from "@/firebase";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todos: [],
    profiles: [],
    chats: [],
    firebaseData:[],
    userLoggedIn:[]
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
    setUsers(state , user)
    {
      state.userLoggedIn=user;
    },
    // SET_CHAT_DETAILS(state, chatDetails) {
    //   // alert("alert from store  : " +chatDetails)
    //   state.profiles = chatDetails;

    //   // console.log('this is the profiles:  '+ chatDetails )
    // },
    // addNewMesseges(state, newMessage) {
    //   state.chats.push(newMessage);
    // },
    firebasedata(state, newMessage) {
      state.firebaseData = newMessage;
    },
    addMessage(state, newMessage) {
 
  console.log("hello"+ state + newMessage)
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
    userslogin( {commit} , user)
    {
      commit("setUsers" , user)

    },
    chattings({ commit }, items) {
      commit("setChatting", items);
    },
    addTodos() {
      const arrays2 = ["hello"];
      this.commit("newData", arrays2);
    },
    // chatListDetails({ commit }, chatDetails) {
    //   // Commit the mutation to update the state with chat details
    //   commit("SET_CHAT_DETAILS", chatDetails);
    // },
    // newChats({ commit }, newMessage) {
    //   commit("addNewMesseges", newMessage);
    // },
   

    // FirebaseData({ commit }, newChatsFirebase) {
    //   commit("firebasedata", newChatsFirebase);
    // },
    fetchFirebaseDatabase({ commit }) {
      const chatsRef = collection(db, "Chats");
       // Subscribe to changes in the 'chats' collection
      const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
        const newMessage =  snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Chat Data:", newMessage);
       
        commit("firebasedata", newMessage);
        
       
      });

      // To stop listening for changes when the component is destroyed
      this.beforeDestroy = unsubscribe;
    },
    sendMessageToFirebase( {commit } , messageData){
      commit('addMessage', messageData);
    },
   
  },
  getters: {
    counting: (state) => {
      return state.todos.products ? state.todos.products.length : 0;
    },
    getChatListDetails: (state) => state.profiles,
    getChats: (state) => state.chats,


    
    getFirebaseDataFromStore: (state) => state.firebaseData,
    ActiveUser: (state) => state.userLoggedIn,
    
  },

  // getters:{
  //     counting: (state) => {
  //         return state.todos.products.length;
  //     },

  // },
  
});
