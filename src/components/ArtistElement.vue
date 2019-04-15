<template>
  <md-card md-with-hover>
    <router-link :to="{ name: 'Artist', params: { artistId: this.artist.artistId } }">

    <md-card-media>
        <img :src="imgArtist" alt="Artist">
    </md-card-media>

    <md-card-header>
        <div class="md-subheading">{{ artist.artistName }}</div>
        <div class="md-caption">{{ artist.primaryGenreName }}</div>
    </md-card-header>
    </router-link>

   </md-card>

</template>

<script>
    export default {
      name: 'ArtistElement.vue',
      props: {
        artist: {
          type: Object,
          required: true,
          default: () => ({
            artistId: 0,
            artistName: '',
            primaryGenreName: '',
          }),
        },
        imgArtist: ''
      },
    };

</script>

<style scoped>
  .md-card-media  {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0.5rem;
  }

  .md-card {
    width: 300px;
  }
</style>
