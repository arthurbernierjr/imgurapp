<template lang="html">
<div>
  <div class="upload-form">
  <input type="file" @change="uploadImages($event.target.files)"
    multiple
    accept="image/*"
  />
  <span class="upload-form--text" v-if="imagePresent"> Please Wait While We Upload Your Images</span>
  <span v-else class="upload-form--text">Drag Files Here</span>
  </div>
  <ImageList />
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ImageList from './ImageList';
export default {
  name: 'UploadForm',
  computed: mapGetters(['imagePresent']),
  methods: mapActions(['uploadImages']),
  components:{
    ImageList
  }
}
</script>

<style lang="css" scoped>
.upload-form{
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px dashed red;
  position: relative;
}
.upload-form:hover{
  background-color: #eee;
}
input{
  width: 100%;
  height: 30vh;
  position: absolute;
}
.upload-form--text{
  font-size: 4rem;
}
</style>
