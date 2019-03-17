<template>
  <md-content>
    <playlist-element v-for="playlist in playlists" v-bind:key="playlist.id" v-bind:playlist="playlist" ></playlist-element>
        <play-list-dialog-create></play-list-dialog-create>
  </md-content>
</template>

<script>
import PlaylistElement from '@/components/PlaylistElement';
import PlaylistDialogCreate from '@/components/PlaylistDialogCreate';

export default {
  name: 'PlaylistElementList',
  props: {
    playlists: Array
  },
  components: {
    'playlist-element': PlaylistElement,
    'play-list-dialog-create': PlaylistDialogCreate
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
