<template>
  <main>
    <h1 class="md-display-1">New Albums</h1>
    <album-element-list v-bind:albums="newAlbums"></album-element-list>
    <h1 class="md-display-1">Popular Albums</h1>
    <album-element-list></album-element-list>
  </main>
</template>

<script>
import AlbumElementList from '@/components/AlbumElementList';

export default {
  components: {
    'album-element-list': AlbumElementList
  },
  data: () => ({
    newAlbums: [
      {
        id: 1,
        img: '/static/album-cover.png',
        title: 'Papillon',
        artist: 'Penis'
      },
      {
        id: 2,
        img: '/static/album-cover.png',
        title: 'Test2',
        artist: 'Joe Louis'
      }
    ]
  })
};
</script>


<style scoped>
</style>

