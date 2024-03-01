<template>
  <div class="messegeBox container p-2 border rounded bg-white" v-show="defaultControler" >
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
      :placeholder="
        chatListDetails && chatListDetails.name
          ? 'Message ' + chatListDetails.name
          : 'Jot something down'
      " v-model="newMessage"> </textarea>
   
  

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
       <i class="fa-solid fa-dove rounded-circle p-1 bg-dark " style="color:white; border:1px solid black"  @click="sendMessege()" ></i>

  
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
import { ref } from 'vue';
// import {firestore } from "@/firebase";


// import { auth } from "../firebase"
import { myMixin } from "../mixins";
export default {
  name: "MessegeBox",
  mixins:[myMixin],
  data() {
    return {
      user: null,
      newMessage: "",
      value:0
      // messages: [],

    };
  },
  methods: {
    handleFileChange(event) {
      // Handle the file change event here
      const selectedFile = event.target.files[0];
      console.log("Selected File:", selectedFile);
    },
      sendMessege()
    {
 
      this.$store.dispatch("newChats",this.newMessage);
      
   
    },
  //    scrollByPercentage(nvalue) {
  //     // Calculate the amount to scroll based on the viewport height
  //     const vh = window.innerHeight;
  //     alert("rinning")
  //     const scrollAmount = (nvalue+this.value / 100) * vh;
      
  // this.value=nvalue+this.value;
  //     // Scroll the page by the calculated amount
  //     window.scrollBy(0, scrollAmount);
  //   }
     

    //newly added
    //   signInWithGoogle() {

    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   auth.signInWithPopup(provider);

    //   alert(provider)
    // },
   
    // sendMessage() {},
     
      //newlyadded ends here
    
  },
  computed: {
      
    chatListDetails() {
  try {
    const chatListDetailsString = this.$store.getters.getChatListDetails;

    // Check if the string is empty before attempting to parse
    if (chatListDetailsString.trim() === '') {
      return {}; // Return a default value or handle the empty string case
    }

    return JSON.parse(chatListDetailsString);
  } catch (error) {
    // console.log('Error parsing JSON 4:', error);
    return {}; // Return a default value or handle the error appropriately
  }
},


    
  },

 watch: {
  'chatListDetails.name': {
    handler() {
      this.profileDefalut();
    },
    immediate: true, // This option will trigger the handler immediately after the component is created
  },
},

  // computed: {
  //  chatListDetails() {
  // try {
  //   const chatListDetailsString = this.$store.getters.getChatListDetails;
  //   console.log("this is the type  : " + JSON.parse(chatListDetailsString));

    // Check if the string is empty before attempting to parse
    // if (chatListDetailsString.trim() === '') {
    //   return {}; // Return a default value or handle the empty string case
    // }

  //   return chatListDetailsString;
  // } catch (error) {
  //   console.log('Error parsing JSON 4:', error);
  //   return {}; // Return a default value or handle the error appropriately
  // }
// },

  // },
  //   created() {
  //   auth.onAuthStateChanged((user) => {
  //     this.user = user;

  //     if (user) {
  //       firestore.collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
  //         this.messages = snapshot.docs.map((doc) => doc.data());
  //       });
  //     }
  //   });
  // },


};
</script>

<style scoped>
.messegeBox {
  /* position: fixed;
  width: 80%;
 
  bottom: 1rem; */
      position: fixed;
    width: 65%;
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
  color: black
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
