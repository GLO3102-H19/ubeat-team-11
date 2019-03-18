import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';
import Playlist from '@/components/Playlist';
import Playlists from '@/components/Playlists';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/artist/:artistId',
      name: 'Artist',
      component: Artist
    }, {
      path: '/album/:collectionId',
      name: 'Album',
      component: Album,
    }, {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }, {
      path: '/',
      name: 'Playlists',
      component: Playlists
    }
  ],
});
