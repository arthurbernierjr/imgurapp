<template lang="html">
  <div class="ui secondary pointing menu">
  <a class="active item">
    Image Upload
  </a>

  <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
          <router-link class="item" to="/">Galleries</router-link>
          <router-link class="item" to="/upload">Upload</router-link>
          <a class="item" href="#" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>

  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: mapActions(['login','logout']),
  computed: mapGetters(['isLoggedIn'])
}
</script>

<style scoped lang="css">
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
