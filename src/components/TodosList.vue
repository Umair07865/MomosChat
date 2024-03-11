

<template>
  <div>
    <navigationBar/>
  </div>
</template>
<script>
import navigationBar from "../components/NavBar.vue"
export default {
  name: "TodosList",
  components:{
    navigationBar
  },
  // methods:{ 
  //       addingArrays()
  //       {
  //            this.$store.dispatch("addTodos");
          
  //       },  
  // },
  // computed: {
  //   mystoreItems() {
  //     return this.$store.state.todos.products;
  //   },
  //   calculateMyData()
  //   {  
  //       return this.$store.getters.counting;
  //   }
  // },
// now the first step is to despatch to the action
  // mounted()
  // {
  //   this.$store.dispatch("fetchTodos");
  // },
    // watch: {
    // 'mystoreItems.length'(newValue) {
    //   console.log('Todos array changed:', newValue);
    //   // You can perform additional actions here if needed
    // },
//     deep:true
//   },
};
</script>

<style scoped>
body{
background: linear-gradient(to bottom, #6f367a, #481d4d);

}
</style>
