<template>
  <md-card md-with-hover>
    <md-card-media>
        <img :src="album.img" alt="Album Cover">
        <md-button class="md-icon-button md-raised md-accent">
          <md-icon >play_arrow</md-icon>
        </md-button>
    </md-card-media>

    <md-card-header>
      <div class="md-subheading">{{ album.title }}</div>
      <div class="md-caption">{{ album.artist }}</div>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  name: 'AlbumElement',
  props: {
    album: {
      type: Object,
      required: false,
      default: () => ({
        id: 0,
        img: '/static/no-cover.jpg',
        title: 'Unknown',
        artist: 'Unknown'
      })
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
</style>
