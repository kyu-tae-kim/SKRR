<template>
  <div>
    <h1>사용자 : {{ userName }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
    data ( ){
        return{
            userName : 'PieterKim',
            msg : 'Hello Welcome Mysite'
        }
    }
}
</script>

<style>

</style>