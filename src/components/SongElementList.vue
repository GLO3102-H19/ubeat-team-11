<template>
       <md-table v-model="users" md-sort="trackName" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Songs</h1>
      </md-table-toolbar>
         <md-table-row>
        <md-table-head>Title</md-table-head>
        <md-table-head>Time</md-table-head>
       
      </md-table-row>
      <song-element v-for="song in songs" v-bind:key="song.trackId" v-bind:song="song"></song-element>
    </md-table>
</template>
<script>
import SongELement from '@/components/SongElement';

export default {
  props: {
    songs: Array,
  },
  components: {
    'song-element': SongELement
  }
};
</script>
<style>

</style>
