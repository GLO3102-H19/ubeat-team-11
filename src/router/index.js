import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';
import Playlist from '@/components/Playlist';
import Playlists from '@/components/Playlists';
import UserProfile from '@/components/UserProfile';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    }, {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/signup/',
      name: 'SignUp',
      component: SignUp
    }, {
      path: '/artist/:artistId',
      name: 'Artist',
      component: Artist
    }, {
      path: '/album/:collectionId',
      name: 'Album',
      component: Album,
    }, {
      path: '/playlist/:id',
      name: 'Playlist',
      component: Playlist
    }, {
      path: '/playlists',
      name: 'Playlists',
      component: Playlists
    }, {
      path: '/user/:id',
      name: 'UserProfile',
      component: UserProfile
    }
  ],
});
