<template>
     <md-table-row slot="md-table-row" slot-scope="{ song }">
        <md-table-cell md-label="TrackName" md-sort-by="name">{{ song.trackCensoredName }}</md-table-cell>
        <md-table-cell md-label="Time" md-sort-by="time">{{ song.trackTimeMillis }}</md-table-cell>
        <md-table-cell md-label="Url">
            <md-button class="md-icon-button" :href="song.previewUrl">
                     <md-icon class="arrowColor">play_arrow</md-icon>
            </md-button>
        </md-table-cell>
        <md-table-cell>
             <md-menu md-size="big" md-direction="bottom-end">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item @click="">
            <span>Add to play list</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
        </md-table-cell>
      </md-table-row>
</template>
<script>
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
    }
  },
  methods: {
    playMusic: () => {
    }
  }
};

</script>
<style>

</style>
