<template>
  <div>
    <div v-if="user">
      <div v-for="message in messages" :key="message.id">
        {{ message.user }}: {{ message.text }}
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message" />
    </div>
    <div v-else>
      <button @click="signInWithGoogle" type="button" name="button">Sign In with Google</button>
    </div>
  </div>
</template>

<script>
import { GoogleAuthProvider } from "firebase/auth";
import {auth, firebase} from "../firebase";

export default {
  name: "GoogleSignup",
  data() {
    return {
      user: null,
      newMessage: "",
      messages: [],
    };
  },
  methods: {
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await auth.signInWithPopup(provider);
        // Handle successful sign-in
        // console.log(this.signInWithGoogle)
        alert(result.user);
     
      } catch (error) {
        console.log("this is the messege : " + error.message + auth);
        // Handle errors
        alert("this is the messege : " + error.message + auth);
        
      }
    },
    // sendMessage() {
    //   // Your sendMessage logic here
    //    if (this.newMessage.trim() === "") return;

    //   firestore.collection("messages").add({
    //     user: this.user.displayName,
    //     text: this.newMessage,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   });

    //   this.newMessage = "";
    // },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.user = user;

      if (user) {
        firebase.firestore().collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
          this.messages = snapshot.docs.map((doc) => doc.data());
        });
      }
    });
  },
};
</script>
