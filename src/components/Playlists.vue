<template>
  <main>
    <h1 class="md-display-1">Play List</h1>
    <playlist-element-list v-bind:playlists="playlists"></playlist-element-list>
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

    <md-button class="md-fab md-primary" @click="showDialog = true">
      <md-icon>add</md-icon>
    </md-button>
  </main>
</template>

<script>
import PlaylistElementList from '@/components/PlaylistElementList';
import Axios from 'axios';
import * as api from '../api';

export default {
  name: 'Playlists',
  components: {
    'playlist-element-list': PlaylistElementList
  },
  data: () => ({
    playlists: [],
    required: '',
    showDialog: false,
    error: false,
    output: {}
  }),
  mounted() {
    Axios.get('http://ubeat.herokuapp.com/unsecure/playlists')
      .then((response) => {
        console.log(response);
        return response;
      })
      .then(response => (this.playlists = response.data))
      .catch(error => console.log(error));
  },
  methods: {
    async validation() {
      if (!this.required) {
        this.error = true;
      } else {
        this.output = await api.createPlayList(this.required, 'tommy@ubeat.ca');
        this.playlists.push(this.output);
        this.required = '';
        this.showDialog = false;
        console.log(this.output);
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
main {
  padding: 2rem 4rem;
}
</style>
