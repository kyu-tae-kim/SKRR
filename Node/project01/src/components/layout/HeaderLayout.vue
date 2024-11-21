<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/binding">Binding</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/click">Event</router-link>
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/lifecyclehook">LifecycleHook</router-link> |
    <router-link to="/page">Page</router-link> |
    <router-link to="/slot">Slot</router-link> |
    <router-link to="/provide">Provide</router-link> |
    <router-link to="/custom">Custom</router-link> 
  </nav> -->

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" @click="goToMenu('/')">SKRR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="goToMenu('/')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('/provide')">Provide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/slot')">Slot</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/page')">Page</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/grid')">Grid</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/custom')">Custom</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/mixin')">Mixin</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/plugins')">Plugin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/todo')">Todo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="goToMenu('/apilogin')">ApiLogin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    methods: {
        goToMenu(path) {
            this.$router.push({path : path})
        }
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>