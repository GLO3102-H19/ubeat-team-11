<template>
  <div id="album" class="md-layout">
    <add-song-to-playlist-dialog v-bind:songItem="this.theSong" v-bind:showDialog="this.showDialog" v-on:add-song-playlist-status="showDialogStatus" ></add-song-to-playlist-dialog>
    <md-content class="md-layout-item md-size-100">
      <md-progress-bar v-if="progressStatus" class="md-accent" md-mode="query"></md-progress-bar>
      <div class="md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-20 md-xsmall-size-100 md-small-100 md-medium-100">
          <figure>
            <img class="imageAlbum" :src="AlbumInformation.artworkUrl100" alt="Album">

          </figure>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <p> Genre: {{AlbumInformation.primaryGenreName}}            </p>
          <p> Date:  {{AlbumInformation.releaseDate}}             </p>
          <p> Album: {{AlbumInformation.collectionName}}   </p>
          <p>        {{AlbumInformation.copyright}}        </p>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <md-button :href="AlbumInformation.collectionViewUrl">
            <md-icon>insert_link</md-icon>
          </md-button>

         </div>
      </div>
    </md-content>

    <div class="md-layout-item md-size-100">
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-xlarge-size-100 md-large-size-100">
          <div class="md-layout md-alignment-space-around-center">
            <div class="md-layout-item md-xlarge-size-100 md-large-size-100">
              <song-element-list v-bind:songs="listTracks"></song-element-list>
             </div>
          </div>
        </div>
      </div>
         <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{this.errormessage}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">close</md-button>
    </md-snackbar>
    </div>
  </div>
</template>

<script>
  import AddSongToPlayListDialog from '@/components/AddSongPlaylistDialog';
  import * as api from '../api';
  import SongElementList from '../components/SongElementList';

  export default {
    name: 'Album',
    components: {
      'song-element-list': SongElementList,
      'add-song-to-playlist-dialog': AddSongToPlayListDialog
    },
    data() {
      return {
        id: 0,
        AlbumInformation: Object,
        listTracks: [],
        progressStatus: true,
        showSnackbar: false,
        position: 'center',
        duration: 4000,
        isInfinity: false,
        errormessage: '',
        myPlaylist: [],
        showDialog: false,
        theSong: {}
      };
    },
    async  beforeMount() {
      if (api.checkIfCookieIsAlive() === false) {
        this.$router.push({ name: 'Login' });
      }
    },
    async  mounted() {
      this.id = this.$route.params.collectionId;
      const item = await api.getAlbum(this.id);
      const tracks = await api.getTracks(this.id);
      this.AlbumInformation = item[0];
      this.listTracks = tracks;
      this.progressStatus = false;
    },
    created() {
      this.$bus.$on('add-song-dialog', (msg) => {
        console.log(msg);
        this.showDialog = msg.dialog;
        this.theSong = msg.songItem;
      });
    },
    methods: {
      showDialogStatus(value) {
        this.showDialog = false;
        this.errormessage = value.msg;
        this.showSnackbar = true;
      }
    }
};
</script>


<style>
.arrowColor {
  color: red !important;
}
</style>
