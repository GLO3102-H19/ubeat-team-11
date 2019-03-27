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

    <song-playlist-element v-for="item in playlistSongs" v-bind:key="item._id" v-bind:playlistSong="item" v-bind:playlistId="playlistId" v-on:delete-track="deleteThisTrack(item._id)"></song-playlist-element>


  </md-table>
</template>

<script>
import SongPlaylistElement from '@/components/SongPlaylistElement';


export default {
  name: 'SongPlaylistElementList',
  props: {
    playlistSongs: Array,
    playlistTitle: '',
    playlistId: ''
  },
  components: {
    'song-playlist-element': SongPlaylistElement
  },
  methods: {
    deleteThisTrack(index) {
      this.playlistSongs.splice(index, 1);
    }
  }
};
</script>

<style scoped>

</style>
