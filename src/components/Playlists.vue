<template>
  <main>
    <h1 class="md-display-1">Play List</h1>
    <playlist-element-list v-bind:playlists="playlists"></playlist-element-list>
  </main>
</template>

<script>
import PlaylistElementList from '@/components/PlaylistElementList';
import Axios from 'axios';

export default {
  name: 'Playlists',
  components: {
    'playlist-element-list': PlaylistElementList
  },
  data: () => ({
    playlists: Array
  }),
  mounted() {
    Axios
      .get('http://ubeat.herokuapp.com/unsecure/playlists')
      .then((response) => { console.log(response); return response; })
      .then(response => (this.playlists = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
  main {
    padding: 2rem 4rem;
  }
</style>
