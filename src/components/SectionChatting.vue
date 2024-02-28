<template>
  <div
    class="outerWrapperChatting bg-Success text-dark bg-white"
    v-show="defaultControler"
    ref="chatContainer"
  >
    <ul class="p-0 m-0 chattingList">
      <li
        class="d-flex pl-2"
        v-for="(item, index) in chattingList"
        :key="index"
      >
        <img
          :src="chatListDetails.Img"
          alt="loading"
          class="profileImagesChats"
        />
        <span>
          <b>
            <h6 class="pl-2 mb-0 font-weight-bold">
              {{ chatListDetails.name }}
            </h6>
          </b>
          <p class="Messeges p-2 text-justify">kjk {{ item }}</p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { myMixin } from "../mixins";
export default {
  name: "SectionChatting",
  mixins: [myMixin],
  data() {
    return {
      items: [],
      newChatsFirebase: [],
    };
  },
  created() {
    this.fetchFirebaseDatabase();
  },
  computed: {
    chatListDetails() {
      try {
        const chatListDetailsString = this.$store.getters.getChatListDetails;
        // Check if the string is empty before attempting to parse
        if (chatListDetailsString.trim() === "") {
          return {}; // Return a default value or handle the empty string case
        }
        return JSON.parse(chatListDetailsString);
      } catch (error) {
        return {}; // Return a default value or handle the error appropriately
      }
    },
    chattingList() {
      return this.$store.getters.getChats;
    },
  },
  methods: {
    async fetchFirebaseDatabase() {
      const chatsRef = collection(db, "Chats");
       // Subscribe to changes in the 'chats' collection
      const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
        this.chats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Chat Data:", this.chats);
        this.newChatsFirebase = this.chats;
        this.$store.dispatch("FirebaseData", this.newChatsFirebase);
      });

      // To stop listening for changes when the component is destroyed
      this.$once("hook:beforeDestroy", unsubscribe);
    },
  },
  mounted() {
    this.$store.dispatch("chattings", this.items);
    //  this.scrollToBottom();
  },
  watch: {
    "chatListDetails.name": {
      handler() {
        this.profileDefalut();
      },
      immediate: true,
    },
  },
};
</script>

<style>
.outerWrapperChatting {
  /* border: 1px solid orange; */
  padding: 1rem;
  overflow-y: scroll;
  height: fit-content;

  text-align: initial;
}
ul {
  list-style: none;
}
.profileImagesChats {
  height: 3rem;
  width: 3rem;
  border-radius: 10px;
}
.Messeges {
  font-size: small;
}
.chattingList {
  padding-bottom: 12rem !important;
}
</style>
