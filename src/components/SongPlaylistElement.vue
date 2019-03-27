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
              <md-menu-item @click="RemoveSong()">
                <span>Remove from play list</span>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </md-table-cell>
        <md-table-cell>{{trackTimeMinSec}}</md-table-cell>
        <md-table-cell><router-link :to="{name: 'Artist',params: {artistId: this.playlistSong.artistId}}">{{this.playlistSong.artistName}}</router-link></md-table-cell>  
        <md-table-cell ><router-link :to="{ name: 'Album', params: { collectionId: this.playlistSong.collectionId } }">{{this.playlistSong.collectionName}}</router-link></md-table-cell>
    </md-table-row>
</template>

<script>
import millisToMinutesAndSeconds from '../utility';
import * as api from '../api';

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
    },
    playlistId: {
      type: String,
    }
  },
  data: () => ({
    trackTimeMinSec: 0
  }),
  beforeMount() {
    this.trackTimeMinSec = millisToMinutesAndSeconds(this.playlistSong.trackTimeMillis);
  },
  methods: {
    async RemoveSong() {
      const r = await api.deleteTrackInPlayList(this.playlistId, this.playlistSong.trackId);
      console.log(r);
      this.$emit('delete-track');
    }
  }
};
</script>

<style scoped>

</style>
