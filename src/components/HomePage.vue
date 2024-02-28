<template>
  <div>
<!-- <LoaderComp/> -->
   <TodosList/>
   <GridSystem/>
   <SkeletonLoader />
  
  </div>
</template>

<script>
import TodosList from "./TodosList.vue"
import GridSystem from "./GridSytem.vue"

// import LoaderComp from "./components/LoaderComp.vue"
import SkeletonLoader from "./SkeletonLoader.vue"

export default {
  name: 'HomePage',
  
  components: {
    TodosList,
    GridSystem,
    // LoaderComp,
    SkeletonLoader
    

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}

</style>
