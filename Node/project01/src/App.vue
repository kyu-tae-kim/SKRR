<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- <router-link to="/binding">Binding</router-link> |
    <router-link to="/calculator">Calculator</router-link> | -->
    <!-- <router-link to="/click">Event</router-link> -->
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <!-- <router-link to="/lifecyclehook">LifecycleHook</router-link> | -->
    <router-link to="/page">Page</router-link> |
    <router-link to="/slot">Slot</router-link> |
    <router-link to="/provide">Provide</router-link> |
    <router-link to="/custom">Custom</router-link> 
    

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
