<template>
  <div id="album" class="md-layout">
    <md-content class="md-layout-item md-size-100">
      <div class="md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-20 md-xsmall-size-100 md-small-100 md-medium-100">
          <figure>
            <img class="imageAlbum" :src="artworkUrl100" alt="Album">

          </figure>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <p> Genre: {{genre}}            </p>
          <p> Date:  {{date}}             </p>
          <p> Album: {{collectionName}}   </p>
          <p>        {{copyright}}        </p>
    </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <md-button :href="itunesAlbum">
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
  import AlbumElement from '../components/AlbumElement';
  import SongElementList from '../components/SongElementList';

  export default {
    name: 'Album',
    components: {
      'album-element': AlbumElement,
      'song-element-list': SongElementList
    },
    data() {
      return {
        id: 0,
        genre: '',
        artistName: '',
        artworkUrl100: '',
        collectionName: '',
        itunesAlbum: '',
        copyright: '',
        date: '',
        listTracks: [],
      };
    },
    async  mounted() {
      this.id = this.$route.params.collectionId;
      const { artistName, collectionName, artworkUrl100 } = await api.getAlbum(this.id);
      const { releaseDate, primaryGenreName, copyright } = await api.getAlbum(this.id);
      const { collectionViewUrl } = await api.getAlbum(this.id);
      const trackTimeMillis = await api.getTracks(this.id);
      this.artistName = artistName;
      this.date = releaseDate;
      this.genre = primaryGenreName;
      this.itunesAlbum = collectionViewUrl;
      this.artworkUrl100 = artworkUrl100;
      this.copyright = copyright;
      this.collectionName = collectionName;
      this.listTracks = trackTimeMillis.tracks;
    },
    computed: {
      icon() {
        return this.artworkUrl100;
      },
    }

  };
</script>


<style>
.arrowColor {
  color: red !important;
}
</style>
