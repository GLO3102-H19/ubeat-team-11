<template>
  <div id="profile" class="md-layout">
    <md-content class="md-layout-item md-size-100">
      <div class="md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-20 md-xsmall-size-100 md-small-100 md-medium-100">
            <md-avatar class="md-avatar-icon md-large md-accent">
                  <md-ripple>{{this.initial}}</md-ripple>
            </md-avatar>
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <h1 class="md-display-1">Name: {{this.name}}</h1>
          <h1 class="md-display-1">Email: {{this.email}}</h1>
   
        </div>
        <div class="md-layout-item md-size-40 md-xsmall-size-100 md-small-100 md-medium-100">
          <md-switch v-model="followStatus" :change="UpdateFollow()">{{this.followStatusText}}</md-switch>
        </div>
      </div>
    </md-content>
    <h1 class="md-display-1">Playlist</h1>
     <playlist-element-list v-bind:playlists="playlistUsers"></playlist-element-list>
     <h1 class="md-display-1">Friends</h1>
  </div>
</template>
<script>
import PlaylistEmentList from '@/components/PlaylistElementList';

export default {
  name: 'UserProfile',
  data: () => ({
    initial: '',
    email: '',
    name: '',
    followStatusText: 'Unfollow',
    followStatus: Boolean,
    playlistUsers: []
  }),
  components: {
    'playlist-element-list': PlaylistEmentList
  },
  mounted() {
    this.getIntial();
  },
  methods: {
    getIntial() {
      const editName = this.name.split(' ');
      this.initial = editName[0].charAt(0) + editName[1].charAt(0);
    },
    UpdateFollow() {
      if (this.followStatus) {
        // mettre API for follow someone
        this.followStatusText = 'follow';
      } else {
          // mettre API for unfollow someone
        this.followStatusText = 'unfollow';
      }
    }
  }
};
</script>
<style>
</style>
