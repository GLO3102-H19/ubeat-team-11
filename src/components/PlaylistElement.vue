<template>
 <md-card md-with-hover>

    <md-card-media >
      <router-link :to="{ name: 'Playlist', params: { id: this.playlist.id } }">
        <img src="/static/no-cover.jpg" alt="Album Cover">
        </router-link>
         <md-button class="md-icon-button md-raised md-accent">
          <md-icon >play_arrow</md-icon>
        </md-button>
    </md-card-media>

    <md-card-header>
      
      <md-card-header-text>
        <div class="md-subheading">{{ playlist.name }}</div>
        <div class="md-caption">Playlist</div>
      </md-card-header-text>

      <md-menu md-size="big" md-direction="bottom-end">
      <edit-name-playlist-dialog v-bind:showDialog="this.showDialog" v-bind:playlistitem="playlist" v-on:close-dialog="showDialogStatus"></edit-name-playlist-dialog>
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
        <md-menu-item @click="this.showDialog = true">
            <span>Edit playlist</span>
          </md-menu-item>
          <md-menu-item @click="RemovePlayList()">
            <span>Delete playlist</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-card-header>
  </md-card> 
</template>

<script>
import EditNamePlaylistDialog from '@/components/EditNamePlaylistDialog';
import * as api from '../api';

export default {
  name: 'PlaylistElement',
  props: {
    playlist: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        name: 'Unknown',
        owner: {},
        tracks: []
      })
    },
    components: {
      'edit-name-playlist-dialog': EditNamePlaylistDialog
    },
    data: () => ({
      showDialog: false,
    })
  },
  methods: {
    async RemovePlayList() {
      const r = await api.deletePlaylist(this.playlist.id);
      console.log(r);
      this.$emit('delete-playlist');
    },
    showDialogStatus(value) {
      this.showDialog = value;
    }
  }
};
</script>

<style scoped>
  .md-card-media > .md-button {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0.5rem;
  }

  .md-card {
    width: 300px;
  }
</style>
