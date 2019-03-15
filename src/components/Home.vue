<template>
  <main>
    <h1 class="md-display-2">New Albums</h1>
    <album-element-list></album-element-list>
    <h1 class="md-display-2">Popular Albums</h1>
    <album-element-list></album-element-list>
  </main>
</template>

<script>
import AlbumElementList from '@/components/AlbumElementList';

export default {
  components: {
    'album-element-list': AlbumElementList
  }
};
</script>


<style scoped>
  .md-content {
  }
</style>

