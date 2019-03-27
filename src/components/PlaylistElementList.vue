<template>
  <md-content>
    <playlist-element v-for="playlist in playlists" v-bind:key="playlist.id" v-bind:playlist="playlist" v-on:delete-playlist="deletethisPlaylist(playlist.id)" ></playlist-element>
  </md-content>
</template>

<script>
import PlaylistElement from '@/components/PlaylistElement';

export default {
  name: 'PlaylistElementList',
  props: {
    playlists: Array
  },
  components: {
    'playlist-element': PlaylistElement
  },
  methods: {
    deletethisPlaylist(index) {
      this.playlists.splice(index, 1);
    }
  }
};
</script>

<style scoped>
  .md-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow: auto;
  }

  .md-button {
    align-self: flex-end;
    justify-self: flex-end;
  }

  .md-card {
    margin: 0.5rem;
  }
</style>
