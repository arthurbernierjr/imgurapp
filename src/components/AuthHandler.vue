<template lang="html">
  <div class="">
    Please Wait
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created(){
    // lifecycle method
    this.finalizeLogin(window.location.hash);
  }
}
</script>

<style lang="css">
</style>
