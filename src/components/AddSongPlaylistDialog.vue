<template>
    <md-dialog :md-active.sync="showDialog" :md-opened="loadPlaylist()" :md-close-on-esc="false" :md-click-outside-to-close="false">
        <md-dialog-title>Add Song to a playlist</md-dialog-title>
        <md-field :class="{ 'md-invalid': error }">
            <label for="playlists">Playlists</label>
            <md-select v-model="playlistSelected" name="playlist" id="movie">
                <md-option v-for="item in this.Playlists" v-bind:key="item.id" :value="item.id">{{item.name}}</md-option>
                <span class="md-error" :v-if="error">Please Select a Playlist</span>
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
    playlistSelected: null,
    error: false
  }),
  methods: {
    updateShowDialog() {
      this.$emit('close-dialog', false);
    },
    async loadPlaylist() {
      if (this.showDialog === true) {
        const user = await api.getTokenInfo();
        const temp = await api.filterplaylistByUserId(user.data.id);
        this.Playlists = temp;
      }
    },
    async addSongToPlaylist() {
      if (this.playlistSelected == null) {
        this.error = true;
      } else {
        console.log(this.playlistSelected);
        console.log(this.songItem);
        const message = await api.postTrackInPlaylist(this.playlistSelected, this.songItem);
        if (message.status !== 200) {
          this.error = false;
          this.$emit('add-song-playlist-status', { status: true, msg: 'problem while adding the song to  your playlist, please try agin' });
        } else {
          this.error = false;
          this.$emit('add-song-playlist-status', { status: false, msg: 'the song is added' });
        }
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
