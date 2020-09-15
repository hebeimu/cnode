<template>
  <div id="app">
    <headr/>
    <router-view name="main"/>
    <!-- <router-view name="sidebar"> -->
  </div>
</template>

<script>
  import Headr from './components/Headr'
  export default {
    name: 'App',
    components: {
      Headr
    }
  }
</script>

<style>
  html {
    background-color: #DDDDDD;
	}
  #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     font-size: 20px;
  }
  body,div,span,a,p,ul,li {
	  margin: 0;
	  padding: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
</style>
