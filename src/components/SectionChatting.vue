<template>
  <div
    class="outerWrapperChatting bg-Success text-dark bg-white"
 
    ref="chatContainer"
  >
    <ul class="p-0 m-0 chattingList">
      <li
        class="d-flex pl-2"
        v-for="(item, index) in firebaseData"
        :key="index"
      >
        <img
          :src="item.profileImage"
          alt="loading"
          class="profileImagesChats"
        />
        <span>
          <b>
            <h6 class="pl-2 mb-0 font-weight-bold">
             
                 {{ item.name}}
            </h6>
          </b>
          <p class="Messeges p-2 text-justify">{{ item.messegeLast }}</p>
        </span>
      </li>

      
      
    </ul>
  </div>
</template>

<script>

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
    firebaseData() {
       return this.$store.getters.getFirebaseDataFromStore;
    },
  },
//  created()
//  {
//    this.$store.dispatch("fetchFirebaseDatabase");
    
//  },
   mounted() {
    this.$store.dispatch('fetchFirebaseDatabase');
   
  },
 
  // mounted() {
  //   this.$store.dispatch("chattings", this.items);
    //  this.scrollToBottom();
//    const dbRef = ref(database, 'Chats/Messeges');

// get(dbRef).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

  // },
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
