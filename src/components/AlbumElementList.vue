<template>
  <md-content>
    <album-element v-for="album in albums" v-bind:key="album.collectionId" v-bind:album="album" ></album-element>
  </md-content>
</template>

<script>
import AlbumElement from '@/components/AlbumElement';

export default {
  name: 'AlbumElementList',
  props: {
    albums: Array
  },
  components: {
    'album-element': AlbumElement
  }
};
</script>

<style scoped>
  .md-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow: auto;
  }

  .md-card {
    margin: 0.5rem;
  }
</style>
