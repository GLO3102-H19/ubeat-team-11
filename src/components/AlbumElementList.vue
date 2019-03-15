<template>
  <md-content>
    <album-element img="/static/album-cover.png"></album-element>
    <album-element></album-element>
    <album-element></album-element>
    <album-element></album-element>
    <album-element></album-element>
    <album-element></album-element>
  </md-content>
</template>

<script>
import AlbumElement from '@/components/AlbumElement';

export default {
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
