<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.svg">
    <p>
      <router-link to='/'>Home</router-link> || 
      <router-link to='/page'>Work</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
