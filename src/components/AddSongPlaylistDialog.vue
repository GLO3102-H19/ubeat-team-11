<template>
    <md-dialog :md-active.sync="showDialog" :md-opened="loadPlaylist()" :md-close-on-esc="false" :md-click-outside-to-close="false">
        <md-dialog-title>Add Song to a playlist</md-dialog-title>
        <md-field>
            <label for="playlists">Playlists</label>
            <md-select v-model="playlistSelected" name="playlist" id="movie">
                <md-option v-for="item in this.Playlists" v-bind:key="item.id" :value="item.id">{{item.name}}</md-option>
            </md-select>
        </md-field>
         <md-dialog-actions>
        <md-button class="md-primary" @click="updateShowDialog()">Close</md-button>
        <md-button class="md-primary" @click="addSongToPlaylist()">Send</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>
<script>
import * as api from '../api';

export default {
  name: 'AddSongPlaylistDialog',
  props: {
    showDialog: Boolean,
    songItem: Object,
  },
  data: () => ({
    Playlists: Array,
    playlistSelected: null
  }),
  methods: {
    updateShowDialog() {
      this.$emit('close-dialog', false);
    },
    async loadPlaylist() {
      if (this.showDialog === true) {
        // console.log('Open');
        const temp = await api.getAllPlaylists();
        // console.log(temp);
        this.Playlists = temp;
        // console.log(this.Playlists);
      }
    },
    async addSongToPlaylist() {
      if (this.playlistSelected == null) {
        console.log('Please select a playlist');
      } else {
        const message = await api.postTrackInPlaylist(this.playlistSelected, this.songItem);
        console.log(message);
        this.$emit('close-dialog', false);
      }
    }
  }
};
</script>
<style scoped>
.md-dialog {
    max-width: 50%;
}
</style>
