<template>
    <div class="bookmark border p-2 pl-3 pr-3  text-dark" >
       <i class="fa-solid fa-plus  "></i> Add a bookmark

    </div>
</template>
<script>
import { myMixin } from "../mixins";
export default {
    name:"BookMark",
    mixins:[myMixin],
    data()
    {

        return{
            defaultControler:""
        }
    },
      computed: {
    chatListDetails() {
  try {
    const chatListDetailsString = this.$store.getters.getChatListDetails;

    // Check if the string is empty before attempting to parse
    // if (chatListDetailsString.trim() === '') {
    //   return {}; // Return a default value or handle the empty string case
    // }

    return JSON.parse(chatListDetailsString);
  } catch (error) {
    // console.log('Error parsing JSON 4:', error);
    return {}; // Return a default value or handle the error appropriately
  }
},

    
  },
//      watch: {
//   'chatListDetails.name': {
//     handler() {
//       this.profileDefalut();
//     },
//     immediate: true, // This option will trigger the handler immediately after the component is created
//   },
// },
}
</script>

<style scoped>
.bookmark{
    text-align: initial;
}
</style>