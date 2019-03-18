<template>

  <md-content>
    <artist-element v-for="artist in artists" v-bind:key="artist.artistId" v-bind:artist="artist"></artist-element>
  </md-content>

</template>

<script>
  import ArtistElement from '@/components/ArtistElement';

  export default {
    name: 'ArtistElementList.vue',
    props: {
      artists: Array
    },
    components: {
      'artist-element': ArtistElement
    }
  };
</script>

<style scoped>

</style>
