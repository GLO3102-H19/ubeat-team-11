<template>
 <md-card md-with-hover>
  <edit-name-playlist-dialog v-bind:showDialog="this.showDialog" v-bind:playlistitem="playlist" v-on:close-dialog="showDialogStatus" v-on:update-playlist="updatePlaylist"></edit-name-playlist-dialog>

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
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
        <md-menu-item @click="EditPlaylist()">
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
    }
  },
  components: {
    'edit-name-playlist-dialog': EditNamePlaylistDialog
  },
  data: () => ({
    showDialog: false,
  }),
  methods: {
    async RemovePlayList() {
      const r = await api.deletePlaylist(this.playlist.id);
      console.log(r);
      this.$emit('delete-playlist');
    },
    showDialogStatus(value) {
      this.showDialog = value;
    },
    EditPlaylist() {
      this.showDialog = true;
    },
    updatePlaylist(value) {
      this.playlist.name = value.newName;
      this.showDialog = value.statusDialog;
      this.tracks = value.tracks;
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

  .md-subheading {
    text-overflow: ellipsis;
    width: 232px;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
