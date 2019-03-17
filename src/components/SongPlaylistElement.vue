<template>
    <md-table-row>
        <md-table-cell>
          <md-button class="md-icon-button md-dense md-raised md-accent">
            <md-icon>play_arrow</md-icon>
          </md-button>
          <span>TestSong</span>
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
        <md-table-cell>12:23</md-table-cell>
        <md-table-cell>Shawna Dubbin</md-table-cell>
        <md-table-cell>Mamale</md-table-cell>
    </md-table-row>
</template>

<script>
export default {
  name: 'SongPlaylistElement'
};
</script>

<style scoped>

</style>
