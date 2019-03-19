<template>
  <md-table md-card>
    <md-table-toolbar>
      <h1 class="md-title">{{this.playlistTitle}}</h1>
    </md-table-toolbar>

    <md-table-row>
      <md-table-head>Name</md-table-head>
      <md-table-head></md-table-head>
      <md-table-head>Time</md-table-head>
      <md-table-head>Artist</md-table-head>
      <md-table-head>Album</md-table-head>
    </md-table-row>

    <song-playlist-element v-for="playlistSong in playlistsongs" v-bind:key="playlistSong._id" v-bind:playlistSong="playlistSong"></song-playlist-element>


  </md-table>
</template>

<script>
import SongPlaylistElement from '@/components/SongPlaylistElement';

export default {
  name: 'SongPlaylistElementList',
  props: {
    playlistsongs: Array,
    playlistTitle: ''
  },
  components: {
    'song-playlist-element': SongPlaylistElement
  }
};
</script>

<style scoped>

</style>
