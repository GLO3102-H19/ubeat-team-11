<template>
  <main>
    <h1 class="md-display-1">Play List</h1>
    <playlist-element-list></playlist-element-list>
  </main>
</template>

<script>
import PlaylistElementList from '@/components/PlaylistElementList';

export default {
  name: 'Playlists',
  components: {
    'playlist-element-list': PlaylistElementList
  }
};
</script>

<style scoped>
  main {
    padding: 2rem 4rem;
  }
</style>
