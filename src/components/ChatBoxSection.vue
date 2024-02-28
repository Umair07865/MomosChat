<template>
    <div class="headerSection container-fluid border pt-2 pb-2 d-flex justify-content-between align-items-center" v-if="defaultControler"  >
            <span class="d-flex align-items-center " >
        <img :src="chatListDetails.Img" alt="loading"  >
        <div class="dropdown">
  <a class="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
   {{chatListDetails.name}}
  </a>

 <!--we need  a card here in this section--->
</div> 
</span>


<span class="d-flex  align-items-center canvasWrapper">
      <div class="dropdown dropdowntopChatList ">
  <a class="btn  dropdown-toggle p-1 border" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   <i class="fa-solid fa-headphones hundlerIcon "></i>
   
  </a>

 <!--we need  a card here in this section--->
</div> 

<div class="canvas border p-1 text-dark">
    <i class="fa-solid fa-notes-medical text-dark"></i>

    Canvas

</div>
</span>

    </div>
</template>


<script>
import { myMixin } from "../mixins"
export default {
    name:"ChatBoxSection",
    mixins:[myMixin],
   
    data()
    {
        return{
            defaultControler:""

        }
    },
    computed:{
      
  chatListDetails() {
    try {
      const chatListDetailsString = this.$store.getters.getChatListDetails;
      
      // Log the type of data (stringified JSON) you are dealing with
      console.log("Data type iss: " + typeof(chatListDetailsString));

      return chatListDetailsString;
    } catch (error) {
      console.log('Error getting chat details:', error);
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
}
</script>

<style scoped>
.headerSection img{
height: 1.5rem;
width: 1.5rem;
margin: 0;
border-radius: 5px;
}

.dropdowntopChatList a{
    border-radius: 10px;
}
.hundlerIcon{
padding : 0 10px;
    border-right: 1px solid gray;
}
.dropdown-toggle::after{
    margin-left: 0.7em;
}
.canvasWrapper{
    gap: 1.5rem;
}
.canvas{
      border-radius: 10px;
}
</style>