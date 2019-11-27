<template lang="html">
  <div v-if="isLoggedIn" class="image-list">
    <img class="img" v-for="image in allImages" :src="image.link" alt=""/>
  </div>
  <center v-else>
    <h2>
    Log in to get started
    </h2>
  </center>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name:'ImageList',
  computed: mapGetters(['allImages','isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created(){
    this.fetchImages();
  }
}
</script>

<style lang="css">
.image-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 90vh;
  width: 50vw;
  margin: 5vh auto;
  align-content: space-around;
}
.img{
  height:10rem;
  width: 10rem;
}
</style>
