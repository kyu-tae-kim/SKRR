<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LayOutVue />
  </div>
</template>

<script>
import LayOutVue from '../components/LayOut.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    LayOutVue
  }
}
</script>
