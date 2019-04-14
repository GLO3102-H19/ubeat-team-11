<template>
  <div>
    <h1 class="md-display-1">Top 10 : <br> <br> Artists:</h1>
    <artist-element-list v-bind:artists="listArtistWithImage" ></artist-element-list>
    <h1 class="md-display-1">Albums:</h1>
    <album-element-list v-bind:albums="listAlbums"></album-element-list>
  </div>
</template>

<script>
import AlbumElementList from '@/components/AlbumElementList';
import ArtistElementList from '@/components/ArtistElementList';
import * as api from '../api';


export default {
  components: {
    'album-element-list': AlbumElementList,
    'artist-element-list': ArtistElementList,
  },
  data: () => ({
    listArtists: [],
    listAlbumName: [],
    listAlbums: [],
    listImages: [],
    listArtistWithImage: [],
  }),
  async mounted() {
    const artistTopGeo = await api.getTopArtistGeo();
    this.listArtistsName = artistTopGeo.topartists.artist.map(item => item.name);
    this.listArtists = await Promise.all(this.listArtistsName.map(async (item) => {
      const x = await api.artistSearched(item);
      return x.data.results[0];
    }));
    this.listImages = await Promise.all(this.listArtistsName.map(async (item) => {
      const x = await api.getBioFromArtist(item);
      return x.artist.image[1]['#text'];
    }));
    for (let i = 0; i < this.listArtistsName.length; i += 1) {
      this.listArtistWithImage.push({ img: this.listImages[i], artist: this.listArtists[i] });
    }
    this.listAlbumName = await Promise.all(this.listArtistsName.map(async (item) => {
      const x = await api.getTopAlbumByArtist(item);
      return x.topalbums.album[0].name;
    }));
    this.listAlbums = await Promise.all(this.listAlbumName.map(async (item) => {
      const x = await api.albumSearched(item);
      return x.data.results[0];
    }));
  },
};
</script>


<style scoped>
  main {
    padding: 2rem 4rem;
  }
</style>

