<template>
  <div class="md-layout">
    <md-content class="md-layout-item md-size-100">
        <md-progress-bar v-if="progressStatus" class="md-accent" md-mode="query"></md-progress-bar>
      <div class="md-layout md-alignment-left">
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <img :src="this.imageLink" alt srcset>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <h1 class="md-display-1">Artist: {{this.artistInfo.artistName}}</h1>
          <p class="md-body2">{{this.bio}}</p>
          <md-button :href="this.artistInfo.artistLinkUrl">
            <md-icon>insert_link</md-icon>
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
    'album-element-list': AlbumElementList
  },
  data: () => ({
    id: 0,
    albumArtist: [],
    artistInfo: {},
    imageLink: '',
    bio: '',
    progressStatus: true
  }),
  async mounted() {
    this.id = this.$route.params.artistId;
    const listAlbums = await api.getArtistAlbums(this.id);
    const artistInfo = await api.getArtist(this.id);
    this.artistInfo = artistInfo.results[0];
    this.albumArtist = listAlbums.results;
    const bio = await api.getBioFromArtist(this.artistInfo.artistName);
    const image = bio.artist.image.find(item => item.size === 'mega');
    this.imageLink = image['#text'];
    const indexRemoveLink = bio.artist.bio.summary.indexOf('<');
    console.log(indexRemoveLink);
    this.bio = bio.artist.bio.summary.substr(0, indexRemoveLink - 1);
    this.progressStatus = false;
  }
};
</script>


<style>
</style>
