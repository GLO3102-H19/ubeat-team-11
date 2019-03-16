<template>
  <main>
    <h1 class="md-display-1">Play List</h1>
    <playlist-element-list v-bind:playlists="newPlaylist"></playlist-element-list>
    <h1 class="md-display-1">Albums</h1>
    <album-element-list v-bind:albums="newAlbums"></album-element-list>
  </main>
</template>

<script>
import AlbumElementList from '@/components/AlbumElementList';
import PlaylistElementList from '@/components/PlaylistElementList';

export default {
  components: {
    'album-element-list': AlbumElementList,
    'playlist-element-list': PlaylistElementList
  },
  data: () => ({
    newAlbums: [
      {
        id: 1,
        img: '/static/album-cover.png',
        title: 'Papillon',
        artist: 'Island'
      },
      {
        id: 2,
        img: '/static/album-cover.png',
        title: 'Test2',
        artist: 'Joe Louis'
      }
    ],
    newPlaylist: [
      {
        id: 1,
        title: 'Test'
      },
      {
        id: 2,
        title: 'Test2'
      }
    ]
  })
};
</script>


<style scoped>
</style>

