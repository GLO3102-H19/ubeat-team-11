<template>
  <div id="album" class="md-layout">
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
    </div>
    <div class=""></div>
  </div>
</template>

<script>
  import * as api from '../api';
  import SongElementList from '../components/SongElementList';

  export default {
    name: 'Album',
    components: {
      'song-element-list': SongElementList
    },
    data() {
      return {
        id: 0,
        AlbumInformation: Object,
        listTracks: [],
        progressStatus: true
      };
    },
    async  mounted() {
      this.id = this.$route.params.collectionId;
      const item = await api.getAlbum(this.id);
      this.AlbumInformation = item[0];
      const tracks = await api.getTracks(this.id);
      this.listTracks = tracks;
      this.progressStatus = false;
    },
    computed: {
    }

  };
</script>


<style>
.arrowColor {
  color: red !important;
}
</style>
