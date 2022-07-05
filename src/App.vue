<template>
  <router-view></router-view>
</template>

<style lang="scss">
  
  @import "~bulma/bulma.sass";

  html{
    overflow: auto;
  }

  .container {
    margin-top: 30px;
      
    .notification {
      text-align: center;
    }   
  }

  .size-24{
    font-size: 24px
  }

  .title{
    text-align: center;
  }

  .table th:not([align]) {
    text-align: center;
  }

</style>
