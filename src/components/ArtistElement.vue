<template>
  <md-card md-with-hover>
    <md-card-header>
        <div class="md-subheading">{{ artist.artistName }}</div>
        <div class="md-caption">{{ artist.primaryGenreName }}</div>

    </md-card-header>

    <md-card-action>
        <md-button :to="{ name: 'Artist', params: { artistId: this.artist.artistId } }">Details</md-button>
    </md-card-action>
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
      },
    };

</script>

<style scoped>

</style>
