<template>

  <md-content>
    <artist-element v-for="artist in artists" v-bind:key="artist.artist.artistId" v-bind:artist="artist.artist" v-bind:imgArtist="artist.img"  ></artist-element>
  </md-content>

</template>

<script>
  import ArtistElement from '@/components/ArtistElement';

  export default {
    name: 'ArtistElementList.vue',
    props: {
      artists: Array,
    },
    components: {
      'artist-element': ArtistElement
    },
  };
</script>

<style scoped>
  .md-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow: auto;
  }

  .md-card {
    margin: 0.5rem;
  }
</style>
