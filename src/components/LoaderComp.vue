<template>
    <div class="text-center loader" v-show="loaderController">

      <!-- <i class="fa-solid fa-gear fa-spin loaderIcon"></i> -->
  <div class="spinner-border loaderIcon " role="status">
  
  </div>
</div>
</template>
<script>
export default {
    name:"LoaderComp",
    data()
    {


        return { 
            loaderController:"true"


        }
    },
    methods:{
        loaderFunction()
        {
           
            setTimeout(() => {
            this.loaderController=!this.loaderController;
                
            }, 2000);
        }
    },
    mounted(){
        this.loaderFunction()
      
    }
}
</script>

<style scoped>
.loader{
   
   
   background-color: rgba(111, 54, 122, 0.398);
  
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    z-index: 100;
   
    justify-content: center;
    align-items: center;
 
    
    

}
.loaderIcon{
    color:rgb(111, 54, 122);
    font-size: 8rem;
     background-color: white;
}
</style>