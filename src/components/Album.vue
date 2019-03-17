<template>
  <div id="album" class="md-layout">
    <md-content class="md-layout-item md-size-100">
      <div class="md-layout md-alignment-center-left">
        <div class="md-layout-item md-size-20 md-xsmall-size-100 md-small-100 md-medium-100">
          <figure>
            <img src="https://dummyimage.com/200x200/4558ff/000000.jpg&text=Album" alt="Album">
            <figcaption class="md-layout md-alignment-center-center">
              <span class="md-subhead md-layout-item md-size-25">Album Name</span>
              <md-button class="md-layout-item md-size-50">
                <md-icon class="buttonShuffle">shuffle</md-icon>
              </md-button>
            </figcaption>
          </figure>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            In quod, cum eum beatae aperiam nobis laudantium necessitatibus
            perferendis,
            laboriosam natus dignissimos reprehenderit suscipit deserunt eos eligendi,
            perspiciatis molestiae sit minima.
          </p>
        </div>
      </div>
    </md-content>

    <div class="md-layout-item md-size-100">
      <div class="md-layout md-gutter">
        <span class="md-headline md-layout-item md-size-100">Songs</span>

        <div class="md-layout-item md-xlarge-size-100 md-large-size-100">
          <div class="md-layout md-alignment-space-around-center">
            <div class="md-layout-item md-xlarge-size-75 md-large-size-75">


        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  import AlbumElement from '../components/AlbumElement';
  import SongElement from '../components/SongElementList';

  export default {
    name: 'Album',
    components: {
      'album-element': AlbumElement,
      'song-element': SongElement
    },

    data() {
      return {
        primaryGenreName: '',
        artworkUrl100: '',
        listTracks: []
      };
    },
    computed: {
      icon() {
        return this.artworkUrl100;
      },
    },
  };
</script>


<style>
.arrowColor {
  color: red !important;
}
</style>
