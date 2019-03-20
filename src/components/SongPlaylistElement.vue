<template>
    <md-table-row>
        <md-table-cell>
          <md-button class="md-icon-button md-dense md-raised md-accent">
            <md-icon>play_arrow</md-icon>
          </md-button>
          <span>{{this.playlistSong.trackCensoredName}}</span>
        </md-table-cell>
        <md-table-cell>
          <md-menu md-size="big" md-direction="bottom-end">
            <md-button class="md-icon-button md-dense" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item @click="">
                <span>Remove from play list</span>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </md-table-cell>
        <md-table-cell>{{trackTimeMinSec}}</md-table-cell>
        <md-table-cell>{{this.playlistSong.artistName}}</md-table-cell>
        <md-table-cell :to="{ name: 'Album', params: { collectionId: this.playlistSong.collectionId } }>{{this.playlistSong.collectionName}}</md-table-cell>
    </md-table-row>
</template>

<script>
import millisToMinutesAndSeconds from '../utility';

export default {
  name: 'SongPlaylistElement',
  props: {
    playlistSong: {
      type: Object,
      required: true,
      default: () => ({
        trackId: 0,
        trackCensoredName: 'Unknown',
        trackTimeMillis: 'Unknown',
        artistName: 'Unknown',
        collectionName: 'Unknown'
      })
    }
  },
  data: () => ({
    trackTimeMinSec: 0
  }),
  beforeMount() {
    this.trackTimeMinSec = millisToMinutesAndSeconds(this.playlistSong.trackTimeMillis);
  }
};
</script>

<style scoped>

</style>
