<template>
  <div class="messegeBox container col-12 p-2 border rounded bg-white"  >
    <!---message header-->
    <div class="chatHeader topHeader d-flex p-1 align-items-center">
      <button
        type="button"
        class="btn"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Tooltip on top"
      >
        B
      </button>

      <button class="btn operators"><em>I</em></button>
      <button class="btn operators">§</button>
      <span class="dividerLine"></span>

      <i class="fa-solid fa-link operators"></i>
      <span class="dividerLine"></span>
      <i class="fa-solid fa-list-ol operators"></i>
      <i class="fa-solid fa-list operators"></i>
      <span class="dividerLine"></span>
      <i class="fa-solid fa-list-check operators"></i>
      <span class="dividerLine"></span>
      <i class="fa-solid fa-code operators"></i>
      <i class="fa-solid fa-terminal operators"></i>
    </div>
    <!---message box-->
    <textarea
      type="text"
      name="messagebox"
      id="msgBox"
      ref="msgBoxTextingControl"
      class=" border"
      @keyup.enter="sendMessageLocal"
    placeholder="Jot something down"
       v-model="newMessage"> </textarea>
   
     <!-- :placeholder="
        chatListDetails && chatListDetails.name
          ? 'Message ' + chatListDetails.name
          : 'Jot something down'
      " -->

    <!--file inserter-->
    <div class="inserter p-1 bg-white d-flex  align-items-center justify-content-between">
      <div class="chatHeader d-flex p-1 align-items-center">
        <label
          for="fileInput"
          class="fa-solid fa-plus operatorPlus m-0 operators text-black"
        >
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            class="form-control-file visually-hidden"
            @change="handleFileChange"
          />
        </label>

        <button class="btn operators"><u>Aa</u></button>
        <i class="fa-regular fa-face-smile operators"></i>

        <button class="btn operators">@</button>
        <span class="dividerLine operators"></span>
        <i class="fa-solid fa-video operators"></i>

        <i class="fa-solid fa-microphone operators"></i>
        <span class="dividerLine"></span>
        <button class="btn border operators">/</button>
      </div>
       <i class="fa-solid fa-dove rounded-circle p-1 bg-dark " style="color:white; border:1px solid black"   ></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { myMixin } from "../mixins";

export default {
  name: "MessegeBox",
  mixins: [myMixin],
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    ...mapActions(['signInWithGoogle', 'sendMessage', 'receiveMessages']),
    handleFileChange(event) {
      // Handle the file change event here
      const selectedFile = event.target.files[0];
      console.log("Selected File:", selectedFile);
    },
    // sendMessageLocal() {
    //   if (this.newMessage.trim() !== '') {
    //     const receiverId = 'OokGI6YCMzRdgKnr8r0iwBFtNHT2'; // Replace with the actual receiver's user ID
    //     const message = this.newMessage.trim();

    //     // Dispatch the sendMessage action from the Vuex store
    //     this.sendMessage({ receiverId, message });
    //     alert("passed from component"+ message)

    //     // Clear the input field after sending the message
      
    //     this.$store.dispatch("sendMessage",receiverId,message);
    //       this.newMessage = '';
    //   }
    // },e
    sendMessageLocal() {
  if (this.newMessage.trim() !== '') {
    const receiverId = 'OokGI6YCMzRdgKnr8r0iwBFtNHT2'; // Replace with the actual receiver's user ID
    const message = this.newMessage.trim();

    // Dispatch the sendMessage action from the Vuex store
  
    // Clear the input field after sending the message
    this.newMessage = '';
    alert("chek from component : " + message)
     this.$store.dispatch("sendMessage", {receiverId, message});

  }
},

    // ... Your other methods
  },
  mounted()
  {
    this.$store.dispatch("getAllMesseges");
  }
};

</script>

<style scoped>
.messegeBox {
  position: sticky;
  bottom: 1rem;
  right: 1rem;
}
#msgBox {
  width: 100%;
  overflow: hidden !important;
  padding: 1rem 1rem 0 1rem !important;
  overflow-y: scroll !important;
  border: none;
}
#msgBox:focus-visible {
  outline: none;
}
#msgBox::placeholder {
  color: rgba(10, 10, 10, 1.179) !important;
}
.chatHeader {
  gap: 1rem;
  color: black;
}
.topHeader {
  background-color: rgb(233, 233, 233);
  border-radius: 10px 10px 0 0;
}
.btn {
  font-size: small;
}
.dividerLine {
  border-left: 1px solid rgba(158, 158, 158, 0.39);
  height: 2rem;
}
.operators {
  cursor: pointer;
}
.operatorPlus {
  border-radius: 50%;
  padding: 9px;
  background-color: rgba(233, 233, 233);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
