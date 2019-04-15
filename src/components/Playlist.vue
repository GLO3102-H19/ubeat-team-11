<template>
<main>
       <md-progress-bar v-if="progressStatus" class="md-accent" md-mode="query"></md-progress-bar>
  <song-playlist-element-list v-bind:playlistSongs="this.playlist.tracks" v-bind:playlistTitle="this.playlist.name" v-bind:playlistId="this.playlistId"></song-playlist-element-list>

</main>
</template>

<script>
import SongPlaylistElementList from '@/components/SongPlaylistElementList';
import * as api from '../api';

export default {
  name: 'Playlist',
  components: {
    'song-playlist-element-list': SongPlaylistElementList
  },
  data: () => ({
    playlist: {},
    playlistId: String,
    progressStatus: true
  }),
  async  beforeMount() {
    if (api.checkIfCookieIsAlive() === false) {
      this.$router.push({ name: 'Login' });
    }
  },
  async mounted() {
    this.playlist = await api.getPlaylistById(this.$route.params.id);
    this.playlistId = this.$route.params.id;
    this.progressStatus = false;
  }
};
</script>

<style scoped>

</style>
