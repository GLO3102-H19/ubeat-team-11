<template>
  <md-content>
    <playlist-element v-for="playlist in playlists" v-bind:key="playlist.id" v-bind:playlist="playlist" ></playlist-element>
   
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Create a Playlist</md-dialog-title>

      <md-field :class="{ 'md-invalid': error }">
      <label>Title</label>
      <md-input v-model="required" required></md-input>
      <span class="md-error" :v-if="error">the Title is required</span>
    </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="close()">Close</md-button>
        <md-button class="md-primary" @click="validation()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-fab md-primary" @click="showDialog = true"><md-icon>add</md-icon></md-button>
  </md-content>
</template>

<script>
import PlaylistElement from '@/components/PlaylistElement';
import * as api from '../api';
// import PlaylistDialogCreate from '@/components/PlaylistDialogCreate';

export default {
  name: 'PlaylistElementList',
  props: {
    playlists: Array
  },
  data: () => ({
    required: '',
    showDialog: false,
    error: false,
    output: {}
  }),
  components: {
    'playlist-element': PlaylistElement,
    // 'play-list-dialog-create': PlaylistDialogCreate
  },
  methods: {
    validation() {
      if (!this.required) {
        this.error = true;
      } else {
        console.log(api.createPlayList(this.required, 'tommy@ubeat.ca'));
        console.log(this.output);
        this.playlists.push(this.output);
        this.required = '';
        this.showDialog = false;
      }
    },
    close() {
      this.required = '';
      this.showDialog = false;
      this.error = false;
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
