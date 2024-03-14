<template>
  <div
    class="outerWrapperChatting bg-Success text-dark bg-white"
    ref="chatContainer"
  >
    <ul class="p-0 m-0 chattingList">
      <li
        class="d-flex pl-2 pt-5"
        v-for="(messege, index) in Messegelist"
        :key="index"
      >
        <img
          :src="
            messege.profileImage
              ? ''
              : 'https://ca.slack-edge.com/TGFFD750S-U049NKVSRUH-g1ebd9252638-512'
          "
          alt="loading"
          class="profileImagesChats"
        />
        <span>
          <b class="d-flex">
            <h6 class="pl-2 mb-0 font-weight-bold mr-5">
              <!-- Display sender's name or any other identifier -->
              {{ username }}
            </h6>
            <div class="text-success flex-end">
              {{ Math.floor(messege.timestamp.seconds) % 60 }} mins
            </div>
          </b>
          <p class="Messeges p-2 text-justify">{{ messege.messaging }}</p>
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
  props:['username'],
  data() {
    return {
      items: [],
      newChatsFirebase: [],
      previousMessages:null
    };
  },
 
  methods:{
      scrollToBottom() {
      // Using Vue.nextTick to ensure the DOM has updated before scrolling
      
      this.$nextTick(() => {
        const container = this.$refs.chatContainer;
        container.scrollTop = container.scrollHeight;
      });
    },
     userinfo()
  {
    alert("yes")
   console.log( "this is the user id  :: "  + this.Messegelist.id);

  },

  },
 
   mounted(){
        this.scrollToBottom();
        this.userinfo;

  },

  computed: {
    Messegelist() {
      return this.$store.getters.filteredChats;
    },
  },

  
    watch: {
    messages() {
      this.scrollToBottom();
    }
  }

};
</script>

<style scoped>
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
ul li{
  border-bottom: 1px solid gray;
}
.Messeges {
  font-size: small;
}
.chattingList {
  padding-bottom: 12rem !important;
}
</style>
