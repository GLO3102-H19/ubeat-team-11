<template>
  <song-playlist-element-list></song-playlist-element-list>
</template>

<script>
import SongPlaylistElementList from '@/components/SongPlaylistElementList';

export default {
  name: 'Playlist',
  components: {
    'song-playlist-element-list': SongPlaylistElementList
  }
};
</script>

<style scoped>

</style>
