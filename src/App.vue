<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <codemirror-c></codemirror-c>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import codemirrorC from './components/codemirrorC'

export default {
  name: 'App',
  components: {
    codemirrorC
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0 !important;
}
</style>
