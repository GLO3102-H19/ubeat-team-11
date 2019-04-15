<template>
  <div id="profile" class="md-layout">
    <md-content class="md-layout-item md-size-100">
      <md-progress-bar v-if="progressStatus" class="md-accent" md-mode="query"></md-progress-bar>
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
          <md-switch v-if="show" v-model="followStatus" @change="UpdateFollow()">{{this.followStatusText}}</md-switch>
        </div>
      </div>
    </md-content>
    <div class="md-layout md-alignment-left-center">
    <h1 class="md-display-1 md-layout-item md-size-100">Playlist</h1>
    <playlist-element-list v-bind:playlists="this.playlistUser"></playlist-element-list>
    <h1 class="md-display-1  md-layout-item md-size-100">Friends</h1>
    <friend-element-list v-bind:friends="this.friendlistUsers"></friend-element-list>
    </div>
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
    followStatus: false,
    playlistUser: [],
    friendlistUsers: [],
    commumFriend: [],
    show: false,
    progressStatus: true
  }),
  components: {
    'playlist-element-list': PlaylistEmentList,
    'friend-element-list': FriendElementList
  },
  async mounted() {
    this.id = this.$route.params.id;
    const itemUser = await api.getUsersbyId(this.id);
    const itemPlaylist = await api.filterplaylistByUserId(this.id);
    const connectedUser = await api.getTokenInfo();
    this.userInformation = itemUser.data;
    this.playlistUser = itemPlaylist;
    this.getIntial();
    let isInside = false;
    connectedUser.data.following.forEach((element) => {
      if (element.id === this.userInformation.id) {
        this.followStatus = true;
        this.followStatusText = 'follow';
      }
    });
    let item = {};
    itemUser.data.following.forEach((element1) => {
      connectedUser.data.following.forEach((element2) => {
        if (element2.id === element1.id) {
          console.log(element1);
          console.log(item);
          item = element1;
          item.doIfollow = true;
          this.commumFriend.push(item);
          isInside = true;
        }
      });
      if (!isInside) {
        // const result = await api.userSearched(element1.name);
        // item = result.data.filter(x => (x.id === element1.id))[0];
        item = element1;
        item.doIfollow = false;
        this.commumFriend.push(item);
      } else {
        isInside = false;
      }
    });
    console.log(this.commumFriend);
    this.commumFriend.forEach(async (element) => {
      const result = await api.userSearched(element.name);
      const users = result.data.filter(x => (x.name === element.name && x.email === element.email));
      if (users.length !== 0) {
        item.id = users[0].id;
        this.friendlistUsers.push(item);
      }
    });
    console.log('mes amis avec id');
    console.log(this.friendlistUsers);
    this.progressStatus = false;
    this.show = true;
  },
  methods: {
    getIntial() {
      this.userInformation.initial = this.userInformation.name.substring(0, 1);
    },
    async UpdateFollow() {
      console.log('update le follow');
      console.log(this.followStatus);
      if (this.followStatus === true) {
        console.log('add friend');
        const result = await api.postFollow(this.id);
        console.log(result);
        this.followStatus = true;
        this.followStatusText = 'follow';
      } else {
        console.log('remove friend');
        const result = await api.deleteFollow(this.id);
        console.log(result);
        this.followStatus = false;
        this.followStatusText = 'unfollow';
      }
    }
  }
};
</script>
<style>
</style>
