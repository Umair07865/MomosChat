import Vue from "vue";

import Vuex from "vuex";

import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
// Example import for Firebase in Vue.js
// import { ref, get , database } from 'firebase/database';

import { db } from "@/firebase";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    profiles: [],
    chats: [],
    firebaseData: [],
    userLoggedIn: [],
    messages: [],
    user: [],
    allMesseges: [],
    filteredChats:"",

    activeLoogedInUser: [],
  },
  mutations: {
    ///this is the active user logged in user data
    activeUsers(state, user) {
      state.activeLoogedInUser = user;
    },
    gettingAllmesseges(state, Allmesseges) {
      state.allMesseges.push(Allmesseges);
      // alert(typeof(state.allMesseges[0].messaging))
    },

    ///logged in user ends here
    //step 4 here we are do changes with the store

    // setChatting(state, items) {
    //   state.chats = items;
    // },
    newData(state, newItem) {
      state.todos.products.push(newItem);
      // state.todos=[...state.todos, ...newItem]
    },
    setUsers(state, user) {
      state.userLoggedIn = user;
    },
    setChatUnsubscribe(state, unsubscribe) {
      state.chatUnsubscribe = unsubscribe;
    },
    // SET_CHAT_DETAILS(state, chatDetails) {
    //   // alert("alert from store  : " +chatDetails)
    //   state.profiles = chatDetails;

    //   // console.log('this is the profiles:  '+ chatDetails )
    // },
    // addNewMesseges(state, newMessage) {
    //   state.chats.push(newMessage);
    // },s
    firebasedata(state, users) {
      state.firebaseData = users;
    },
    // addMessage(state, newMessage) {
    //   console.log("hello" + state + newMessage);
    // },
    ////sending and recieving data

    setMessages(state, messages) {
      state.messages = messages;
    },
    addMessage(state, payload) {
      // alert("passed from mutation: " + newMessage )
      state.messages.push(payload.newMessage);
      state.allMesseges.push(payload.staticmessage);
    },
    singleChats(state, payload) {
      // Assuming each message has senderId and receiverId to compare against
      const allowedIds = [payload.user, payload.admin];
    
      // Filter messages where either senderId or receiverId matches allowedIds
      const filteredMessages = state.allMesseges[0].filter(message =>
        allowedIds.includes(message.sender) || allowedIds.includes(message.receiver),
     
      );
    
      // Update state with filtered messages
      state.filteredChats = filteredMessages;
      
      console.log("Filtered Messages: ", filteredMessages);
      

    }
    

    ////sending and recieving data endds here
  },
  actions: {
    // second step to fetch data and store it in the variable

    userslogin({ commit }, user) {
      commit("setUsers", user);
    },
    chattings({ commit }, items) {
      commit("setChatting", items);
    },
    addTodos() {
      const arrays2 = ["hello"];
      this.commit("newData", arrays2);
    },

    fetchFirebaseDatabase({ commit }) {
      const chatsRef = collection(db, "users");
      // Subscribe to changes in the 'chats' collection
      const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Chat Datas:", users);

        commit("firebasedata", users);
      });

      // To stop listening for changes when the component is destroyed
      this.beforeDestroy = unsubscribe;
    },
    // sendMessageToFirebase({ commit }, messageData) {
    //   commit("addMessage", messageData);
    // },
    // firebase messege sending and recievning starts from here

    async receiveMessages({ commit, rootState }) {
      const userId = rootState.user ? rootState.user.uid : null;

      // Ensure we have a logged-in user before attempting to receive messages
      if (userId) {
        const chatUnsubscribe = onSnapshot(
          collection(db, "chats").where("receiver", "==", userId),
          (snapshot) => {
            const messages = [];
            snapshot.forEach((doc) => {
              messages.push({ id: doc.id, ...doc.data() });
            });
            console.log("this is from the reieve messeges : " + messages);
            commit("setMessages", messages);
          }
        );

        // Save the unsubscribe function to be used when needed (e.g., component destruction)
        commit("setChatUnsubscribe", chatUnsubscribe);
      }
    },

    ////

    // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

    // Assuming `db` is your Firestore database instance

    // async sendMessage(commit,receiverId, message) {
    async sendMessage({ commit }, data) {
      try {
        const senderId = JSON.parse(localStorage.getItem("users")).uid;
        // const senderId = user ? user.uid : null;
        // alert("checking user : " + senderId + "  messeges is :: " +  data.message + "recieverid :  " + data.receiverId)
        // // Ensure we have a logged-in user before attempting to send a message
        if (senderId) {
          const chatsCollection = collection(db, "Allmesseges");
          // alert("yes sender id okey : " )
          const newMessageRef = await addDoc(chatsCollection, {
            sender: senderId,
            receiver: data.receiverId,
            messaging: data.message,
            timestamp: serverTimestamp(),
          });

          const newMessage = {
            id: newMessageRef.id,
            sender: senderId,
            receiver: data.receiverId,
            message: data.message,
            timestamp: new Date(),
          };

          const staticmessage = data.message;
          console.log("Sender messages:", newMessage);
          commit("addMessage", { newMessage, staticmessage });
          // commit("addMessage2", data.message);
        } else {
          console.error("Error: Sender ID not available");
        }
      } catch (error) {
        console.error("Error sending message:", error.message);
        // alert("Error sending message");
      }
    },
    getAllMesseges({ commit }) {
      const chatsRef = collection(db, "Allmesseges");
      // Subscribe to changes in the 'chats' collection
      const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
        const Allmesseges = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const sortedData = Allmesseges.sort(
          (a, b) => a.timestamp - b.timestamp
        );

        console.log("all messages:", sortedData);

        commit("gettingAllmesseges", sortedData);
      });

      // To stop listening for changes when the component is destroyed
      this.beforeDestroy = unsubscribe;
    },
    oneToOneChat({ commit }, payload ) {

      const user = payload.userid;
      // alert("oneToOneChat user id  : " + payload.)
      const admin = payload.adminid;
      commit("singleChats", { user, admin });
    },

    /////

    // async receiveMessages({ state, commit }) {
    //   // Call the receiveMessages function from step 5
    //   // Update the store with received messages
    //   receiveMessages(userId, (messages) => {
    //     commit('setMessages', messages);
    //   });
    // },

    //firebase messeges endsing here

    //active user important

    activeUser({ commit }, user) {
      // alert("this is the user : " + user)
      commit("activeUsers", user);
    },

    ///active user ends
  },
  getters: {
    getChatListDetails: (state) => state.profiles,
    getChats: (state) => state.chats,

    getFirebaseDataFromStore: (state) => state.firebaseData,
    ActiveUser: (state) => state.userLoggedIn,
    allmesseges: (state) => state.messages,
    Gettingallmesseges: (state) => state.allMesseges[0],
    filteredChats: (state) => state.filteredChats,

    
  },

  // getters:{
  //     counting: (state) => {
  //         return state.todos.products.length;
  //     },

  // },
});
