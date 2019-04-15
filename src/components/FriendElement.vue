<template>
  <md-card class="md-layout-item md-size-25 md-medium-size-25 md-small-size-100 md-xsmall-size-100">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{friend.name}}</div>
        <div class="md-subhead">{{friend.email}}</div>
      </md-card-header-text>

      <md-card-media>
      
        <md-avatar class="md-avatar-icon md-large md-accent">
          <md-ripple>{{this.initial}}</md-ripple>
        </md-avatar>
    
      </md-card-media>
    </md-card-header>
    <md-card-actions>
       <md-button @click="redirect()">Profile</md-button>
       <md-switch v-model="friend.doIfollow" @change="UpdateFollow()">{{this.followStatusText}}</md-switch>
    </md-card-actions>
  </md-card>
</template>
<script>
import * as api from '../api';

export default {
  name: 'FriendElement',
  props: {
    friend: {
      type: Object,
      required: false
    },
  },
  data: () => ({
    initial: '',
    followStatusText: 'unfollow',
  }),
  mounted() {
    this.getIntial();
  },
  methods: {
    getIntial() {
      this.initial = this.friend.name.substring(0, 1);
    },
    redirect() {
      console.log('hello');
      this.$router.replace({ name: 'UserProfile', params: { id: this.friend.id } });
      this.$router.go();
    },
    async UpdateFollow() {
      console.log('suivre');
      console.log(this.friend.doIfollow);
      if (this.friend.doIfollow) {
        // mettre API for follow someone
        const result = await api.postFollow(this.friend.id);
        console.log(result);
        this.followStatusText = 'follow';
        this.$emit('add-follow', this.friend.id);
      } else {
        // mettre API for unfollow someone
        console.log(this.friend.id);
        const result = await api.deleteFollow(this.friend.id);
        console.log(result);
        this.followStatusText = 'unfollow';
        console.log(this.$route.name);
        if (this.$route.name === 'MyFriends') {
          this.$emit('delete-follow', this.friend.id);
        } else {
          this.$emit('unfollow', this.friend.id);
        }
      }
    }
  },
};
</script>
<style scoped>
</style>
