<template>
  <md-card md-with-hover>
    <md-card-media>
      <img :src="img" alt="Album Cover">
    </md-card-media>

    <md-card-header>
      <div class="md-title">Card with hover effect</div>
      <div class="md-subhead">It also have a ripple</div>
    </md-card-header>

    <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'AlbumElement',
  props: {
    img: {
      type: String,
      required: false,
      default: '/static/no-cover.jpg'
    }
  }
};
</script>

<style scoped>
  .md-card {
    width: 300px;
  }
</style>
