<template>

     <md-table-row slot="md-table-row" slot-scope="{ song }">
        
        <md-table-cell md-label="TrackName" md-sort-by="name">{{ song.trackCensoredName }}</md-table-cell>
        <md-table-cell md-label="Time" md-sort-by="time">{{ trackMinAndSec }}</md-table-cell>
        <md-table-cell md-label="Url">
            <md-button class="md-icon-button" :href="song.previewUrl">
                     <md-icon class="arrowColor">play_arrow</md-icon>
            </md-button>
        </md-table-cell>
        <md-table-cell>
       <!--<add-song-to-playlist-dialog v-bind:songItem="song" v-bind:showDialog="this.showDialog" v-on:close-dialog="showDialogStatus" ></add-song-to-playlist-dialog>-->

             <md-menu md-size="big" md-direction="bottom-end">
        <md-button class="md-icon-button" md-menu-trigger>

          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item @click="AddSongToPlay()">
            <span>Add to play list</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
        </md-table-cell>
      </md-table-row>

</template>
<script>
import AddSongToPlayListDialog from '@/components/AddSongPlaylistDialog';
import millisToMinutesAndSeconds from '../utility';

export default {
  name: 'SongElement',
  props: {
    song: {
      type: Object,
      required: false,
      default: () => ({
        trackId: 0,
        trackCensoredName: 'Unknown',
        trackTimeMillis: 'Unknown',
        previewUrl: 'Unknown'
      })
    },
  },
  components: {
    'add-song-to-playlist-dialog': AddSongToPlayListDialog
  },
  data: () => ({
    trackMinAndSec: 0,
    showDialog: false
  }),
  beforeMount() {
    this.trackMinAndSec = millisToMinutesAndSeconds(this.song.trackTimeMillis);
  },
  methods: {
    AddSongToPlay() {
      this.showDialog = true;
      this.$bus.$emit('add-song-dialog', { songItem: this.song, dialog: true });
    },
    Updatedialog(value) {
      this.showDialog = value;
      console.log(`songElement: ${this.showDialog}`);
    },
    showDialogStatus(value) {
      this.showDialog = value;
    }
  }
};

</script>
<style>

</style>
