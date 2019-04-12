<template>
  <div id="profile" class="md-layout">
    <md-content class="md-layout-item md-size-100">
      <div class="md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-20 md-xsmall-size-100 md-small-100 md-medium-100">
          <md-avatar class="md-avatar-icon md-large md-accent">
            <md-ripple>{{this.userInformation.initial}}</md-ripple>
          </md-avatar>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <h1 class="md-display-1">Name: {{this.userInformation.name}}</h1>
          <h1 class="md-display-1">Email: {{this.userInformation.email}}</h1>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <md-switch v-model="followStatus" :change="UpdateFollow()">{{this.followStatusText}}</md-switch>
        </div>
      </div>
    </md-content>
    <h1 class="md-display-1">Playlist</h1>
    <playlist-element-list v-bind:playlists="this.playlistUser"></playlist-element-list>
    <h1 class="md-display-1">Friends</h1>
    <friend-element-list v-bind:friends="this.friendlistUsers"></friend-element-list>
  </div>
</template>
<script>
import PlaylistEmentList from '@/components/PlaylistElementList';
import FriendElementList from '@/components/FriendElementList';
import * as api from '../api';

export default {
  name: 'UserProfile',
  data: () => ({
    id: Number,
    userInformation: Object,
    followStatusText: 'Unfollow',
    followStatus: Boolean,
    playlistUser: [],
    friendlistUsers: []
  }),
  components: {
    'playlist-element-list': PlaylistEmentList,
    'friend-element-list': FriendElementList
  },
  async mounted() {
    this.id = this.$route.params.id;
    const itemUser = await api.getUsersbyId(this.id);
    this.userInformation = itemUser;
    const itemPlaylist = await api.getPlaylistById(this.id);
    console.log(itemPlaylist);
    this.playlistUser.push(itemPlaylist);
    this.getIntial();
    const connectedUser = await api.getTokenInfo();
    let isInside = false;
    connectedUser.following.forEach((element1) => {
      itemUser.following.forEach((element2) => {
        if (element1.id === element2.id) {
          const item = element1;
          item.doIfollow = true;
          this.friendlistUsers.push(item);
          isInside = true;
        }
      });
      if (!isInside) {
        const item = element1;
        item.doIfollow = false;
        this.friendlistUsers.push(item);
      } else {
        isInside = false;
      }
    });
  },
  methods: {
    getIntial() {
      const editName = this.userInformation.name.split(' ');
      this.initial = editName[0].charAt(0) + editName[1].charAt(0);
    },
    async UpdateFollow() {
      if (this.followStatus) {
        const result = await api.postFollow(this.id);
        console.log(result);
        this.followStatusText = 'follow';
      } else {
        // mettre API for unfollow someone
        const result = await api.deleteFollow(this.id);
        console.log(result);
        this.followStatusText = 'unfollow';
      }
    }
  }
};
</script>
<style>
</style>
