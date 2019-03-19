<template>
    <md-table-row>
        <md-table-cell>
          <md-button class="md-icon-button md-dense md-raised md-accent">
            <md-icon>play_arrow</md-icon>
          </md-button>
          <span>{{songPlaylist.trackCensoredName}}</span>
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
        <md-table-cell>{{songPlaylist.trackTimeMillis}}</md-table-cell>
        <md-table-cell>{{songPlaylist.artistName}}</md-table-cell>
        <md-table-cell>{{songPlaylist.collectionName}}</md-table-cell>
    </md-table-row>
</template>

<script>
export default {
  name: 'SongPlaylistElement',
  props: {
    songPlaylist: {
      type: Object,
      required: false,
      default: () => ({
        trackId: 0,
        trackCensoredName: 'Unknown',
        trackTimeMillis: 'Unknown',
        artistName: 'Unknown',
        collectionName: 'Unknown'
      })
    }
  }
};
</script>

<style scoped>

</style>
