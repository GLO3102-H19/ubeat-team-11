<template>
  <div class="md-layout">

    <md-content class="md-layout-item md-size-100">
      <div class="md-layout md-alignment-left">

        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <h1 class="md-display-1">Artist: {{name}} </h1>
          <h1 class="md-display-1">Genre: {{genre}} </h1>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <md-button :href="artistItunes">
            <md-icon >insert_link</md-icon>
          </md-button>

        </div>
      </div>
    </md-content>

    <h1 class="md-display-1">Albums</h1>
    <album-element-list v-bind:albums="albumArtist"></album-element-list>



  </div>

</template>

<script>

  import AlbumElementList from '@/components/AlbumElementList';
  import * as api from '../api';

  export default {
    components: {
      'album-element-list': AlbumElementList,
    },
    data: () => ({
      id: 0,
      albumArtist: [],
      name: '',
      artistItunes: '',
      genre: '',
    }),
    async  mounted() {
      this.id = this.$route.params.artistId;
      const listAlbums = await api.getArtistAlbums(this.id);
      const { artistName, artistLinkUrl, primaryGenreName } = await api.getArtist(this.id);
      this.name = artistName;
      this.artistItunes = artistLinkUrl;
      this.genre = primaryGenreName;
      this.albumArtist = listAlbums.albumArtists;
    }

  };

</script>


<style>


</style>
