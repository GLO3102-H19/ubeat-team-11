<template>
   <div>
    <md-dialog :md-active.sync="showDialog" :md-close-on-esc="false" :md-click-outside-to-close="false">
      <md-dialog-title>Rename Playlist</md-dialog-title>

      <md-field :class="{ 'md-invalid': error }">
        <label>Title</label>
        <md-input v-model="newName" required></md-input>
        <span class="md-error" :v-if="error">Please enter a Name</span>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="close()">Close</md-button>
        <md-button class="md-primary" @click="validation()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>
<script>
import * as api from '../api';

export default {
  name: 'EditNamePlaylistDialog',
  props: {
    showDialog: Boolean,
    playlistitem: Object
  },
  data: () => ({
    newName: '',
    error: false
  }),
  methods: {
    async validation() {
      if (!this.newName) {
        this.error = true;
      } else {
        const tracksTemp = this.playlistitem.tracks;
        console.log(tracksTemp);
        const msg = await api.putEditNamePlayList(this.playlistitem, this.newName);
        if (msg.status === 200) {
          console.log('ok');
          await tracksTemp.map(async (element) => {
            const status = await api.postTrackInPlaylist(this.playlistitem.id, element);
            console.log(status);
          });
          const tempoName = this.newName;
          this.newName = '';
          this.$emit('update-playlist', { statusDialog: false, newName: tempoName, tracks: tracksTemp });
        } else {
          console.log(msg);
        }
      }
    },
    close() {
      this.newName = '';
      this.error = false;
      this.$emit('close-dialog', false);
    }
  }
};
</script>
<style scoped>
.md-dialog {
    max-width: 50%;
}
</style>
