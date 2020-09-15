<template>
  <div id="headr"> 
    <router-link :to="{name: 'root'}">
      <img src="~@/assets/cnodejs_light.svg" alt="">
    </router-link>

    <span>
      <a href="#">关于</a>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Headr'
  }
</script>

<style scoped>
  #headr {
    background-color: #5a5555;
    height: 50px;
  }
  
  img {
    width: 120px;
    margin: 10px 0 0 50px;
  }

  a {
    text-decoration: none;
    color: #cbc9c9;
  }

  span {
    float: right;
    margin: 10px 50px 0 0;
  }
</style>
