<template>
  <div>
    <h1 class="md-display-1">Play List</h1>
    <playlist-element-list v-bind:playlists="newPlaylist"></playlist-element-list>
    <h1 class="md-display-1">Albums</h1>
    <album-element-list v-bind:albums="newAlbums"></album-element-list>
    <h1 class="md-display-1">Artists:</h1>
    <artist-element-list v-bind:artists="listArtists"></artist-element-list>
  </div>
</template>

<script>
import AlbumElementList from '@/components/AlbumElementList';
import PlaylistElementList from '@/components/PlaylistElementList';
import ArtistElementList from '@/components/ArtistElementList';
import axios from 'axios';
import * as api from '../api';

export default {
  components: {
    'album-element-list': AlbumElementList,
    'playlist-element-list': PlaylistElementList,
    'artist-element-list': ArtistElementList
  },
  data: () => ({
    newAlbums: [],
    newPlaylist: [],
    listArtists: [],
  }),
  async mounted() {
    axios
      .get('http://ubeat.herokuapp.com/unsecure/search/albums?q=metallica')
      .then(response => (
        this.newAlbums = response.data.results.map(item => ({
          collectionId: item.collectionId,
          collectionName: item.collectionName,
          artistName: item.artistName,
          artworkUrl100: item.artworkUrl100
        }))
      ))
      .catch(error => console.log(error));

    const artistSearched = await api.getArtistSearched('Metallica');
    this.listArtists = artistSearched;
  }
};
</script>


<style scoped>
  main {
    padding: 2rem 4rem;
  }
</style>

