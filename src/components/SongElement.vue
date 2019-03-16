<template>
     <md-table-row slot="md-table-row" slot-scope="{ song }">
        <md-table-cell md-label="TrackName" md-sort-by="name">{{ song.trackName }}</md-table-cell>
        <md-table-cell md-label="Time" md-sort-by="time">{{ song.time }}</md-table-cell>
        <md-table-cell md-label="Url"> 
            <md-button class="md-icon-button" :href="song.url">
                     <md-icon class="arrowColor">play_arrow</md-icon>
            </md-button>
        </md-table-cell>
      </md-table-row>
</template>
<script>
export default {
 name: 'SongElement',
  props: {
    song: {
      type: Object,
      required: true,
      default: () => ({
        trackId: -1,
        trackName: 'Unknown',
        time: 'Unknown',
        url: 'Unknown'
      })
    }
  }
};
}
</script>
<style>

</style>
