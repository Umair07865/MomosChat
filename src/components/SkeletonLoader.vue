<!-- Loader.vue -->
<template>
  <div v-if="showLoader" class="loader-overlay d-flex flex-column">
     <!-- <custom-component duplicate-attribute="value" duplicate-attribute="value2" /> -->
    <div class="skeletonWrapper">
    <VueSkeletonLoader type="rectangle" :width="180" :height="30" animation="fade" class="skeletonLoaders" />
    <VueSkeletonLoader type="rectangle" :width="110" :height="30" animation="fade" class="skeletonLoaders" />
    <VueSkeletonLoader type="rectangle" :width="140" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="120" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="150" :height="30" animation="fade" class="skeletonLoaders" />

    <VueSkeletonLoader type="rectangle" :width="100" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="150" :height="30" animation="fade" class="skeletonLoaders" />
    <VueSkeletonLoader type="rectangle" :width="150" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="170" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="120" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="130" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="150" :height="30" animation="fade" class="skeletonLoaders"/>

    <VueSkeletonLoader type="rectangle" :width="130" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="130" :height="30" animation="fade" class="skeletonLoaders"/>
      <VueSkeletonLoader type="rectangle" :width="230" :height="30" animation="fade" class="skeletonLoaders"/>
    <VueSkeletonLoader type="rectangle" :width="180" :height="30" animation="fade" class="skeletonLoaders" />
    <VueSkeletonLoader type="rectangle" :width="200" :height="30" animation="fade" class="skeletonLoaders" />
    <VueSkeletonLoader type="rectangle" :width="200" :height="30" animation="fade" class="skeletonLoaders"/>
      <VueSkeletonLoader type="rectangle" :width="200" :height="30" animation="fade" class="skeletonLoaders"/>
      
    
    </div>

    <div class="SkeletonHeader">
       <VueSkeletonLoader type="rectangle" :width="250" :height="45" animation="fade" class="skeletonLoadersHeader " />
        <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader ml-5" />
         <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader" />
    </div>

    <div class="skeletonSideBarLoader">
      <span>
        <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader  " />
         <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader mt-3" />
         <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader  mt-5" />
         <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader mt-4" />
         <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader  mt-5" />
         
      </span>
      <span>
        <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader mb-3 " />
         <VueSkeletonLoader type="circle" :width="50" :height="50" animation="fade" class="skeletonLoadersHeader" />
      </span>
    </div>

    <div class="mainLoader">
       <VueSkeletonLoader type="rectangle" :width="1010" :height="200" animation="fade" class="skeletonLoaderschat rounded" />
    </div>
     <div class="mainLoaderCenter">
       <VueSkeletonLoader type="circle" :width="400" :height="400" animation="fade" class="skeletonLoaderschat " />
    </div>

  </div>
</template>

<script>
import VueSkeletonLoader from 'skeleton-loader-vue';

export default {
    name:"SkeletonLoader",
  components: {
    VueSkeletonLoader,
  },
  data() {
    return {
      showLoader: false,
    };
  },
  created() {
    // Listen for global events to show/hide the loader
    this.$bus.$on('show-loader', this.showLoaderHandler);
    this.$bus.$on('hide-loader', this.hideLoaderHandler);
  },
  methods: {
    showLoaderHandler() {
      this.showLoader = true;
    },
    hideLoaderHandler() {
      this.showLoader = false;
    },
    fetchData(){
      // Show loader
      this.$bus.$emit('show-loader');

      // Simulate an asynchronous operation
      setTimeout(() => {
        // Hide loader after the operation is complete
        this.$bus.$emit('hide-loader');
      }, 4000);
    }

  },
  mounted(){
     this.fetchData();
  }
};
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(255, 255, 255, 0.7); */
  background-color:  rgb(111, 54, 122);;
  display: flex;
  justify-content: initial;
  align-items: initial;
  z-index: 9999;
  gap: 1rem;
}
.skeletonWrapper{
       display: flex;
    position: absolute;
    flex-direction: column;
    gap: 4px;
    top: 8rem;
    left: 10rem;

}
.SkeletonHeader{
     display: flex;
    position: absolute;
    height: 5rem;
    width: 25%;
  
    gap: 4px;
    top: 3rem;
    left: 8.5rem;
    /* background-color: rgba(255, 166, 0, 0.262); */

}
.skeletonSideBarLoader{
  position:absolute;
  left: 3rem;
  top:3rem;
  display: flex;
  height: 90%;
  flex-direction: column;
  /* border: 1px solid orange; */
  justify-content: space-between;
}
.mainLoader{
  position: absolute;
  bottom: 3rem;
  border-radius: 10px;
  

  left: 35%;

}
.mainLoaderCenter{
  position: absolute;
  left: 50%;
  top: 10%;
  
}
</style>
