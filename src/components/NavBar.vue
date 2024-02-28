<template>
  <div class="navigationBar container-fluid ">
    <div class="row d-flex navbarItemsWrapper ">
        <div class="col-4  p-2 align-items-center  d-flex justify-content-end innerWrapper">
            <i class="fa-solid fa-arrow-left navIcons"></i>
            <i class="fa-solid fa-arrow-right navIcons"></i>
            <i class="fa-regular fa-clock navIcons"></i>

        </div>
        <div class="col-7  p-2 ">
            <div class="d-flex align-items-center searchBarWrapper col-8 rounded">

      
             <i class="fas fa-search searchIcon"></i>
            <input type="search" name="search" id="search" class="DocSearch-Button-Placeholder  pl-2 pr-2 mb-0 flex-end  searchBar border-0 col" placeholder="Search Softsquare">
             </div>
        </div>
        <div class="col-1   ">

            <span class="p-2 d-flex align-items-center justify-content-end ">
                <i class="fa-solid fa-question questionIcon rounded-circle  text-white"></i>
            </span>
        </div>
    </div>
   
  </div>
</template>
<script>
export default {
    name:"NavBar"
}
</script>

<style>
.navigationBar{
   
    /* width: 100%; */
    /* border: 1px solid black; */
    color: white;
}
.innerWrapper{
    gap: 1rem;
}
.navIcons{
    font-size: 16px;
}
.searchBar{
    background:transparent;
    color: white;

}
.searchBar:focus-visible{
   border: none !important;
   outline: none !important;
    
}
.searchBar:active .searchIcon{
    display: none;
}

   input::placeholder {
      color: #fcfcfc; 
      font-size: 14px;
      
    
    }
    .searchBarWrapper{
       
        background-color: rgb(255 255 255 / 11%)!important;
       
    }
    .questionIcon{
        border: 2px solid rgb(249, 249, 249);
        padding:1px 3px;
        font-weight: bold;
        font-size: 14px;
       
        
        
        
    }
/* .navbarItemsWrapper{} */
</style>