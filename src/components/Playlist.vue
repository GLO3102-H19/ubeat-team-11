<template>
  <song-playlist-element-list v-bind:playlistSongs="this.playlist.tracks" v-bind:playlistTitle="this.playlist.name" v-bind:playlistId="this.playlistId"></song-playlist-element-list>
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
    playlistId: String
  }),
  async mounted() {
    this.playlist = await api.getPlaylistById(this.$route.params.id);
    this.playlistId = this.$route.params.id;
    console.log(this.playlistId);
  }
};
</script>

<style scoped>

</style>
