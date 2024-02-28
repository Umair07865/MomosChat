<template>
  <div class="userProfile" v-if="defaultControler">
    <div class="wrapper d-flex justify-content-start align-items-center">
      <img :src="chatListDetails.Img" alt="Loading" class="profileImages" />
      <div class="ProfileInfo pl-4 pr-4">
        <h6 class="m-0">
          <b> {{ chatListDetails.name }} </b>
        </h6>
        <p class="m-0">{{ chatListDetails.occopation }}</p>
        <p class="m-0">{{ chatListDetails.sudo }}</p>
      </div>
    </div>

    <span class="ProfileViewWrapper p-2 text-dark">
      <p>
        This conversation is just between
        <a href="#"> @{{ chatListDetails.name }}</a> and you. Check out their
        profile to learn more about them.
      </p>

      <button type="button" class="btn border">View Profile</button>

      <div
        class="offers border rounded p-2 mt-5 d-flex justify-content-between align-items-center text-dark"
      >
        <div class="offersWrapper">
          <h6 class="font-weight-bold">
            Unlock all of your team’s hidden messages and files
            <span class="badge">PRO</span>
          </h6>

          <p class="m-0">
            On the free version of Slack, messages and files older than 90 days
            are hidden.
          </p>
        </div>

        <button
          type="button"
          class="btn border LearnMoreBtn text-white font-weight-bold"
        >
          Learn More
        </button>
      </div>
    </span>
  </div>
</template>
<script>

import { myMixin } from "../mixins";

export default {
  name: "chatBoxProfile",
  mixins:[myMixin],
  data() {
    return {
      defaultControler: "",
      chatlistString:""

    };
  },
  // methods: {
  //   profileDefalut() {
  //     if (!this.chatListDetails.name) {
  //       alert("Running");
  //       this.defaultControler = false;
  //     } else {
  //       // alert("Error: " + this.chatListDetails.name);
  //       this.defaultControler = true;
  //     }
  //   },
  // },

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


};
</script>

<style scoped>
/* .wrapper {
  padding-top: 9rem;
} */
.wrapper img {
  height: 7rem;
  width: 7rem;
}
.ProfileInfo {
  text-align: initial;
}
p {
  text-align: initial;
}
.ProfileViewWrapper {
  display: flex;
  justify-content: initial;
  flex-direction: column;
}
.btn {
  width: 8rem;
}
.offersWrapper {
  text-align: initial;
}
.offersWrapper h6 span {
  background-color: rgb(111, 54, 122);
  color: white;
}
.offers {
  background-color: rgb(243, 237, 229);
}
.LearnMoreBtn {
  background-color: rgb(1, 105, 1);
  height: 2.5rem;
}
.userProfile {
  padding: 1rem;
}
.profileImages {
  border-radius: 10px;
}
</style>
