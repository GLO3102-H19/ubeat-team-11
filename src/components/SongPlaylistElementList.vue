<template>
  <md-table md-card>
    <md-table-toolbar>
      <h1 class="md-title">Playlist</h1>
    </md-table-toolbar>

    <md-table-row>
      <md-table-head>Name</md-table-head>
      <md-table-head></md-table-head>
      <md-table-head>Time</md-table-head>
      <md-table-head>Artist</md-table-head>
      <md-table-head>Album</md-table-head>
    </md-table-row>

    <song-playlist-element></song-playlist-element>
    <song-playlist-element></song-playlist-element>
    <song-playlist-element></song-playlist-element>
    <song-playlist-element></song-playlist-element>
    <song-playlist-element></song-playlist-element>
    <song-playlist-element></song-playlist-element>

  </md-table>
</template>

<script>
import SongPlaylistElement from '@/components/SongPlaylistElement';

export default {
  name: 'SongPlaylistElementList',
  components: {
    'song-playlist-element': SongPlaylistElement
  }
};
</script>

<style scoped>

</style>
