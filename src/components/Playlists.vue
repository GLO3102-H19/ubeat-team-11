<template>
  <main>
    <md-progress-bar v-if="progressStatus" class="md-accent" md-mode="query"></md-progress-bar>
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
    output: {},
    progressStatus: true,
  }),
  async beforeMount() {
    if (api.checkIfCookieIsAlive() === false) {
      this.$router.push({ name: 'Login' });
    } else {
      const user = await api.getTokenInfo();
      console.log(user);
      this.playlists = await api.filterplaylistByUserId(user.data.id);
      console.log(this.playlists);
      this.progressStatus = false;
    }
  },
  methods: {
    async validation() {
      if (!this.required) {
        this.error = true;
      } else {
        const result = await api.getTokenInfo();
        if (result.status === 400) {
          console.log(result.err);
        } else {
          this.output = await api.createPlayList(this.required, result.email);
          this.playlists.push(this.output);
          this.required = '';
          this.showDialog = false;
          console.log(this.output);
        }
      }
    },
    close() {
      this.required = '';
      this.showDialog = false;
      this.error = false;
    },
  }
};
</script>

<style scoped>
main {
  padding: 2rem 4rem;
}
</style>
