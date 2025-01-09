<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/NavBar/Navbar';
export default {
  components: { Navbar}
}
</script>

<style>
body {
  background: rgb(59, 58, 58);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e9e9e9;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
