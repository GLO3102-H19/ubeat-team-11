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
import axios from 'axios';

export default {
  components: {
    'album-element-list': AlbumElementList,
    'playlist-element-list': PlaylistElementList
  },
  data: () => ({
    newAlbums: [],
    newPlaylist: []
  }),
  mounted() {
    axios
      .get('http://ubeat.herokuapp.com/unsecure/search/albums?q=metallica')
      .then(response => (
        this.newAlbums = response.data.results.map(item => ({
          collectionId: item.collectionId,
          collectionName: item.collectionName,
          artistName: item.artistName,
          artworkUrl100: item.artworkUrl100
        }))
      ))
      .catch(error => console.log(error));
  }
};
</script>


<style scoped>
</style>

