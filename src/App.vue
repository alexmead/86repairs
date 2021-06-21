<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Home />
  </div>
</template>

<!--
<script>
  function printList() {
      let list = []
      for (let value of ['a', 'b']) {
        list.push(value)
      }
      return list 
  }
</script>
--> 
<!-- let printList = printList() -->

<script>
import Home from "./components/Home.vue";




export default {
  name: "App",
  components: {
    Home, 
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
